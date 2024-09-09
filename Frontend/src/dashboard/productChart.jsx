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
        case 'Day':
            index = 2
            break;
        case 'Month':
            index = 1
            break;
        case 'Year':
            index = 0
            break;
        case 'Custom':
            index = 3
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
 
    const chartData = [
        { name: chartDate[11], [lastY]: data?.dateToken24, [thisY]: data?.dateToken12 },
        { name: chartDate[10], [lastY]: data?.dateToken23, [thisY]: data?.dateToken11 },
        { name: chartDate[9], [lastY]: data?.dateToken22, [thisY]: data?.dateToken10 },
        { name: chartDate[8], [lastY]: data?.dateToken21, [thisY]: data?.dateToken9 },
        { name: chartDate[7], [lastY]: data?.dateToken20, [thisY]: data?.dateToken8 },
        { name: chartDate[6], [lastY]: data?.dateToken19, [thisY]: data?.dateToken7 },
        { name: chartDate[5], [lastY]: data?.dateToken18, [thisY]: data?.dateToken6 },
        { name: chartDate[4], [lastY]: data?.dateToken17, [thisY]: data?.dateToken5 },
        { name: chartDate[3], [lastY]: data?.dateToken16, [thisY]: data?.dateToken4 },
        { name: chartDate[2], [lastY]: data?.dateToken15, [thisY]: data?.dateToken3 },
        { name: chartDate[1], [lastY]: data?.dateToken14, [thisY]: data?.dateToken2 },
        { name: chartDate[0], [lastY]: data?.dateToken13, [thisY]: data?.dateToken1 }
    ]

    console.clear
    return (
        <>
            <ResponsiveContainer className='product-chart' >
                <div className='chart-title'>{Strings.ProductionChartTitle}</div>
                <LineChart data={chartData}>
                    <CartesianGrid stroke="#d3d3d3" strokeOpacity={0.3} strokeDasharray="3 3" />
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



