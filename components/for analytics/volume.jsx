import React from "react";
import ReactECharts from "echarts-for-react";

export default function TotalVolumesChart() {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  // Generate steadily increasing data with larger increments
  function increasingData(monthLabel, previousValue) {
    let growth = Math.round(Math.random() * 4_000_000 + 2_000_000); 
    // 👆 growth between 2M and 6M each month
    return {
      name: monthLabel,
      value: [monthLabel, previousValue + growth],
    };
  }

  let data = [];
  let value = 5_000_000; // starting around ₦5M

  for (let i = 0; i < monthNames.length; i++) {
    let point = increasingData(monthNames[i], value);
    value = point.value[1];
    data.push(point);
  }

  // Total sum across all months
  let totalVolume = data.reduce((sum, item) => sum + item.value[1], 0);

  const option = {
    title: {
      text: "Total Volumes",
      left: "left",
      top: "top",
      padding: [0, 0, 0, 20],
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
      subtext: `₦${(totalVolume / 1_000_000).toFixed(1)}M`, // show sum in millions
      subtextStyle: {
        fontSize: 28,
        fontWeight: "bolder",
        color: "#a1354f",
        padding: [0, 0, 0, 20],
      },
    },
    grid: {
      left: 40,
      right: 20,
      top: 80,
      bottom: 40,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        params = params[0];
        return (
          params.value[0] + " : ₦" + params.value[1].toLocaleString()
        );
      },
    },
    xAxis: {
      type: "category",
      data: monthNames,
      axisLabel: {
        formatter: function (value, index) {
          if (index === 0) return "Jan";
          if (index === 11) return "Dec";
          return "";
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    series: [
      {
        name: "Volumes",
        type: "line",
        data: data.map((item) => item.value),
        showSymbol: true,
        smooth: true,
        lineStyle: {
          color: "#a1354f",
          width: 3,
        },
        itemStyle: {
          color: "#a1354f",
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
}
