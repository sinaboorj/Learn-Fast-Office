import { FaFilter } from 'react-icons/fa';  
import { DashboardContext } from '../context/dashboardContext';  
import { useContext, useState } from "react";  
import Strings from '../helper/strings';  
import { PublicContext } from '../context/publicContext';  

const DateFilter = () => {
    const { filterDate, setFilterDate } = useContext(DashboardContext);
    const { lang } = useContext(PublicContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = async (value) => {  
        setIsLoading(true);  
        setFilterDate(value);  
        await new Promise((resolve) => setTimeout(resolve, 2000));  
        setIsLoading(false);  
    }; 

    if (isLoading) {
        document.body.style.cursor = 'wait'; // تغییر شکل اشاره‌گر به حالت "busy"  
    } else {
        document.body.style.cursor = 'default'; // بازگشت به حالت پیش‌فرض  
    }

    return (
        <>
            <div className="dashboard-item filter">
                {Strings.FILTER}  <FaFilter className="d-icon" /><br />
                <form className="filter-date">
                    <label style={{cursor: isLoading ? 'wait' : 'pointer'}}>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value={filterDate}
                            checked={filterDate === 'Day'}
                            onChange={() => handleChange('Day')}
                        /> {Strings.Day}
                    </label>
                    <label style={{cursor: isLoading ? 'wait' : 'pointer'}}>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value={filterDate}
                            checked={filterDate === 'Month'}
                            onChange={() => handleChange('Month')}
                        /> {Strings.Month}
                    </label>
                    <label style={{cursor: isLoading ? 'wait' : 'pointer'}}>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value={filterDate}
                            checked={filterDate === 'Year'}
                            onChange={() => handleChange('Year')}
                        /> {Strings.Year}
                    </label>
                    <label style={{cursor: isLoading ? 'wait' : 'pointer'}}>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value='Custom'
                            checked={filterDate === 'Custom'}
                            onChange={() => handleChange('Custom')}
                        /> {Strings.Custom}
                    </label>
                </form>
            </div>
        </>
    );
}  

export default DateFilter;  