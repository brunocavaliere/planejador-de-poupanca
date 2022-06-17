import { useQuery, gql } from "@apollo/client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DATA = gql`
  query {
    getValuesAccumulated {
      accumulated
      saved
      month
      fee
      initial
    }
  }
`;

export const PieOverview = () => {
  const { data } = useQuery(DATA);

  const options = {
    chart: {
      type: "pie",
      margin: 0,
      padding: 0,
      height: 270,
      width: 270,
    },
    title: {
      text: `<div class="flex flex-col items-center justify-center w-[190px] bg-white pt-[63px] pb-[51px] rounded-full shadow-lg">
              <p class="mb-1.5 text-2xs text-gray-400 leading-none">Valor Acumulado</p>
  
              <p class="mb-1.5 text-lg text-gray-900 font-semibold leading-none">R$ ${
                data &&
                Intl.NumberFormat("pt-BR").format(
                  data.getValuesAccumulated[0].accumulated
                )
              }</p>
  
              <p class="mb-0.5 text-3xs text-gray-400 leading-4">
                Você terá poupado:
              </p>
  
              <p class="text-3xs text-gray-900 font-medium leading-4">
                R$ ${
                  data &&
                  Intl.NumberFormat("pt-BR").format(
                    data.getValuesAccumulated[0].saved
                  )
                }
              </p>
            </div>`,
      useHTML: true,
      style: {
        fontFamily: "Epilogue",
      },
      margin: 0,
      verticalAlign: "middle",
    },
    plotOptions: {
      pie: {
        borderWidth: 8,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#21A3ED", "#7B1CF3", "#07CC6D"],
    series: [
      {
        minPointSize: 5,
        innerSize: "85%",
        zMin: 0,
        name: "values",
        data: [
          {
            name: "Month",
            y: data && data.getValuesAccumulated[0].month,
          },
          {
            name: "Fee",
            y: data && data.getValuesAccumulated[0].fee,
          },
          {
            name: "Initial",
            y: data && data.getValuesAccumulated[0].initial,
          },
        ],
        dataLabels: [
          {
            enabled: false,
          },
          {
            textPath: {
              enabled: false,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="flex w-[270px] h-[270px] bg-white mx-auto">
      <div className="flex mx-auto">
        {data && <HighchartsReact highcharts={Highcharts} options={options} />}
      </div>
    </div>
  );
};
