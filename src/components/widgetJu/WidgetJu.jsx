import React from 'react';
import "./widgetJu.css";
import { ResponsiveContainer } from "recharts";
import { CircularProgressbar , CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function WidgetJu () {
    const percentage = 17;
    return(
        <container className="progressContainer">
            <div className="widgetJu">
            <CircularProgressbarWithChildren value={17} styles={buildStyles({
                textColor: "#020024",
                pathColor: "#00E396",
                trailColor: "#e8e8e8",
            })}>
<div style={{ fontSize:12, marginTop: -5, textSizeAdjust: "auto"}}>
            <strong>17% Easements Completed</strong>
            

</div>
</CircularProgressbarWithChildren>
            </div>
        </container>
     
    )

}