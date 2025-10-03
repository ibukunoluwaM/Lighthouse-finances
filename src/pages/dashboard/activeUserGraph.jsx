import React from "react";
import ReactECharts from "echarts-for-react";

export default function ActiveUsersChart() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Generate steadily increasing data
  function increasingData(monthLabel, previousValue) {
    let growth = Math.round(Math.random() * 100 + 50);
    return {
      name: monthLabel,
      value: [monthLabel, previousValue + growth],
    };
  }

  let data = [];
  let value = 200; // starting point

  for (let i = 0; i < monthNames.length; i++) {
    let point = increasingData(monthNames[i], value);
    value = point.value[1];
    data.push(point);
  }

  // Force December’s value to 2571
  data[data.length - 1].value[1] = 2571;

  let totalActiveUsers = 2571;

  const option = {
    title: {
      // text: "Active Users",
      left: "left",
      top: "top",
      padding: [0, 0, 0, 20],
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
      subtext: totalActiveUsers.toString(),
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
        return params.value[0] + " : " + params.value[1];
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
        name: "Increasing Data",
        type: "line",
        data: data.map((item) => item.value), // ["Jan", 200], ["Feb", 400]...
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
