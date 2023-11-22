// LaunchFilter.jsx
import React, { useState } from "react";
import FilterButton from '../FilterButtons/FilterButton';
import './LaunchFilter.scss';


const LaunchFilter = ({ setLaunchSuccess, setLandSuccess, setLaunchYear }) => {


    const handleLaunchSuccessChange = (event) => {
        setLaunchSuccess(event.target.value);
    };

    const handleLandSuccessChange = (event) => {
        setLandSuccess(event.target.value);
    };

    const handleLaunchYearChange = (event) => {
        setLaunchYear(event.target.value);
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
                        <FilterButton key={index} onClick={() => handleLaunchYearChange(item)} label={item} />
                    ))}
                </div>
                <div className="LaunchFilters">
                    <p>Launch Success</p>
                    <div className="buttons">
                        <FilterButton onClick={() => handleLaunchSuccessChange(true)} label="True" />
                        <FilterButton onClick={() => handleLaunchSuccessChange(false)} label="False" />
                    </div>
                </div>
                <div className="LandingFilters">
                    <p>Landing Success</p>
                    <div className="buttons">
                        <FilterButton onClick={() => handleLandSuccessChange(true)} label="True" />
                        <FilterButton onClick={() => handleLandSuccessChange(false)} label="False" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LaunchFilter;