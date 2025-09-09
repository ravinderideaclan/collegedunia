import React, { useState } from "react";
import "./homepage.css";
import 'remixicon/fonts/remixicon.css';
import Herosection from './herosection'
import SetYourGoal from './setyourgoal';
import ExploreProgram from "./exploreprogram";
import TopColleges from "./topColleges";
import TopUni from "./topUni";




export const Homepage = () => { 

    return (        <>          
        
            <Herosection />   
            <SetYourGoal />
            <ExploreProgram />
            <TopColleges />
            <TopUni />
        </>
    );
};

export default Homepage;