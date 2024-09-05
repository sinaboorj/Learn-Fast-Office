import InsigImage from "../public/insigImage";
import '../sass/dashboard.scss'
import DashboardTags from "./dashboardTags";
import OperationalEfficincyChart from "./operationalEfficincyChart";
import ProductChart from "./productChart";
import ProductEfficincyChart from "./productEfficincyChart";
import SoldChart from "./soldChart";

const Dashboard = () => {

    return (
        <>
            <DashboardTags />
            <div className="chart">
                <ProductChart />
                <SoldChart />
            </div>

            <div className="chart">
                
                
            </div>
            <br />
            <InsigImage />
        </>
    );
}
export default Dashboard