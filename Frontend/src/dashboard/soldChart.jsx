import React, { useContext } from 'react';  
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Strings from '../helper/strings';
import { DashboardContext } from '../context/dashboardContext';
import { PublicContext } from '../context/publicContext';

const SoldChart = () => {
    const { filterDate } = useContext(DashboardContext)
    const { lang } = useContext(PublicContext);

    let chartData = []
    
    switch (filterDate) {
        case 'Day':
            chartData = [  
                { name: '01', '1403': 2000, '1402': 2400 },  
                { name: '02', '1403': 5000, '1402': 6398 },  
                { name: '03', '1403': 7000, '1402': 1800 },  
                { name: '04', '1403': 9780, '1402': 7908 },  
                { name: '05', '1403': 1890, '1402': 7800 },  
                { name: '06', '1403': 3390, '1402': 8800 },  
                { name: '07', '1403': 3490, '1402': 1300 },
                { name: '08', '1403': 5000, '1402': 4000 },
                { name: '09', '1403': 1490, '1402': 1300 },
                { name: '10', '1403': 5490, '1402': 5300 },
                { name: '11', '1403': 4490, '1402': 2300 },  
                { name: '12', '1403': 4490, '1402': 2300 }, 
            ];
            break;
        case 'Month':
            chartData = [  
                { name: '01', '1403': 1000, '1402': 4400 },  
                { name: '02', '1403': 6000, '1402': 3398 },  
                { name: '03', '1403': 3000, '1402': 8800 },  
                { name: '04', '1403': 2780, '1402': 2908 },  
                { name: '05', '1403': 8890, '1402': 1800 },  
                { name: '06', '1403': 7390, '1402': 6800 },  
                { name: '07', '1403': 5490, '1402': 3300 },
                { name: '08', '1403': 3490, '1402': 8300 },
                { name: '09', '1403': 5090, '1402': 4300 },
                { name: '10', '1403': 9490, '1402': 9300 },
                { name: '11', '1403': 2490, '1402': 2300 },  
                { name: '12', '1403': 4490, '1402': 2300 }, 
            ];
            break;
        case 'Year':
            chartData = [  
                { name: '01', '1403': 4000, '1402': 7400 },  
                { name: '02', '1403': 7000, '1402': 4398 },  
                { name: '03', '1403': 2000, '1402': 3800 },  
                { name: '04', '1403': 5780, '1402': 2908 },  
                { name: '05', '1403': 7890, '1402': 5800 },  
                { name: '06', '1403': 9390, '1402': 8800 },  
                { name: '07', '1403': 2490, '1402': 5300 },
                { name: '08', '1403': 5000, '1402': 3000 },
                { name: '09', '1403': 1490, '1402': 2300 },
                { name: '10', '1403': 8490, '1402': 8300 },
                { name: '11', '1403': 3490, '1402': 6300 },    
                { name: '12', '1403': 4490, '1402': 2300 }, 
            ];
            break;
        case 'Custom':
            chartData = [  
                { name: '01', '1403': 3000, '1402': 2400 },  
                { name: '02', '1403': 5000, '1402': 798 },  
                { name: '03', '1403': 7000, '1402': 3800 },  
                { name: '04', '1403': 4780, '1402': 6908 },  
                { name: '05', '1403': 3890, '1402': 7800 },  
                { name: '06', '1403': 1390, '1402': 4800 },  
                { name: '07', '1403': 7490, '1402': 6300 },
                { name: '08', '1403': 8490, '1402': 2300 },
                { name: '09', '1403': 1090, '1402': 7300 },
                { name: '10', '1403': 3490, '1402': 4300 },
                { name: '11', '1403': 7490, '1402': 6300 }, 
                { name: '12', '1403': 4490, '1402': 2300 }, 
            ];
            break;
    }
    
  
      
    return (
        <>
            
            <ResponsiveContainer className='product-chart' style={{fontSize:'13px'}}>
            <div className='chart-title'>{ Strings.SaleChartTitle}</div>
                <BarChart data={chartData} >
                    <CartesianGrid stroke="black" strokeOpacity={0.3} strokeDasharray="3 3"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend className='legend' verticalAlign="top" align="center" />
                    <Bar dataKey='1402' fill="#6c757d" activeBar={<Rectangle fill="#6c757d" stroke="#8884d8" />} />
                    <Bar dataKey='1403' fill="#d9a303" activeBar={<Rectangle fill="#d9a303" stroke="#82ca9d" />} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
 
export default SoldChart;