import React from 'react';

const Header = ({ handleToggleDarkMode, darkMode }) => {
    
  return (
    <div className="header">
      <div className="header-title">
        <h1>Notes</h1>
      </div>
      <div className="toggle-container" >
        <label className="toggle-switch">
          <input className="toggle-input" type="checkbox" onClick={()=> handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)} />
          <span className="toggle-label"></span>
          <span className="toggle-handle">
            <span className="toggle-icon"></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Header;
