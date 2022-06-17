import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { gql, useQuery } from "@apollo/client";

import { CardTitle } from "./CardTitle";
import { useEffect } from "react";

export const COMPARE_CHART = gql`
  query COMPARE_CHART {
    getValuesAccumulatedChart
    getValuesInvestedChart
  }
`;

export const CompareCharts = () => {
  const { data } = useQuery(COMPARE_CHART);

  useEffect(() => {
    console.log("data", data && data);
  }, [data]);

  const options = {
    chart: {
      height: 420,
      width: 800,
    },
    title: {
      style: {
        display: "none",
      },
    },
    plotOptions: {
      series: {
        cumulative: false,
        pointStart: 1,
      },
    },
    rangeSelector: {
      enabled: false,
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>',
      changeDecimals: 2,
      valueDecimals: 2,
    },
    yAxis: {
      labels: {
        formatter: function () {
          return "R$ " + this.value;
        },
      },
      title: {
        text: "",
      },
    },
    xAxis: {
      labels: {
        formatter: function () {
          return "Mês " + this.value;
        },
      },
      tickPixelInterval: 200,
    },
    navigator: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    series: [
      {
        name: "Valor Investido",
        color: "#868686",
        data: data && data.getValuesInvestedChart,
      },
      {
        name: "Valor Acumulado",
        color: "#09B682",
        data: data && data.getValuesAccumulatedChart,
      },
    ],
  };

  return (
    <div className="col-span-2 shadow-md p-5 rounded">
      <CardTitle title="Projeção Financeira:" />

      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />

        <div className="flex justify-center gap-12 mt-4">
          <div className="flex items-center gap-2.5">
            <span className="block bg-gray-500 w-8 h-[3px] rounded" />
            <p className="text-xs text-gray-900">Valor Investido</p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="block bg-green-500 w-8 h-[3px] rounded" />
            <p className="text-xs text-gray-900">Valor Acumulado</p>
          </div>
        </div>
      </div>
    </div>
  );
};
