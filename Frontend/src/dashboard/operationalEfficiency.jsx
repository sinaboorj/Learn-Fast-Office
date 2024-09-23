import React, { useState, useEffect, useContext } from "react";  
import { DashboardContext } from "../context/dashboardContext";

const OperationalEfficiency = () => {
    const [speed, setSpeed] = useState(0);
    const { filterDate } = useContext(DashboardContext)

    useEffect(() => {
        const interval = setInterval(() => {
            switch (filterDate) {
                case "Day":
                    setSpeed(80);
                    break;
                case "Month":
                    setSpeed(48);
                    break;
                case "Year":
                    setSpeed(95);
                    break;
                case "Custom":
                    setSpeed(35);
                    break;
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [filterDate]);

    const angle = (speed / 100) * 180;

    return (
        <div className="efficiency">
            <span className="efficiency-text">راندمان عملیاتی</span><br />
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
                    x1="150"
                    y1="140"
                    x2={150 + 125 * Math.cos((angle - 180) * (Math.PI / 180))}
                    y2={140 + 125 * Math.sin((angle - 180) * (Math.PI / 180))}
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
            <div>% {speed} </div>
        </div>
        
    )
}

export default OperationalEfficiency; 


