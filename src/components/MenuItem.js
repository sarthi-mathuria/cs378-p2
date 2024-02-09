import React from 'react';

const MenuItem = ({ title, description, imageName, price }) => {
  return (
    <div className="menu-item">
      <img src={process.env.PUBLIC_URL + `/images/${imageName}`} alt={title} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-title">{title}</h3>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-buy">
          <span className="menu-item-price">${price.toFixed(2)}</span>
          <button className="menu-item-button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;