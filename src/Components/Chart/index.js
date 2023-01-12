import React, { useState, useEffect, useContext } from 'react';
import Chart from 'react-apexcharts';
import { GetData } from '../../Layouts/Main';

function MyChart({chartType}) {

  const ddata = useContext(GetData);
  const data = ddata.slice(0, 100);


  const [chartData, setChartData] = useState({});

  useEffect(() => {
        const chartData = {
          series: [{
            name: 'Minimum Temperature',
            data: data.map(item => item.tmin)
          },
          {
            name: 'Maximum Temperature',
            data: data.map(item => item.tmax)
          }],
          options: {
            xaxis: {
              categories: data.map(item => item.date)
            }
          }
        }
        setChartData(chartData);
      }, []);

  return (
    <>
    <div className="heading my-2">{chartType} chart</div>
    <div style={{'overflow-x': 'scroll'}}>
      {chartData.series && 
        <Chart options={chartData.options} series={chartData.series} type={chartType} width="5000px" height="500px" />
      }
    </div>
    </>
  );
}

export default MyChart