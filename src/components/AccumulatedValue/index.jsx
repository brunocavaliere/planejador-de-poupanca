import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import { CardTitle } from "../CardTitle";
import { PieOverview } from "./PieOverview";
import { ValueItem } from "./ValueItem";

export const GET_VALUES = gql`
  query GET_VALUES {
    getValuesAccumulated {
      month
      fee
      initial
    }
  }
`;

export const AccumulatedValue = () => {
  const { data } = useQuery(GET_VALUES);

  const [value, setValue] = useState({});

  const sum = value && value.month + value.fee + value.initial;

  useEffect(() => {
    if (data) {
      setValue(data.getValuesAccumulated[0]);
    }
  }, [data]);

  return (
    <div className="shadow-md p-5 rounded">
      <CardTitle title="Participação no Valor Acumulado:" />

      <PieOverview />

      {data && (
        <div className="flex flex-col gap-4 mt-9 px-5 pb-2.5">
          <ValueItem
            color="bg-blue"
            title="Investimento Mensal Acumulado"
            subtitle={`R$ ${Intl.NumberFormat("pt-BR").format(value.month)}`}
            percent={`${+(
              Math.round((value.month / sum) * 100 + "e+2") + "e-2"
            )}%`}
          />
          <ValueItem
            color="bg-purple"
            title="Juros"
            subtitle={`R$ ${Intl.NumberFormat("pt-BR").format(value.fee)}`}
            percent={`${+(
              Math.round((value.fee / sum) * 100 + "e+2") + "e-2"
            )}%`}
          />
          <ValueItem
            color="bg-green-400"
            title="Investimento Inicial"
            subtitle={`R$ ${Intl.NumberFormat("pt-BR").format(value.initial)}`}
            percent={`${+(
              Math.round((value.initial / sum) * 100 + "e+2") + "e-2"
            )}%`}
          />
        </div>
      )}
    </div>
  );
};
