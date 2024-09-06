import React, { useContext } from 'react';  
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';  
import { DashboardContext } from '../context/dashboardContext';
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';

const ProductChart = () => {
    const { dates, data } = useContext(DashboardContext)
    const { lang } = useContext(PublicContext);

    let thisY = dates?.date1?.split('/')
    let lastY = dates?.lastDate1?.split('/')
    let chartDate = []
    let index = 0
    
    switch (dates?.searchType) {
        case 'day':
            index=2
            break;
        case 'Month':
            index=1
            break;
        case 'Year':
            index=0
            break;
        case 'Custom':
            index=3
            break;
    }

    if (thisY) thisY = thisY[0]
    if (lastY) lastY = lastY[0]

    for (let i = 1; i <= 12; i++) {  
        const temp = dates[`date${i}`]?.split('/');  
        if (temp) {  
            chartDate.push(temp[index]);  
        }  
    } 
 

    console.log('data', data)
    console.log('dates', dates)

    const chartData = Array.from({ length: 12 }, (_, i) => ({  
        name: chartDate[11- i], 
        [lastY]: data?.[`dateToken${24 - i}`] ,
        [thisY]: data?.[`dateToken${12 - i}`]  
    }));  
     
    return (
        <>
            
            <ResponsiveContainer className='product-chart' >
                <div className='chart-title'>{ Strings.ProductionChartTitle}</div>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={thisY} stroke="#82ca9d" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey={lastY} stroke="#8884d8" activeDot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
 
export default ProductChart;



