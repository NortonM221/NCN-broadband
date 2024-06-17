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
      "Customer Service Agreements Received": 11,
      "Customers Connected": 8
  },
  {
      "name": "Phase 2",
      "Total Homes/Businesses to be Passed": 56,
      "Customer Service Agreements Received": 36,
      "Customers Connected": 30
  },
  {
      "name": "Phase 3",
      "Total Homes/Businesses to be Passed": 130,
      "Customer Service Agreements Received": 85,
      "Customers Connected": 77
  },
  {
      "name": "Phase 4",
      "Total Homes/Businesses to be Passed": 68,
      "Customer Service Agreements Received": 48,
      "Customers Connected": 40
  }
]
;

//nanjemoy data
const dataa = [
  {
    "name": "Phase 1",
    "Total Homes/Businesses to be Passed": 156,
    "Customer Service Agreements Received": 110,
    "Customers Connected": 98
},
{
    "name": "Phase 2",
    "Total Homes/Businesses to be Passed": 197,
    "Customer Service Agreements Received": 133,
    "Customers Connected": 126
},
{
    "name": "Phase 3",
    "Total Homes/Businesses to be Passed": 332,
    "Customer Service Agreements Received": 158,
    "Customers Connected": 129
},
{
    "name": "Phase 4",
    "Total Homes/Businesses to be Passed": 283,
    "Customer Service Agreements Received": 132,
    "Customers Connected": 108
},
{
    "name": "Phase 5",
    "Total Homes/Businesses to be Passed": 199,
    "Customer Service Agreements Received": 106,
    "Customers Connected": 89
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
          width={500}
          height={250}
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
          width={500}
          height={250}
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
          <YAxis tickCount={6} label={{ value: 'Total', angle: -90, position: 'outside', dx:-15}} />
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