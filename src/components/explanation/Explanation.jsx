import React from 'react';
import "./explanation.css"

export default function Explanation() {
    return(
        <div className="explanationText">
              <ul className="bulletPoint">
            <li>           <strong> ● Total Homes/Businesses to be Passed – </strong> Number of homes/businesses that will be able to sign up for service when the phase is completed</li>
            <li>          <strong>  ● Customer Service Agreements Received –</strong>  Number of homes/businesses that have signed up to receive service when it becomes available</li>
            <li>            <strong>● Customers Connected –</strong> Number of customers currently receiving High Speed Internet! </li>
</ul>
        </div>
    )
}