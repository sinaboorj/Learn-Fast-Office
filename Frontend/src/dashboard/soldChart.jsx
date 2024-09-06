import React, { useContext } from 'react';  
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Strings from '../helper/strings';
import { DashboardContext } from '../context/dashboardContext';
import { PublicContext } from '../context/publicContext';

const SoldChart = () => {
    const { lang } = useContext(PublicContext);
    const {
        date1, date2, date3, date4, date5, date6, date7, date8, date9, date10,
        date11, date12, lastDate1, lastDate2, lastDate3, lastDate4, lastDate5,
        lastDate6, lastDate7, lastDate8, lastDate9, lastDate10, lastDate11,
        lastDate12, startDate, endDate, lastStartDate, lastEndDate, searchType
    } = useContext(DashboardContext)
    
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
      
    
    return (
        <>
            
            <ResponsiveContainer className='product-chart'>
            <div className='chart-title'>{ Strings.SaleChartTitle}</div>
                <BarChart data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="#8884d8" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="#82ca9d" stroke="#82ca9d" />} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
 
export default SoldChart;
