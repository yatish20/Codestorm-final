import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const pauseVideo = () => {
        const video = document.getElementById("indexvideo");
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const text = document.querySelector('.overlay-text');
            const scrollY = window.scrollY;

            if (scrollY > 200) {
                text.style.transform = 'translateX(0)';
                text.style.opacity = '1';
            } else {
                text.style.transform = 'translateX(-100%)';
                text.style.opacity = '0';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <main>
                <div className="indexvideo">
                    <video src={require('./assets/bgvideonew.mp4')} autoPlay muted loop id="indexvideo"></video>
                    <button id="pause" onClick={pauseVideo}>Pause</button>
                    <div className="videocontent">
                        <h1>Relentless Focus. Exceptional Results.</h1>
                        <p>
                            Every day, we convene the sharpest minds in finance to deliver the excellence of our minds.
                            Our sole focus is serving clients by harnessing our educational resources, insights,
                            relationships, and competitive advantages to help solve the most complex challenges and
                            drive superior results.
                        </p>
                    </div>
                </div>

                <br />
                <span className="text-1">
                    WHAT WE DO
                    <h1>Delivering for our clients</h1>
                </span>

                <div className="gallery-container">
                    <div className="gallery">
                        <img src={require('./assets/guyimage.webp')} alt="blackguy" width="600" height="400" />
                        <div className="desc">Global Banking and Markets</div>
                    </div>
                    <div className="gallery">
                        <img src={require('./assets/randomimg.avif')} alt="random" width="600" height="400" />
                        <div className="desc">Investment and Savings</div>
                    </div>
                    <div className="gallery">
                        <img src={require('./assets/girlimg.avif')} alt="girl" width="600" height="400" />
                        <div className="desc">Budgeting</div>
                    </div>
                </div>
                <div className='midtext'>
                    <h2>Learn Personal Finance Like never before!!</h2>
                </div>

                <section className="widget-container">
                    <div className="left-panel">
                        <div className="overlay-text">
                            <h1>" Control Your Financial Future" </h1>
                            <p>Unlock the power of informed decisions. <br />
                                our platform equips you with the tools to master your finances. <br />
                                gain the confidence to secure your financial well-being. <br />
                                and expert advice designed to help you achieve your goals. <br />
                                Start today and build a future where your financial freedom is within reach. <br />
                                Remember, smart choices today lead to a secure tomorrow! <br />
                            </p>
                        </div>
                    </div>

                    <div className="right-panel">
                        <div className="card">
                            <video src={require('../src/assets/card1video.mp4')} autoPlay muted loop ></video>
                            <div className="desc">learn and grow</div>
                        </div>
                        <div className="cardblack">
                            <video src={require('../src/assets/card2video.mp4')} autoPlay muted loop ></video>
                            <div className="desc">Theft And Security</div>
                        </div>
                        <div className="cardgrey">
                            <video src={require('../src/assets/card3video.mp4')} autoPlay muted loop ></video>
                            <div className="desc">Budget Analysis</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Hero;
