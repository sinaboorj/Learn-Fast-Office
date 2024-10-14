import '../sass/dashboard.scss'
import DashboardTags from "./dashboardTags";
import OperationalEfficiency from "./operationalEfficiency";
import ProductChart from "./productChart";
import SoldChart from "./soldChart";
import '../sass/navigation.scss'
import '../sass/tables.scss'
import OutLostP from "./outLostP";
import EfficiencyChart from "./efficiencyChart";
import OutStopPipeChart from "./outStopPipeChart";
import Home from '../pages/home';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Strings from '../helper/strings';
import plan from "/sysImage/plan.png"
import Qc from  "/sysImage/QC.png"
import TableProduction from './tableProduction';


const Dashboard = () => {
    const [tabNavigation, setTabNavigation] = useState('production');

    return (
        <>
            <DashboardTags />
            <nav class="Navigation">
                <ul className='tabs-Navigation'>
                    <li className={tabNavigation === 'production' ? 'production' : ''} onClick={()=>{setTabNavigation('production')}}>
                        <Link to="">{Strings.Production} </Link>
                    </li>

                    <li className={tabNavigation === 'plan' ? 'plan' : ''} onClick={()=>{setTabNavigation('plan')}}>
                        <Link to="">{Strings.Planning}</Link>
                    </li>

                    <li className={tabNavigation === 'sale' ? 'sale' : ''} onClick={()=>{setTabNavigation('sale')}}>
                        <Link to="">{Strings.Sale}</Link>
                    </li>

                    <li className={tabNavigation === 'material' ? 'material' : ''} onClick={()=>{setTabNavigation('material')}}>
                        <Link to="">{Strings.Material}</Link>
                    </li>

                    <li className={tabNavigation === 'efficiencyy' ? 'efficiencyy' : ''} onClick={()=>{setTabNavigation('efficiencyy')}}>
                        <Link to="">{Strings.Efficiency}</Link>
                    </li>

                    <li className={tabNavigation === 'stops' ? 'stops' : ''} onClick={()=>{setTabNavigation('stops')}}>
                        <Link to="">{Strings.Stops}</Link>
                    </li>

                    <li className={tabNavigation === 'quality' ? 'quality' : ''} onClick={()=>{setTabNavigation('quality')}}>
                        <Link to="">{Strings.Quality}</Link>
                    </li>
                </ul>
            </nav>
            <br />

            {tabNavigation === 'production' && <div className="chart"> <ProductChart /> <br /> <TableProduction /> </div>}
            {tabNavigation === 'plan' && <div className="chart">  <img src={plan} alt="planning " className='main-image' style={{width:'70%'}}  /></div>}
            {tabNavigation === 'sale' && <div className="chart"> <SoldChart /> </div>}
            {tabNavigation === 'material' && <div className="chart">  <span style={{backgroundColor:'#acacac', width:'95%'}}>Nothing</span> </div>}
            {tabNavigation === 'efficiencyy' && <div className="chart">  <EfficiencyChart />  <br /> <OperationalEfficiency /> </div> }
            {tabNavigation === 'stops' && <div className="chart">  <OutStopPipeChart />  <br />  <OutLostP /> </div> }
            {tabNavigation === 'quality' && <div className="chart"> <img src={Qc} alt="Quality" className='main-image' style={{width:'70%'}} /> </div> }
            <br />    
            <Home />
        </>  
    );
}
export default Dashboard

