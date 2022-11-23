

export function getOptions (data: any) {
  console.log("data", data)
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      confine: true
    },
    dataZoom: [
      {
        type: 'inside',
        start: 40,
        end: 100
      },
      {
        start: 0,
        end: 20
      }
    ],
    grid: {
      left: '0px',
      top: '10px',
      right: '20px',
      bottom: '50px',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.datetime,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#414141'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#888888'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#888888'
        }
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#414141'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#888888'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#888888'
        }
      }
    },
    series: [
      {
        name: '温度',
        data: data.data01,
        type: 'line',
        smooth: true,
        itemStyle: {
          color:'rgba(10, 148, 221, 1)'
        }
      },
      {
        name: '降水',
        data: data.data02,
        type: 'line',
        smooth: true,
        itemStyle: {
          color:'#b703b9'
        }
      },
      {
        name: '湿度',
        data: data.data03,
        type: 'bar',
        smooth: true,
        itemStyle: {
          color:'#3fb903'
        }
      },
      {
        name: '气压',
        data: data.data04,
        type: 'line',
        smooth: true,
        itemStyle: {
          color:'#b3fbf8'
        }
      },
      {
        name: '风速',
        data: data.data05,
        type: 'line',
        smooth: true,
        itemStyle: {
          color:'rgba(239, 176, 0, 1)'
        }
      },
    ]
  };
}