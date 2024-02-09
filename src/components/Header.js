import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
      <img src={process.env.PUBLIC_URL + `/images/logo.jpeg`} alt="Chef Tanakas Logo" className="logo" />
        <div className="text-container">
          <h1 className="cafe-name">Chef Tanakas</h1>
          <p className="tagline">Authentic, Fresh, Delicious Food</p>
          <h2 className="motto">Tanaka Style Experience</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;