import React from "react";
import ReactECharts from "echarts-for-react";

export default function RevenueChart() {
  // Monthly revenue data (in millions of naira)
  const revenues = [120, 200, 150, 80, 70, 110, 130, 180, 220, 300, 250, 270];
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  // Calculate average
  const average =
    revenues.reduce((sum, value) => sum + value, 0) / revenues.length;

  const option = {
    title: {
      text: `Average Revenue: ₦${average.toFixed(1)}M`,
      left: "center",
      top: 10,
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333"
      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: function (params) {
        const item = params[0];
        return months[item.dataIndex] + " : ₦" + item.data + "M";
      }
    },
    grid: {
      left: 40,
      right: 20,
      top: 60,
      bottom: 40
    },
    xAxis: {
      type: "category",
      data: months,
      axisLabel: {
        formatter: function (value, index) {
          if (index === 0) return "Jan";
          if (index === 11) return "Dec";
          return "";
        }
      }
    },
    yAxis: {
      type: "value",
      splitLine: { show: false },
      axisLabel: {show: false}
    },
    series: [
      {
        data: revenues,
        type: "bar",
        itemStyle: {
          color: "#a1354f",
          borderRadius: [6, 6, 0, 0] // rounded top
        },
        barWidth: "60%"
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
}
