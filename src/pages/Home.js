import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Zoheeb Ishaque</h1>
                    <h2>Concepteur développeur d'applications</h2>
                    <div className="pdf">
                        <a href="./media/CV-Developpeur-Web-zoheeb-ishaque.pdf"  target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;