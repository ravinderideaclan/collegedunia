import React, { useState } from "react";
import "./homepage.css";
import 'remixicon/fonts/remixicon.css';
import SetYourGoal from './setyourgoal';
import ExploreProgram from "./exploreprogram";
import TopColleges from "./topColleges";
import TopUni from "./topUni";




export const Homepage = () => { 

    return (
        <>
            <SetYourGoal />
            <ExploreProgram />
            <TopColleges />
            <TopUni />
        </>
    );
};

export default Homepage;