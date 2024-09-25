import React, { useContext } from 'react';  
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';  
import { DashboardContext } from '../context/dashboardContext';
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';

const ProductChart = () => {
    const { dates, data } = useContext(DashboardContext)
    const { lang } = useContext(PublicContext);

    let thisY = dates?.date12?.split('/')
    let lastY = dates?.lastDate12?.split('/')
    let chartDate = []
    let index = 0

    if (thisY && dates?.searchType !== 'Year') { thisY = thisY[0] } else{ thisY = 'تولید'}
    if (lastY) lastY = lastY[0]
    
    switch (dates?.searchType) {
        case 'Day':
            index = 2
            for (let i = 1; i <= 12; i++) {
                const temp = dates[`date${i}`]?.split('/');
                if (temp) {
                    chartDate.push(temp[index]);
                }
            }
            break;
        case 'Month':
            index = 1
            for (let i = 1; i <= 12; i++) {
                const temp = dates[`lastDate${i}`]?.split('/');
                if (temp) {
                    chartDate.push(temp[index]);
                }
            }
            break;
        case 'Year':
            index = 0
            for (let i = 1; i <= 12; i++) {
                const temp = dates[`date${i}`]?.split('/');
                if (temp) {
                    chartDate.push(temp[index]);
                }
            }
         
            break;
        case 'Custom':
            index = 3
            break;
    }

    const chartData = [
        { name: chartDate[11], [lastY]: data?.dateToken24, [dates?.date12 !== '0000/00/00' && thisY]: data?.dateToken12 },
        { name: chartDate[10], [lastY]: data?.dateToken23, [dates?.date11 !== '0000/00/00' && thisY]: data?.dateToken11 },
        { name: chartDate[9], [lastY]: data?.dateToken22, [dates?.date10 !== '0000/00/00' && thisY]: data?.dateToken10 },
        { name: chartDate[8], [lastY]: data?.dateToken21, [dates?.date9 !== '0000/00/00' && thisY]: data?.dateToken9 },
        { name: chartDate[7], [lastY]: data?.dateToken20, [dates?.date8 !== '0000/00/00' && thisY]: data?.dateToken8 },
        { name: chartDate[6], [lastY]: data?.dateToken19, [dates?.date7 !== '0000/00/00' && thisY]: data?.dateToken7 },
        { name: chartDate[5], [lastY]: data?.dateToken18, [dates?.date6 !== '0000/00/00' && thisY]: data?.dateToken6 },
        { name: chartDate[4], [lastY]: data?.dateToken17, [dates?.date5 !== '0000/00/00' && thisY]: data?.dateToken5 },
        { name: chartDate[3], [lastY]: data?.dateToken16, [dates?.date4 !== '0000/00/00' && thisY]: data?.dateToken4 },
        { name: chartDate[2], [lastY]: data?.dateToken15, [dates?.date3 !== '0000/00/00' && thisY]: data?.dateToken3 },
        { name: chartDate[1], [lastY]: data?.dateToken14, [dates?.date2 !== '0000/00/00' && thisY]: data?.dateToken2 },
        { name: chartDate[0], [lastY]: data?.dateToken13, [dates?.date1 !== '0000/00/00' && thisY]: data?.dateToken1 }
    ]
    
    return (
        <>
            <ResponsiveContainer className='product-chart' style={{ fontSize: '13px' }}>
                <div className='chart-title'>{Strings.ProductionChartTitle}</div>
                <LineChart data={chartData}>
                    <CartesianGrid stroke="black" strokeOpacity={.3} strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {
                        dates?.searchType === 'Month' &&
                        <Line type="monotone" dataKey={lastY} stroke="blue" activeDot={{ r: 5 }} />
                    }
                    <Line type="monotone" dataKey={thisY} stroke="green" activeDot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
 
export default ProductChart;



