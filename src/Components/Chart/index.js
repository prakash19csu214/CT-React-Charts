import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function MyChart(props) {

  const [chartData, setChartData] = useState({});

  const data = props.props.slice(10);

  useEffect(() => {
        const chartData = {
          series: [{
            name: 'Data',
            data: data.map(item => item.tmin)
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
    <div>
      {chartData.series && 
        <Chart options={chartData.options} series={chartData.series} type="bar" width="5000" />
      }
    </div>
    </>
  );
}

export default MyChart