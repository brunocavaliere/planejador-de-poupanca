import { useState, useEffect, useMemo } from "react";
import { gql, useMutation } from "@apollo/client";

import { GET_VALUES } from "../AccumulatedValue";
import { COMPARE_CHART } from "../CompareCharts";

import { Fieldset } from "./Fieldset";
import { CardTitle } from "../CardTitle";

const ADD_VALUE = gql`
  mutation ADD_VALUE(
    $initialValue: Float!
    $parcelValue: Float!
    $time: Float!
    $fee: Float!
  ) {
    addValue(
      input: {
        initialValue: $initialValue
        parcelValue: $parcelValue
        time: $time
        fee: $fee
      }
    ) {
      initialValue
      parcelValue
      time
      fee
    }
  }
`;

export const BasicData = () => {
  const [addValue] = useMutation(ADD_VALUE, {
    refetchQueries: [
      {
        query: GET_VALUES,
      },
      {
        query: COMPARE_CHART,
      },
    ],
  });

  const [values, setValues] = useState({
    initialValue: 0,
    parcelValue: 0,
    time: 0,
    fee: 0,
  });

  const handleFormSubmit = (event) => {
    const { value } = event.target;
    const { id } = event.target;

    const justNumbers = value
      .replace(/^([A-Z])(\$)/g, "")
      .replace(/\s/g, "")
      .replace(/\./g, "")
      .replace(/\,/g, ".");

    setValues({ ...values, [id]: justNumbers });
  };

  useEffect(() => {
    if (
      values.initialValue.length > 0 &&
      values.parcelValue.length > 0 &&
      values.time.length > 0 &&
      values.fee.length > 0
    ) {
      addValue({
        variables: {
          initialValue: parseFloat(values.initialValue),
          parcelValue: parseFloat(values.parcelValue),
          time: parseFloat(values.time),
          fee: parseFloat(values.fee),
        },
      });
    }
  }, [values, addValue]);

  return (
    <div className="lg:col-span-3 shadow-md p-5 rounded ">
      <CardTitle title="Dados Básicos:" />

      <form className="flex flex-wrap gap-5">
        <Fieldset
          label="Investimento Inicial:"
          prefix="R$ "
          decimalScale={2}
          fixedDecimalScale
          name="initialValue"
          placeholder="R$ 20.000,00"
          onBlur={handleFormSubmit}
          text="Quanto você já economizou até hoje?"
        />
        <Fieldset
          label="Valor da Parcela:"
          prefix="R$ "
          decimalScale={2}
          fixedDecimalScale
          name="parcelValue"
          placeholder="R$ 1.000,00"
          onBlur={handleFormSubmit}
          text="Quanto você pretende poupar por mês?"
        />
        <Fieldset
          label="Período (em meses):"
          prefix=""
          decimalScale={0}
          name="time"
          placeholder="120"
          onBlur={handleFormSubmit}
          text="Durante quantos meses você pretende poupar?"
        />
        <Fieldset
          label="Taxa de Juros (em % a.a.):"
          prefix=""
          sufix="%"
          decimalScale={2}
          fixedDecimalScale
          name="fee"
          placeholder="8,00%"
          onBlur={handleFormSubmit}
          text="Qual a taxa de juros à qual o seu dinheiro vai render por ano?"
        />
      </form>
    </div>
  );
};
