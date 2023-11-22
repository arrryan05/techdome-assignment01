// FilterButton.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const FilterButton = ({ label, onClick ,isActive}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const applyYearfilter = () => {
    onClick(label);
    var URL = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    const launch_success = searchParams.get("launch_success");
    const land_success = searchParams.get("land_success");

      
    if (launch_success) {
      URL += `&&launch_success=`
    }
    navigate(URL + `?year=${label}`)

  }
  return (
    <button
      onClick={applyYearfilter}
      style={{
        backgroundColor: isActive ? 'darkgreen' : 'lightgreen',
        color: 'white',
        border: 'none',
        padding: '2px 9px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 'normal',
        margin: '4px 20px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}
    >
      {label}
    </button>
  )

}

export default FilterButton;