import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';


export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(obj => obj.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {
                props.dataPoints.map(obj => 
                    
                <ChartBar
                    key={obj.label}
                    value={obj.value}
                    maxValue={totalMaximum}
                    label={obj.label}
                />
            )}
        </div>
    )
}
