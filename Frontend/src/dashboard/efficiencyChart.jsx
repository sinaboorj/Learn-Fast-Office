import React, { useState, useEffect, useContext } from "react";  
import { DashboardContext } from "../context/dashboardContext";
import '../sass/charts.scss'
import { PublicContext } from "../context/publicContext";
import Strings from "../helper/strings";

const EfficiencyChart = () => {
    const [speed, setSpeed] = useState(0);
    const { filterDate } = useContext(DashboardContext)
    const { lang } = useContext(PublicContext)

    useEffect(() => {
        const interval = setInterval(() => {
            switch (filterDate) {
                case "Day":
                    setSpeed(68);
                    break;
                case "Month":
                    setSpeed(78);
                    break;
                case "Year":
                    setSpeed(48);
                    break;
                case "Custom":
                    setSpeed(92);
                    break;
            }
            
        }, 1000);
        return () => clearInterval(interval);
    }, [filterDate]);

    const angle = (speed / 100) * 180; // تبدیل سرعت به زاویه  
    const angleIndex = (80 / 100) * 180;
    
    return (
        <div className="efficiency">
            <span className="chart-title">راندمان تولید</span><br />
            <svg width="300" height="170" viewBox="0 0 300 150">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#4caf50", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#f44336", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path
                    d="M 10 140 A 140 140 0 0 1 290 140"
                    fill="none"
                    stroke="red"
                    strokeWidth="20"
                    strokeDasharray="146.67 293.34" // 440 - 146.67  
                    strokeDashoffset="0" />
                <path
                    d="M 10 140 A 140 140 0 0 1 290 140"
                    fill="none"
                    stroke="#ffc107"
                    strokeWidth="20"
                    strokeDasharray="146.67 293.34" // 440 - 146.67  
                    strokeDashoffset="293.34" />
                <path
                    d="M 10 140 A 140 140 0 0 1 290 140"
                    fill="none"
                    stroke="green"
                    strokeWidth="20"
                    strokeDasharray="146.67 293.34" // 440 - 146.67  
                    strokeDashoffset="146.67" />
                <line
                    x1={150 + 120 * Math.cos((angleIndex - 180) * (Math.PI / 180))}
                    y1={140 + 120 * Math.sin((angleIndex - 180) * (Math.PI / 180))}
                    x2={150 + 155 * Math.cos((angleIndex - 180) * (Math.PI / 180))}
                    y2={140 + 155 * Math.sin((angleIndex - 180) * (Math.PI / 180))}
                    stroke="Green"
                    strokeWidth="1"
                />
                <line className="efficiency-line"
                    x1="150"
                    y1="140"
                    x2={150 + 125 * Math.cos((angle - 180) * (Math.PI / 180))}
                    y2={140 + 125 * Math.sin((angle - 180) * (Math.PI / 180))}
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
            <div>% {speed}</div>
            <div className="index">
                {lang
                    ? <span>{Strings.Index} 80 %</span>
                    : <span> {Strings.Index} %80</span>
                }
            </div>
        </div>
    )
}

export default EfficiencyChart; 


