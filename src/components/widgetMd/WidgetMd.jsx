import React from "react";
import './widgetMd.css';
import ApexCharts from 'react-apexcharts'


const WidgetMd = () => {
      
        const data = {
            series: [
                {
                  name: 'Actual',
                  data: [
                    {
                      x: 'Phase 1',
                      y: 20,
                      goals: [
                        {
                          name: 'Expected',
                          value: 58,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: 'Phase 2',
                      y: 70,
                      goals: [
                        {
                          name: 'Expected',
                          value: 78,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: 'Phase 3',
                      y: 11,
                      goals: [
                        {
                          name: 'Expected',
                          value: 78,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                    {
                      x: 'Phase 4',
                      y: 69,
                      goals: [
                        {
                          name: 'Expected',
                          value: 167,
                          strokeWidth: 5,
                          strokeColor: '#775DD0'
                        }
                      ]
                    },
                  ]
                }
              ],
              options: {
                chart : {
                  height: 350,
                  width: 500,
                  type: 'bar',   
                },
                plotOptions: {
                  bar: {
                    horizontal: true,
                  }
                },
                colors: ['#00E396'],
                dataLabels : {
                  style: {
                    fontSize: "20px",
                    fontWeight: "lighter",
                    colors:['#000000']
                  },
                  formatter: function(val, opt) {
                    const goals =
                      opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                        .goals
                
                    if (goals && goals.length) {
                      return `${val} / ${goals[0].value}`
                    }
                    return val
                  }
                },
                legend: {
                  fontSize:'25px',
                  show: true,
                  showForSingleSeries: true,
                  customLegendItems: ['Actual', 'Expected'],
                  markers: {
                    fillColors: ['#00E396', '#775DD0']
                  }
                }
              }
        };
    
        return (
            <div className="widgetMd">
                <ApexCharts options={data.options} series={data.series} type="bar" height={250} />
                </div>
        )

}

export default WidgetMd;