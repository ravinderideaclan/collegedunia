import React, { useState } from "react";
import "./homepage.css";
import 'remixicon/fonts/remixicon.css';
import Herosection from './herosection'
import SetYourGoal from './setyourgoal';
import ExploreProgram from "./exploreprogram";
import TopColleges from "./topColleges";
import TopUni from "./topUni";
import topPlaces from "./topPlaces";




export const Homepage = () => { 

    return (        <>          
        
            <Herosection />   
            <SetYourGoal />
            <ExploreProgram />
            <TopColleges />
            <TopUni />
            <topPlaces/>
        </>
    );
};

export default Homepage;