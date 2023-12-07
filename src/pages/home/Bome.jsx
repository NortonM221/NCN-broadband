import React from 'react';
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Explanation from '../../components/explanation/Explanation';
import Component from '../../components/funnel/Component'

export default function Bome() {

    return(
        <div className="bome">
            <span className="nanTitle">Nanjemoy/Cobb Neck Service Agreements</span>
            <FeaturedInfo />
            <Explanation />
        </div>
    )

}