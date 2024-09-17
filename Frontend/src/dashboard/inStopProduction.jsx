import React from 'react';  
import {    PieChart,  Pie,  Cell,   Tooltip,    Legend,  } from 'recharts'; 
import '../sass/stopCharts.scss'

const InStopProduction = () => {
  const data = [
    { name: 'بخش 1', value: 400 },
    { name: 'بخش 2', value: 300 },
    { name: 'بخش 3', value: 300 },
    { name: 'بخش 4', value: 200 },
    { name: 'بخش 5', value: 100 },
  ];
  
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0); 
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];
    
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
    const x = cx + (outerRadius + 10) * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + (outerRadius + 10) * Math.sin(-midAngle * Math.PI / 180);
    const percentage = Math.round(((value / totalValue) * 100).toFixed(2)); // محاسبه درصد  
    return (
      <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central">
         {` (${percentage}%) ${name}`}  
      </text>
    );
  };
  return (
      <div className="stop-in">
        <span className="efficiency-text">توقفات داخل بخشی</span><br />
        <PieChart width={450} height={400}>
          <Pie data={data} cx={200} cy={200} labelLine={true} label={renderCustomizedLabel}
            outerRadius={80} fill="#8884d8" dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
  );
}
 
export default InStopProduction;