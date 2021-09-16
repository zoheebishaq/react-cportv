import React from "react";

const Hobbies = () => {
  return (
      <div className="hobbies">
        <h3>Intérêts</h3>
        <ul>
          <li className="hobby">
            <i className="fas fa-running"></i>
            <span>Sport</span>
          </li>
          <li className="hobby">
            <i className="fab fa-bitcoin"></i>
            <span>Crypto-monnaies</span>
          </li>
          <li className="hobby">
            <i className="fas fa-seedling"></i>
            <span>Bénévolat</span>
          </li>
          <li className="hobby">
          <i class="fas fa-book-reader"></i>
            <span>Histoire</span>
          </li>
          <li className="hobby">
          <i class="fas fa-car-alt"></i>
            <span>Automobile</span>
          </li>
          <li className="hobby">
          <i class="fas fa-microchip"></i>
            <span>Technologie</span>
          </li>
        </ul>
      </div>
  );
};

export default Hobbies;
