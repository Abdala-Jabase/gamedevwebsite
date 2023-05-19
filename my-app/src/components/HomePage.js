import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="container">
            <section className="hero">
                <h1>Welcome to AJ App Development Group</h1>
                <p className="tagline">We build extraordinary digital experiences</p>
                <a href="https://play.google.com/store/apps/developer?id=AJ+Jabase" target="_blank" rel="noopener noreferrer">
                    <button className="cta-button">Check Out Our Latest Apps</button>
                </a>
            </section>
            <section className="projects">

                <div className="project">
                    <div className="project-info">
                        <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1200x630/640x427/filters:focal(600x315:601x316):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/21812330/Unity_1200X630.png" alt="Unity Engine" />
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <img src="https://gamedevacademy.org/wp-content/uploads/2020/08/stockcoding.jpg.webp" alt="Game Code" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
