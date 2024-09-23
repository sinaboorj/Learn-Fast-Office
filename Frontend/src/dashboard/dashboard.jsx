import InsigImage from "../public/insigImage";
import '../sass/dashboard.scss'
import DashboardTags from "./dashboardTags";
import OperationalEfficiency from "./operationalEfficiency";
import ProductChart from "./productChart";
import SoldChart from "./soldChart";
import '../sass/efficiencyChart.scss'
import OutLostP from "./outLostP";
import EfficiencyChart from "./efficiencyChart";
import OutStopPipeChart from "./outStopPipeChart";


const Dashboard = () => {

    return (
        <>
            <DashboardTags />
            <div className="chart">
                <ProductChart />
                <SoldChart />
            </div>
            <br /><br />
            <hr />
            <div className="chart">
               <EfficiencyChart />
                <OperationalEfficiency />
            </div>
            <hr />
            <div className="chart">
                <OutStopPipeChart />
                <OutLostP />
            </div>
            <br />
            <InsigImage />
        </>
    );
}
export default Dashboard