import { FaFilter } from 'react-icons/fa';
import { DashboardContext } from '../context/dashboardContext';
import { useContext } from "react";
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';
import loadingImage from '/sysImage/loading.gif'

const DateFilter = () => {
    const { filterDate, setFilterDate, dashboardLoading } = useContext(DashboardContext)
    const { lang } = useContext(PublicContext);

    if (dashboardLoading) {
        <div style={{ width: '100vw', height: '10vh', display: 'flex', alignItems: 'center', margin: 'auto', justifyContent: 'center' }}>
            <h5 style={{ color: '#b7b2b2', textAlign: 'center' }}>Waiting... <img src={loadingImage} width={45} height={45} alt="Loading user" /></h5>
        </div>
    }
    
    return (
        <>
            <div className="dashboard-item filter">
                {Strings.FILTER}  <FaFilter className="d-icon" /><br />
                <form className="filter-date">
                   
                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value='Day'
                            checked={filterDate === 'Day'}
                            onChange={(e) => setFilterDate(e.target.value)}
                        /> {Strings.Day}
                    </label>
                   
                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value='Month'
                            checked={filterDate === 'Month'}
                            onChange={(e) => setFilterDate(e.target.value)}
                        /> {Strings.Month}
                    </label>

                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value='Year'
                            checked={filterDate === 'Year'}
                            onChange={(e) => setFilterDate(e.target.value)}
                        /> {Strings.Year}
                    </label>

                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value='Custom'
                            checked={filterDate === 'Custom'}
                            onChange={(e) => setFilterDate(e.target.value)}
                        /> {Strings.Custom}
                    </label>
                </form>
            </div>
        </>
    );
}
 
export default DateFilter;
