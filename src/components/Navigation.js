import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Navigation = () => {
  const discordClick1 = () => {
    toast.success("Discord copié 👍 !", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="sidebar">
      <ToastContainer />
      <div className="id">
        <div className="idContent">
          <img src="./media/zoheeb1.png" alt="profil-pic" />
          <h3>Zoheeb Ishaque</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://fr.linkedin.com/in/zoheeb-ishaque-935960216"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zoheebishaq"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/zoheebishaq"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
          <CopyToClipboard text="Zoheeb#9101">
            <li>
              <a
                className="clickInput"
                onClick={discordClick1}
                href={Animation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord"></i>
              </a>
            </li>
          </CopyToClipboard>
        </ul>
        <div className="signature">
          <p className="signatureName"> Zoheeb Ishaque - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
