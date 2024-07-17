// src/App.js
import React from 'react';
import './reviews.css'; // Import your CSS file


const App = () => {
    return (
        <div className="custom-style">
            <h1>Our Reviews</h1>
            <h2>These are some of the reviews we got from our clients’ side on how Freshly Farms helped them grow both economically and knowledgewise in farming</h2>
            <div className="paragraph-container">
                <div className="paragraph">
                    <div className="name">Stacey Gathoni</div>
                    <img src="/static/media/image1.jpg" alt="Client 1" />
                    <p>
                        "Freshly Farms has revolutionized my urban farming approach. Their support transformed my small garden into a thriving oasis."
                    </p>
                </div>
                <div className="paragraph">
                    <div className="name">Sheila Mueni</div>
                    <img src='/static/media/image2.jpg' alt="Client 2" />
                    <p>
                        "Thanks to Freshly Farms, my knowledge of horticulture has expanded tremendously. My plants are healthier, and my yields have increased."
                    </p>
                </div>
                <div className="paragraph">
                    <div className="name">Charles Kisika</div>
                    <img src='/static/media/image3.jpg' alt="Client 3" />
                    <p>
                        "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests."
                    </p>
                </div>
                <div className="paragraph">
                    <div className="name">Brian Ouma</div>
                    <img src='/static/media/image4.jpg' alt="Client 4" />
                    <p>
                        "Freshly Farm's high-quality resources and support have significantly improved my urban farming skills, leading to healthier crops and increased yields."
                    </p>
                </div>
            </div>
            <div className="read-more-container">
                <button className="read-more">Read More</button>
            </div>
            <div className="svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="145" height="32" viewBox="0 0 145 32" fill="none">
                    <ellipse cx="12.9464" cy="12" rx="12.9464" ry="12" fill="#D9D9D9"/>
                    <ellipse cx="68.1849" cy="12" rx="12.9464" ry="12" fill="#D9D9D9"/>
                    <ellipse cx="127.738" cy="16" rx="17.2619" ry="16" fill="#008000"/>
                </svg>
            </div>
        </div>
    );
};

export default App;
