// LaunchFilter.jsx
import React, { useState } from "react";
import FilterButton from '../FilterButtons/FilterButton';
import './LaunchFilter.scss';


const LaunchFilter = ({ setLaunchSuccess, setLandSuccess, setLaunchYear }) => {

    const [activeButton, setActiveButton] = useState(null);

    const handleLaunchSuccessChange = (event) => {
        setLaunchSuccess(event);
    };

    const handleLandSuccessChange = (event) => {
        setLandSuccess(event);
    };

    const handleLaunchYearChange = (label) => {
        setActiveButton(label);
        setLaunchYear(label);
        console.log(activeButton);
    };

    

    const years = [];
    for (let year = 2006; year <= 2020; year++) {
        years.push(year);
    }

    return (
        <div className="filterComponent">
            <p><b>Filters</b></p>
            <div className="mainFilters">
                <div className="yearFilters">
                    <p>Launch year</p>
                    <hr />
                    {years.map((item, index) => (
                        <FilterButton key={index} onClick={()=>handleLaunchYearChange} label={item} isActive={activeButton === item} />
                    ))}
                </div>
                <div className="LaunchFilters">
                    <p>Launch Success</p>
                    <hr />
                    <div className="buttons">
                        <button onClick={() => handleLaunchSuccessChange(true)} >True</button>
                        <button onClick={() => handleLaunchSuccessChange(false)} >False</button>
                    </div>
                </div>
                <div className="LandingFilters">
                    <p>Landing Success</p>
                    <hr />
                    <div className="buttons">
                        <button onClick={() => handleLandSuccessChange(true)} label="True" >True</button>
                        <button onClick={() => handleLandSuccessChange(false)} label="False" >False</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LaunchFilter;