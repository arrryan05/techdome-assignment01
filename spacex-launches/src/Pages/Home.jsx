import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LaunchItem from '../components/LaunchItem/LaunchItem';
import axios from 'axios';
import LaunchFilter from '../components/LaunchFilter/LaunchFilter';
import './Home.scss'

const Home = () => {
  const [launches, setLaunches] = useState([]);
  const [url, setUrl] = useState('')


  const location = useLocation();
  const getData = async () => {
    const searchParams = new URLSearchParams(location.search);
    const launch_year = searchParams.get("launch_year")?? "";
    console.log(launch_year);
    const launch_success = searchParams.get("launch_success")??"";
    const land_success = searchParams.get("land_success")??"";
    try {
      const uri = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${launch_year}&launch_success=${launch_success}&land_success=${land_success}`;
      console.log(uri)
      setUrl(uri)
      const { data } = await axios.get(uri)
      setLaunches(data)
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [location]);

  return (
    <div className='main'>
      <div className='head'>
        <p>SpaceX Launch Program</p>
      </div>
      <div className='content'>
        <div className='filterMenu'>
          <LaunchFilter />
        </div>
        <div className='displayCard launch-grid'>
          {launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />)}
        </div>

      </div>

    </div>
  );
};

export default Home;