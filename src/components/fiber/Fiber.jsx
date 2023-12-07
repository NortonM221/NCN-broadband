import React from 'react';
import { ResponsiveContainer } from 'recharts';
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    LabelList,
    Bar,
  } from "recharts";
import "./fiber.css"




export default function Fiber(){


const data = [
    {
      name: "Nanjemoy",
      "Number of Feet of Fiber Installed to Date": 168370,
      "Total Number of Feet to be Installed": 462690
    },
    {
      name: "Cobb Neck",
      "Number of Feet of Fiber Installed to Date": 47980,
      "Total Number of Feet to be Installed": 164094
    },
];

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#4c4c4c" textAnchor="middle" dy={-5}>{`${value.toLocaleString()}`}</text>;
  };

    return(
        
            <div>
                <div className="container">
                <BarChart
                  width={500}
                  height={500}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickCount={10} label={{ value: 'Total Feet', angle: -90, position: 'outside', dx:-45}} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Number of Feet of Fiber Installed to Date" fill="#00E396" label={renderCustomBarLabel} barSize={42}/>
                  <Bar dataKey="Total Number of Feet to be Installed" fill="#8884d8" label={renderCustomBarLabel} barSize={42}/>
                </BarChart>
                </div>
              </div>
          );
        };