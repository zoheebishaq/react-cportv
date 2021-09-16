import React from "react";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        {/* 1er list */}
        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;Anglais courant
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;GitHub
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;Visual Studio Code
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;NPM
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;Postman
          </li>
        </ul>
        {/* 2eme list */}
        <ul>
        <li>
            <i className="fas fa-check-square"></i>
            &nbsp;UML
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;BalsamiqMockup
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;IntelliJ IDEA 
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;Pack Microsoft Office
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            &nbsp;Ciel Comptabiliter/Gestion commercial
          </li>

        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
