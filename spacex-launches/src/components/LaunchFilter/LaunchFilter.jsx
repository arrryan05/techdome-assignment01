// LaunchFilter.jsx
import React, { useEffect, useState } from "react";
import FilterButton from '../FilterButtons/FilterButton';
import './LaunchFilter.scss';
import { useNavigate, useLocation } from "react-router-dom";


const LaunchFilter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeButton, setActiveButton] = useState(null);
    const [launchSuccess, setLaunchSuccess] = useState('');
    const [landSuccess, setLandSuccess] = useState('');
    const [launchYear, setLaunchYear] = useState('');
    const [filter, setFilter] = useState({
        launch_year: "",
        launch_success: "",
        land_success: ""
    })

    useEffect(() => {
        setFilter({
            launch_year: launchYear,
            launch_success: launchSuccess,
            land_success: landSuccess
        })

    }, [launchSuccess, launchYear, landSuccess])

    const searchParams = new URLSearchParams(location.search);
    useEffect(() => {
        var URL = location.pathname;
        let query = "";
        for (let key in filter) {
            if (filter[key] != "") {
                if (query == "") {
                    query += `?${key}=${filter[key]}`
                }
                else {
                    query += `&${key}=${filter[key]}`
                }

            }

        }
        navigate(URL + query);
    }, [filter])

    const clearFilter = () => {
        setLaunchYear("");
        setLaunchSuccess("");
        setLandSuccess("");
    }

    const handleLaunchSuccessChange = (event) => {
        setLaunchSuccess(event);
    };

    const handleLandSuccessChange = (event) => {
        setLandSuccess(event);
    };

    const handleLaunchYearChange = (label) => {
        setActiveButton(label);
        console.log(activeButton);
    };


    const years = [];
    for (let year = 2006; year <= 2020; year++) {
        years.push(year);
    }

    return (
        <div className="filterComponent">
            <div className="heading">
                <p><b>Filters</b></p>
                <button className='btn' onClick={clearFilter}>Clear filters</button>
            </div>

            <div className="mainFilters">
                <div className="yearFilters">
                    <p>Launch year</p>
                    <hr />
                    {years.map((item, index) => (
                        <FilterButton key={index} setLaunchYear={setLaunchYear} label={item} isActive={activeButton === item} />
                    ))}
                </div>
                <div className="LaunchFilters">
                    <p>Launch Success</p>
                    <hr />
                    <div className="buttons">
                        <button className="btn" onClick={() => handleLaunchSuccessChange("true")} >True</button>
                        <button className="btn" onClick={() => handleLaunchSuccessChange("false")} >False</button>
                    </div>
                </div>
                <div className="LandingFilters">
                    <p>Landing Success</p>
                    <hr />
                    <div className="buttons">
                        <button className="btn" onClick={() => handleLandSuccessChange("true")} label="True" >True</button>
                        <button className="btn" onClick={() => handleLandSuccessChange("false")} label="False" >False</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LaunchFilter;