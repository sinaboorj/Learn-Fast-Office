import { FaFilter, FaCalendar } from 'react-icons/fa';
import { useState } from "react";

const DashFilter = () => {
    const [selectedOption, setSelectedOption] = useState('option1');
 
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className="dashboard-item filter">
                FILTER <FaFilter className="d-icon" /><br />
                <div className="filter-date">
                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleChange}
                        /> Month
                    </label>

                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleChange}
                        /> Year
                    </label>

                    <label>
                        <input
                            style={{ marginRight: '3px' }}
                            type="radio"
                            value="option3"
                            checked={selectedOption === 'option3'}
                            onChange={handleChange}
                        /> Custom
                    </label>
                </div>
            </div>
        </>
    );
}
 
export default DashFilter;