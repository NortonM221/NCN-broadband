import React from "react";
import "./featuredInfo.css";
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

const FeaturedInfo = () => {

  //cobb neck
  const data = [
    {
      "name": "Phase 1",
      "Total Homes/Businesses to be Passed": 45,
      "Customer Service Agreements Received": 8,
      "Customers Connected": 8
  },
  {
      "name": "Phase 2",
      "Total Homes/Businesses to be Passed": 56,
      "Customer Service Agreements Received": 33,
      "Customers Connected": 31
  },
  {
      "name": "Phase 3",
      "Total Homes/Businesses to be Passed": 128,
      "Customer Service Agreements Received": 78,
      "Customers Connected": 70
  },
  {
      "name": "Phase 4",
      "Total Homes/Businesses to be Passed": 64,
      "Customer Service Agreements Received": 46,
      "Customers Connected": 9
  }
]
;

//nanjemoy data
const dataa = [
  {
    "name": "Phase 1",
    "Total Homes/Businesses to be Passed": 154,
    "Customer Service Agreements Received": 99,
    "Customers Connected": 89
},
{
    "name": "Phase 2",
    "Total Homes/Businesses to be Passed": 197,
    "Customer Service Agreements Received": 123,
    "Customers Connected": 117
},
{
    "name": "Phase 3",
    "Total Homes/Businesses to be Passed": 329,
    "Customer Service Agreements Received": 123,
    "Customers Connected": 84
},
{
    "name": "Phase 4",
    "Total Homes/Businesses to be Passed": 282,
    "Customer Service Agreements Received": 107,
    "Customers Connected": 38
},
{
    "name": "Phase 5",
    "Total Homes/Businesses to be Passed": 196,
    "Customer Service Agreements Received": 86,
    "Customers Connected": 51
}
];
const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return <text x={x + width / 2} y={y} fill="#4c4c4c" textAnchor="middle" dy={-1}>{`${value}`}</text>;
};
  return (
    <div className="parentDiv">
      <div className="chart">
        <div>
        <span className="chartTitle">Nanjemoy</span>
      <BarChart 
          width={550}
          height={300}
          data={dataa}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickCount={10} label={{ value: 'Total', angle: -90, position: 'outside', dx:-30}} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total Homes/Businesses to be Passed"  fill="#0078ad" label={renderCustomBarLabel} />
          <Bar dataKey="Customer Service Agreements Received" fill="#4CBB17" label={renderCustomBarLabel} />
          <Bar dataKey="Customers Connected" fill="#efb40f" label={renderCustomBarLabel} />
        </BarChart>
        </div>
        <div>
          <span className="chartTitle">Cobb Neck</span>
        <BarChart
          width={550}
          height={300}
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
          <YAxis tickCount={4} label={{ value: 'Total', angle: -90, position: 'outside', dx:-15}} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total Homes/Businesses to be Passed" fill="#0078ad" label={renderCustomBarLabel} />
          <Bar dataKey="Customer Service Agreements Received" fill="#4CBB17" label={renderCustomBarLabel} />
          <Bar dataKey="Customers Connected" fill="#efb40f" label={renderCustomBarLabel} />
        </BarChart>
        </div>
        </div>
    </div>
  );
};

export default FeaturedInfo;