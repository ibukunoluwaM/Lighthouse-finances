import React from "react";
import ReactECharts from "echarts-for-react";

export default function ActiveCapitalUsersChart() {
  const monthNames = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  let startValue = 200;      // starting point in Jan
  let endValue = 2199;       // fixed December target
  let months = 12;
  let totalIncrease = endValue - startValue;

  // Base growth per month (evenly distributed)
  let baseGrowth = Math.floor(totalIncrease / (months - 1));

  // Data array
  let data = [];
  let value = startValue;

  for (let i = 0; i < months; i++) {
    if (i === 0) {
      data.push({ name: monthNames[i], value: [monthNames[i], value] });
    } else if (i === months - 1) {
      // Force December to be exactly 2199
      value = endValue;
      data.push({ name: monthNames[i], value: [monthNames[i], value] });
    } else {
      // Add some randomness around the base growth
      let growth = baseGrowth + Math.floor(Math.random() * 50 - 25);
      value += growth;
      data.push({ name: monthNames[i], value: [monthNames[i], value] });
    }
  }

  let totalActiveUsers = endValue;

  const option = {
    title: {
    //   text: "Active Users",
      left: "left",
      top: "top",
              padding: [0, 0, 0, 20], // indent subtext

      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
      subtext: totalActiveUsers.toString(),
      subtextStyle: {
        fontSize: 28,
        fontWeight: "bolder",
        color: "#a1354f",
        padding: [0, 0, 0, 20], // indent subtext
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
        data: data.map((item) => item.value), // ["Jan", 200], ..., ["Dec", 2199]
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
