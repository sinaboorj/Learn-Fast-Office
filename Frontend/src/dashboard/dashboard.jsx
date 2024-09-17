import InsigImage from "../public/insigImage";
import '../sass/dashboard.scss'
import DashboardTags from "./dashboardTags";
import OperationalEfficiency from "./operationalEfficiency";
import ProductChart from "./productChart";
import ProductionEfficiency from "./productionEfficiency";
import SoldChart from "./soldChart";
import '../sass/efficiency.scss'
import OutStopProduction from "./outStopProduction";
import OutLostP from "./outLostP";


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
                <ProductionEfficiency />
                <OperationalEfficiency />
            </div>
            <hr />
            <div className="chart">
                <OutStopProduction />
                <OutLostP />
            </div>
            <br />
            <InsigImage />
        </>
    );
}
export default Dashboard