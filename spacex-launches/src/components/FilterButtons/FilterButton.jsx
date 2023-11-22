// FilterButton.jsx
import React, { useState } from 'react';


const FilterButton = ({ label, setLaunchYear, isActive }) => {

  return (
    <button
      onClick={() => setLaunchYear(label)}
      style={{
        backgroundColor: isActive ? 'darkgreen' : 'rgb(89, 201, 89)',
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