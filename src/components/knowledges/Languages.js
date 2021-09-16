import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 1, value: "Java SE/EE", xp: 1.8 },
      { id: 1, value: "HTML/CSS", xp: 2 },
    ],

    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 1, value: "Bootstrap", xp: 1.8 },
      { id: 1, value: "SpringBoot", xp: 1 },
      { id: 1, value: "Wordpress", xp: 1.7 },
    ],
    springboot: [
      { id: 1, value: "JPA/Hibernate", xp: 0.9 },
      { id: 1, value: "Junit 5", xp: 0.8 },
      { id: 1, value: "Thymeleaf", xp: 0.9 },
    ],
  };
  render() {
    let { languages, frameworks,springboot } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothéques"
          className="frameworksDisplay"
        />

        <ProgressBar
          languages={springboot}
          title="Choix & Choix"
          className="frameworksDisplay"
        />

        {/* si on souhaite rajouter une autre progressBar et "languages={ pour choisir les donné dans state que je veut exploiter }"" */}
        {/* <ProgressBar languages={frameworks}
          title="Choix & Choix"
          className="frameworksDisplay"
        /> */}
      </div>
    );
  }
}

export default Languages;
