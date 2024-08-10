
import { useState } from "react";
import InsigImage from "../public/insigImage";
import '../sass/dashboard.scss'
import {BsFillArchiveFill, BsFillGrid3X3GapFill} from 'react-icons/bs'

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState('option1');
 
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <hr />
            <h4 className="dashboard-text">
                DASHBOARD
            </h4>
            <div className="dashboard-items">
                <div className="dashboard-item categories">
                    CATEGORIES <BsFillGrid3X3GapFill className="d-icon" />
                </div>
                <div className="dashboard-item product">
                    PRODUCT <BsFillArchiveFill className="d-icon" />
                </div>
                <div className="dashboard-item plan">
                    PLAN <BsFillGrid3X3GapFill className="d-icon" />
                </div>
                <div className="dashboard-item date">
                    FILTER <BsFillGrid3X3GapFill className="d-icon" /><br />
                    <div className="filter-date">
                        <label>
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleChange}
                            />  Month
                        </label>

                        <label>
                            <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleChange}
                            />  Year
                        </label>

                        <label>
                            <input
                                type="radio"
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleChange}
                            />Custom
                        </label>
                    </div>

                </div>
            </div>
            <br />
            <InsigImage />
        </>
    );
}
 
export default Dashboard;