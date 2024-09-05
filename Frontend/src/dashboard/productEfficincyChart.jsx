import React, { useContext } from 'react';  
import { PieChart, Pie, Cell } from 'recharts';
import { DashboardContext } from '../context/dashboardContext';

const ProductEfficincyChart = () => {
    const {
        date1, date2, date3, date4, date5, date6, date7, date8, date9, date10,
        date11, date12, lastDate1, lastDate2, lastDate3, lastDate4, lastDate5,
        lastDate6, lastDate7, lastDate8, lastDate9, lastDate10, lastDate11,
        lastDate12, startDate, endDate, lastStartDate, lastEndDate, searchType
    } = useContext(DashboardContext)
    
    const RADIAN = Math.PI / 180;

    const data = [
        { name: 'A', value: 180, color: '#fd7e14' },

    ];
    const cx = 150;
    const cy = 200;
    const iR = 50;
    const oR = 100;
    const value = 50;
    
    const needle = (value, data, cx, cy, iR, oR, color) => {
        let total = 0;
        data.forEach((v) => {
            total += v.value;
        });
        const ang = 180.0 * (1 - value / total);
        const length = (iR + 2 * oR) / 3;
        const sin = Math.sin(-RADIAN * ang);
        const cos = Math.cos(-RADIAN * ang);
        const r = 5;
        const x0 = cx + 5;
        const y0 = cy + 5;
        const xba = x0 + r * sin;
        const yba = y0 - r * cos;
        const xbb = x0 - r * sin;
        const ybb = y0 + r * cos;
        const xp = x0 + length * cos;
        const yp = y0 + length * sin;
    
        return [
            <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
            <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
        ];
    };
    
    
    return (
        <>
            
            <PieChart width={400} height={700}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx={cx}
                    cy={cy}
                    innerRadius={iR}
                    outerRadius={oR}
                    fill="#8884d8"
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                {needle(value, data, cx, cy, iR, oR, '#cfe2ff')}
                
            </PieChart>
            
        </>
    );
}
 
export default ProductEfficincyChart;


