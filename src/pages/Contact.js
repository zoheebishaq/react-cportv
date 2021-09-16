import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const discordClick=()=>{
    toast.success("Discord copié 👍 !", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }
  const emailClick=()=>{
    toast.success("E-mail copié 👍 !", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }
  const telClick=()=>{
    toast.success("Telephone copié  👍!", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }
  return (
    <div className="contact">
      <ToastContainer/>
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Ile de France</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0652341646">
                <span
                  className="clickInput"
                  onClick={telClick}
                >
                  06.52.34.16.46
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="zoheeb.ishaque@gmail.com">
                <span
                  className="clickInput"
                  onClick={emailClick}
                >
                  zoheeb.ishaque@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://fr.linkedin.com/in/zoheeb-ishaque-935960216" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/zoheebishaq" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://codepen.io/zoheebishaq" target="_blank" rel="noopener noreferrer">
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
            <CopyToClipboard text="Zoheeb#9101">
              <a className="clickInput" onClick={discordClick} href={Animation} target="_blank" rel="noopener noreferrer">
                
                <h4>Discord</h4>
                <i className="fab fa-discord"></i>
              </a>
            </CopyToClipboard>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
