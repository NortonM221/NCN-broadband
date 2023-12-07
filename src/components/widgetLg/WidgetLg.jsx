import React from 'react';
import "./widgetLg.css";
import { ResponsiveContainer } from "recharts";
import { CircularProgressbar , CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function WidgetLg () {
    const percentage = 13;
    return(
        <container className="progressContainer">
            <div className="widgetLg">
            <ResponsiveContainer>
            <CircularProgressbarWithChildren value={13} styles={buildStyles({
                textColor: "#020024",
                pathColor: "#00E396",
                trailColor: "#e8e8e8",
            })}>
<div style={{ fontSize:12, marginTop: -5, textSizeAdjust: "auto"}}>
            <strong>13% Easements Completed</strong>

</div>
</CircularProgressbarWithChildren>
        </ResponsiveContainer>
            </div>
        </container>
     
    )

}