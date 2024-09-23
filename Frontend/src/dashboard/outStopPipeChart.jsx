import React from 'react';  
import {    PieChart,  Pie,  Cell,   Tooltip,    Legend,  } from 'recharts'; 
import '../sass/stopCharts.scss'

const OutStopPipeChart = () => {
    
  const data = [
    { name: 'ت.اساسی', value: 70 },
    { name: 'ت.هفتگی', value: 50 },
    { name: 'ت.سایز', value: 60 },
    { name: 'ک. مواد', value: 600 },
    { name: 'قطع برق', value: 400 },
    { name: 'ت. م. برشرایط', value: 0 },
    { name: 'ک.قطعه', value: 400 },
    { name: 'سایر', value: 400 },
  ];
    
  const totalValue = data?.reduce((acc, entry) => acc + entry.value, 0); 
  const COLORS = ['#0d6efd', '#6610f2', '#6c757d', '#dc3545', '#FF6384','red','blue','#198754'];
    
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
    const x = cx + 10+(outerRadius + 0) * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + 10+(outerRadius + 0) * Math.sin(-midAngle * Math.PI / 180);
    const percentage = Math.round(((value / totalValue) * 100).toFixed(2)); // محاسبه درصد 
    return (
      <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central" style={{fontSize:'12px'}}>
        {` ${percentage}% ${name}`} 
      </text>
    );
  };
  return (
    <div className="stop-in">
      <span className="efficiency-text" style={{margin:'auto'}}> ( ساعت )توقفات خارج بخشی</span>
      <PieChart width={300} height={300}>
        <Pie data={data} cx={150} cy={150} labelLine={true} label={renderCustomizedLabel}
          outerRadius={90} fill="#8884d8" dataKey="value"
        >
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
 
export default OutStopPipeChart;
