import Head from "next/head";
import { BasicData } from "../components/BasicData";
import { AccumulatedValue } from "../components/AccumulatedValue";
import { CompareCharts } from "../components/CompareCharts";

import { Brand } from "../components/Brand";
import { Content } from "../components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Planejador de Poupança</title>
      </Head>

      <main className="w-screen h-screen">
        <div className="container mx-auto pt-8 px-5 pb-12">
          <Brand />

          <Content>
            <BasicData />
            <AccumulatedValue />
            <CompareCharts />
          </Content>
        </div>
      </main>
    </>
  );
}
