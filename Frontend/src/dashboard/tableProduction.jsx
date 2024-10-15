import { useContext, useState } from "react";
import { PublicContext } from "../context/publicContext";


const TableProduction = () => {
    const { lang } = useContext(PublicContext)
    const [isHovered, setIsHovered] = useState(false);

    const data = [
        { name: 'کوثر (نورد میلگرد)', plannA: 350000, plannB: 465000, runA: '70%', runB: '52%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: 'خط یک (نورد میلگرد)', plannA: 350000, plannB: 465000, runA: '95%', runB: '84%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: '(خط سه (نورد مفتول', plannA: 350000, plannB: 465000, runA: '65%', runB: '65%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: 'خط 630 (نوردآهن)', plannA: 350000, plannB: 465000, runA: '85%', runB: '75%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: 'خط 650 (نورد تیرآهن)', plannA: 350000, plannB: 465000, runA: '74%', runB: '65%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: 'لوله سازی (بیدرز)', plannA: 350000, plannB: 465000, runA: '65%', runB: '65%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: 'صنایع فلزی (قطع کن)', plannA: 350000, plannB: 465000, runA: '86%', runB: '65%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: 'فولادسازی (شمش بیلت)', plannA: 350000, plannB: 465000, runA: '76%', runB: '65%', production: 348000, lastProduction: 487500, growth: '25%' },
        { name: 'جمع کل', plannA: 350000, plannB: 465000, runA: '70%', runB: '91%', production: 348000, lastProduction: 487500, growth: '25%' },
    ];
        
   const getRowStyle = (isHovered) => ({  
        color: isHovered && '#141414e1' ,  
       // transition: 'background-color .3s ease'  
    });  

    const getHoverFontColorStyle = (isHovered) => ({
        color: isHovered && '#e5e7eb'
    })

    return (
        <>
            <div className="stop-in">
                <span className="chart-title" > {lang ? 'Production by lines' : 'تولیدات به تفکیک خطوط '} </span>
                <div>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th><span>رشد به سال</span><br /><span> قبل</span></th>
                                <th><span>تولید سال</span><br /><span> قبل</span></th>
                                <th>اجراء</th>
                                <th><span>برنامه</span><br /><span> بودجه</span></th>
                                <th>اجراء</th>
                                <th><span>برنامه</span><br /><span> عملیاتی</span></th>
                                <th>تولید</th>
                                <th>خطوط</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(user => (
                                <tr key={user.name}
                                    style={getRowStyle(isHovered)} 
                                    onMouseEnter={() => { if (user.name === 'جمع کل') setIsHovered(true) }} 
                                    onMouseLeave={() => setIsHovered(false)}     
                                >
                                    <td>{user.growth}</td>
                                    <td>{user.lastProduction}</td>
                                    <td>{user.runB}</td>
                                    <td>{user.plannB}</td>
                                    <td>{user.runA}</td>
                                    <td>{user.plannA}</td>
                                    <td>{user.production}</td>
                                    <td style={{ backgroundColor: user.name === 'جمع کل' && '#c3c3c3' }} >{user.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default TableProduction;
