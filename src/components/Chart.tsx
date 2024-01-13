"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

type TCurve =
  | "smooth"
  | "straight"
  | "stepline"
  | "smooth"
  | "straight"
  | "stepline";

type ChartType =
  | "area"
  | "donut"
  | "line"
  | "bar"
  | "pie"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap"
  | undefined;

type DateTime = "datetime" | "category" | "numeric" | undefined;

interface ChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      height: number;
      type: ChartType;
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: TCurve | TCurve[];
    };
    xaxis: {
      type: DateTime;
      categories: string[];
    };
    tooltip: {
      x: {
        format: string;
      };
    };
  };
}

interface PieChart {
  series: number[];
  options: {
    chart: {
      type: ChartType;
    };
    responsive: {
      breakpoint: number;
      options: {
        chart: {
          width: number;
        };
        legend: {
          position: string;
        };
      };
    }[];
  };
}

function Chart() {
  const state: ChartState = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  const pie: PieChart = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className=" flex flex-col justify-between p-10">
      <ReactApexChart
        options={pie.options}
        series={pie.series}
        type="donut"
        width={600}
      />
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        width={800}
        height={500}
      />
    </div>
  );
}

export default Chart;
