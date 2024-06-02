import '../../css/chart.css'
import Strings from '../../helper/strings';

const AnalysisChart = () => {
    return (
        <>
            <div className="analysis-chart">
                    <div className='person'>{Strings.supervisor} </div>
                    <div className='v-line'></div>
                    <div className='person'>{Strings.Expert} </div>
            </div>
        </>
    );
}
 
export default AnalysisChart;