import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function MyChart(props) {

  const [chartData, setChartData] = useState({});

  const data = props.props.slice(0, 100);

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
    <div className="heading my-2">Chart</div>
    <div style={{'overflow-x': 'scroll'}}>
      {chartData.series && 
        <Chart options={chartData.options} series={chartData.series} type="bar" width="5000px" height="500px" />
      }
    </div>
    </>
  );
}

export default MyChart