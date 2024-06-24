import { useState } from 'react';
import '../../css/chart.css'
import Strings from '../../helper/strings';

const AnalysisChart = () => {
    const [showPersonDetail, setShowPersonDetail] = useState(false)
    return (
        <>
            <div className="analysis-chart">
                <div
                    onMouseEnter={() => { setShowPersonDetail(true) }}
                    onMouseLeave={() => { setShowPersonDetail(false) }}
                    className='person' unit='A' jobtitle='Supervisor' no='1'> {Strings.Supervisor}
                </div>
                <div className='v-line'></div>
                <div
                    onMouseEnter={() => { setShowPersonDetail(true) }}
                    onMouseLeave={() => { setShowPersonDetail(false) }}
                    className='person' unit='A' jobtitle='Expert' no='1'>{Strings.Expert}
                </div>
            </div>

            {setShowPersonDetail && (
                < div className="hint" >
                    {/* <label >First Name: <span ></span></label>
                    <label>Last Name: <span></span></label>
                    <label>Experiecne: <span></span></label> */}
                </div >
            )}
        </>
    );
}
 
export default AnalysisChart;