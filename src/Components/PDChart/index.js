import React, { useState, useEffect, useContext } from 'react';
import Chart from 'react-apexcharts';
import { GetData } from '../../Layouts/Main';

function PDChart({chartType}) {

  const ddata = useContext(GetData);
  const data = ddata.slice(0, 100);


  const [chartData, setChartData] = useState({});

  useEffect(() => {
        const chartData = {
        series: data.map(item => item.awnd),
        chart: {
            width: 380,
            type: "pie"
          },
        labels: data.map(item => item.date),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
        }
        setChartData(chartData);
      }, []);

  return (
    <>
    <div className="heading my-2">{chartType} chart</div>
    <div style={{'overflow-x': 'scroll'}}>
      {chartData.series && 
        <Chart options={chartData} series={chartData.series} type={chartType} width="500px" height="500px" />
      }
    </div>
    </>
  );
}

export default PDChart