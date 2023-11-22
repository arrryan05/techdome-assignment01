import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LaunchItem from '../components/LaunchItem/LaunchItem';
import axios from 'axios';
import LaunchFilter from '../components/LaunchFilter/LaunchFilter';
import './Home.scss'

const Home = () => {
  const [launches, setLaunches] = useState([]);
  const [launchSuccess, setLaunchSuccess] = useState('');
  const [landSuccess, setLandSuccess] = useState('');
  const [launchYear, setLaunchYear] = useState('');

  const [url,setUrl] = useState('')


  const location = useLocation();
  const getData = async () => {
    const baseURL = location.search.substring(1).split('&&');
    const launch_year = baseURL[0]?.split('=')[1] ?? "";
    const launch_success = baseURL[1]?.split('=')[1] ?? "";
    const land_success = baseURL[2]?.split('=')[1] ?? "";

    try {
      const uri = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${launch_year}&launch_success=${launchSuccess}&land_success=${landSuccess}`;
      console.log(uri)
      setUrl(uri)
      const {data} = await axios.get(uri)
      setLaunches(data)
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [location,launchSuccess,landSuccess]);

  return (
    <div className='main'>
      <div className='head'>
        <p>SpaceX Launch Program</p>
      </div>
      <div className='content'>
        <div className='filterMenu'>
          <LaunchFilter
            setLaunchSuccess={setLaunchSuccess}
            setLandSuccess={setLandSuccess}
            setLaunchYear={setLaunchYear}
          />
        </div>
        <div className='displayCard launch-grid'>
          {launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />)}
        </div>

      </div>

    </div>
  );
};

export default Home;