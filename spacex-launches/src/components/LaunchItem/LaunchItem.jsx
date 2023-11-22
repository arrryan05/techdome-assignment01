import React from 'react';
import './LaunchItem.scss';
import logo from '../../assets/logo.svg';


const LaunchItem = ({ launch }) => {
    return (
        <div className='itemCard'>
            <div className='imageBox'>
                <img src={logo} alt="Logo" />
            </div>
            <h2>{launch.mission_name}#{launch.flight_number}</h2>
            <p><b>Mission Ids:</b>{launch.mission_id}</p>
            <p><b>Launch Year:</b>{launch.launch_year}</p>
            <p><b>Launch Success:</b> {launch.launch_success ? 'Yes' : 'No'}</p>
            <p><b>Land Success:</b> {launch.rocket.first_stage.cores[0].land_success ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default LaunchItem;