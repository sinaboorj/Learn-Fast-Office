import { FaFilter } from 'react-icons/fa';
import { DashboardContext } from '../context/dashboardContext';
import { useContext } from "react";

const DateFilter = () => {
    const {filterDate, setFilterDate, dashboardLoading}=useContext(DashboardContext)

    const handleChange = (event) => {
        setFilterDate(event.target.value);
    };

    if (dashboardLoading) {
        return <div style={{color:'white'}}>Loading...</div>
    }
    return (
        <>
            <div className="dashboard-item filter">
                FILTER <FaFilter className="d-icon" /><br />
                <form className="filter-date">
                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value="Month"
                            checked={filterDate === 'Month'}
                            onChange={handleChange}
                        /> Month
                    </label>

                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value="Year"
                            checked={filterDate === 'Year'}
                            onChange={handleChange}
                        /> Year
                    </label>

                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value="Custom"
                            checked={filterDate === 'Custom'}
                            onChange={handleChange}
                        /> Custom
                    </label>
                </form>
            </div>
        </>
    );
}
 
export default DateFilter;
