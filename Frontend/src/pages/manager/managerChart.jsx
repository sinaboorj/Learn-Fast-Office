import '../../css/chart.css'
import Strings from '../../helper/strings';

const ManagerChart = () => {
    return (
        <>
            <br />
            <div className='title-chart'>{Strings.Organizational_Chart}</div>
            <div className="managechart-chart">
                    <div className='person'>{Strings.Manager} </div>
                <div className='v-line'></div>
            </div>
        </>
    );
}
 
export default ManagerChart;