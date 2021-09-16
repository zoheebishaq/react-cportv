import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };
  handleInfos = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };


  render() {
    let { name, languagesIcons, source, info,login, mdp , picture,online } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfos} />
        <span className="infos" onClick={this.handleInfos}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {
            this.state.showInfo && (
                <div className="showInfos">
                    <div className="infosContent">
                        <div className="head">
                            <h2>{name}</h2>
                            <div className="sourceCode">
                                <a href={source} rel="noopener noreferrer" className="button" target="blank">Code source </a>
                            </div>
                            <div className="onlineCode">
                                <a href={online} rel="noopener noreferrer" className="button" target="blank">Site en ligne </a>
                            </div>
                        </div>
                        <p className="text">{info}</p>
                        <p className="text">Non Utilisateur : {login}</p>
                        <p className="text">Mot de passe : {mdp}</p>
                        <div className="button return" onClick={this.handleInfos}> 
                            Retouner sur le page
                        </div>
                    </div>
                </div>
            )
        }
      </div>
    );
  }
}
