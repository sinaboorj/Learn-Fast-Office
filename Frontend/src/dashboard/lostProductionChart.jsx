import React, { useContext } from 'react';  

import { DashboardContext } from '../context/dashboardContext';

const LostProductionChart = () => {

    const {
        date1, date2, date3, date4, date5, date6, date7, date8, date9, date10,
        date11, date12, lastDate1, lastDate2, lastDate3, lastDate4, lastDate5,
        lastDate6, lastDate7, lastDate8, lastDate9, lastDate10, lastDate11,
        lastDate12, startDate, endDate, lastStartDate, lastEndDate, searchType 
    } = useContext(DashboardContext)
    

    
    return (
        <>

        </>
    );
}
 
export default LostProductionChart;