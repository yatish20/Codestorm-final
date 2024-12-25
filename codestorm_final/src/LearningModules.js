import React, { useState } from 'react';
import './Modules.css'; // Importing the CSS

const Modules = () => {
    const [selectedModule1, setSelectedModule1] = useState('MODULE 1');
    const [selectedModule2, setSelectedModule2] = useState('MODULE 2');
    const [selectedModule3, setSelectedModule3] = useState('MODULE 3');
    const [selectedModule4, setSelectedModule4] = useState('MODULE 4');
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');
    const [videoTitle, setVideoTitle] = useState('MODULE 1');
    const [content, setContent] = useState(''); // State to hold the topic content
    const [isVideoVisible, setIsVideoVisible] = useState(true); // Track whether video or content is displayed

    // Sample content for each topic
    const modules1 = {
        'MODULE 1': '',
        'Role and Functions of the RBI': {
            mp4: '/videos/Role and Functions of the RBI.mp4', // MP4 format
            content: `
                <p>The Reserve Bank of India is the backbone of the Financial System of the country. It has been entrusted by the people and the Government to control, supervise, and promote the flow of money in the market. It also takes part in planning and development to maintain economic stability and lead the country towards growth.</p>
                <p>Reserve Bank of India was established in 1935 and since then it has regulated the flow of the Indian rupee in the country. The Reserve Bank is also responsible for managing other commercial banks through its various policies and directions.</p>
                <p>Every bank is entitled to keep an amount of money with the RBI which serves as the limit to the amount of money that bank can lend to the public. There are various other policies and rules through which RBI keeps a check on the economy of the country.</p>

                <h4>Objectives of RBI</h4>
                <p>Being the backbone of the financial state of the country, RBI has various objectives as mentioned in the RBI preamble. Some of them are listed below:</p>

                <h5>Primary Objectives</h5>
                <ul>
                    <li>Addressing the issue of Banknotes</li>
                    <li>Maintaining monetary stability in the country</li>
                    <li>Operating the credit system and currency in the country to its own advantage</li>
                    <li>Remaining independent of political influence to maintain financial stability and promote economic growth</li>
                </ul>

                <h5>Fundamental Objectives</h5>
                <ul>
                    <li>Act as the Bank of all the other commercial banks</li>
                    <li>Be the only authority with note issuing power</li>
                    <li>Serve as the bank to the Government of India</li>
                </ul>

                <h5>Promote Economic Growth</h5>
                <p>Along with maintaining price stability, RBI should also design policies that promote economic growth within the established framework.</p>
            `,
        },
        'What is Inflation': {
            mp4: '/videos/What is Inflation_.mp4',
            content: `
                <p>Inflation is a broad increase in the prices of goods and services over time, which reduces the value of a currency.</p>
                <p>It's usually measured using the Consumer Price Index (CPI), which tracks the percentage change in the price of a basket of goods and services.</p>

                <p>Inflation can be caused by:</p>
                <ul>
                    <li><strong>Demand shocks:</strong> Changes in the demand for goods and services, such as those caused by changes in fiscal or monetary policy.</li>
                    <li><strong>Supply shocks:</strong> Changes in the supply of goods and services, such as those caused by energy crises.</li>
                    <li><strong>Inflation expectations:</strong> Self-fulfilling expectations that inflation will occur.</li>
                </ul>

                <p>Inflation can have both positive and negative effects on an economy:</p>

                <h5>Low Inflation:</h5>
                <ul>
                    <li>Can help the labor market adjust more quickly during a downturn, which can reduce the risk of recession.</li>
                    <li>Helps monetary policy stabilize the economy.</li>
                </ul>

                <h5>High Inflation:</h5>
                <ul>
                    <li>Can be a warning sign of a struggling economy.</li>
                    <li>Can cause people to see higher bills for groceries, utilities, and mortgages.</li>
                </ul>
            `,
        },
        'What is Power Of Compounding': {
            mp4: '/videos/What is Power Of Compounding.mp4',
            content: `
                <p>The power of compounding refers to the process where earnings on an investment are reinvested to generate additional earnings over time. This principle is essential in wealth accumulation as it allows exponential growth of investments.</p>
            `,
        },
        Quiz: '',
    };

    // You can define modules2, modules3, modules4 similarly with their respective content and videos.

    const modules2 = {
        'MODULE 2': '',
        'Systematic Investment Plan (SIP)': {
            mp4: '/videos/What is Systematic Investment Plan (SIP).mp4',
            content: `
                <p>A Systematic Investment Plan (SIP) is a disciplined way of investing small amounts of money regularly in mutual funds. It helps in averaging out market fluctuations and provides the benefits of compounding.</p>
            `,
        },
        'The National Pension System (NPS)': {
            mp4: '/videos/What is the National Pension System (NPS)_.mp4',
            content: `
                <p>The National Pension System (NPS) is a government-sponsored retirement savings scheme designed to provide financial security after retirement. It offers tax benefits and allows individuals to contribute systematically towards their future.</p>
            `,
        },
        'Goods and Services Tax (GST)': {
            mp4: '/videos/What is Goods and Services Tax (GST)_.mp4',
            content: `
                <p>The Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. It is a unified tax that replaces various other indirect taxes like VAT, service tax, and excise duty.</p>
            `,
        },
        Quiz: '',
    };

    const modules3 = {
        'MODULE 3': '',
        'Basics of Investment': {
            mp4: '/videos/Basics of Investment.mp4',
            content: `
                <p>Investment is the act of allocating money in the hope of generating an income or profit over time. Understanding the different types of investment options, such as stocks, bonds, and mutual funds, is essential for making informed financial decisions.</p>
            `,
        },
        'What are the different types of Insurance': {
            mp4: '/videos/What are the different types of Insurance_.mp4',
            content: `
                <p>Insurance is a financial product that provides protection against financial loss or risk. There are various types of insurance, including:</p>
                <ul>
                    <li><strong>Health Insurance:</strong> Covers medical expenses for illnesses or injuries.</li>
                    <li><strong>Life Insurance:</strong> Provides financial support to beneficiaries upon the policyholder's death.</li>
                    <li><strong>Auto Insurance:</strong> Covers damages related to vehicle accidents.</li>
                    <li><strong>Property Insurance:</strong> Protects against damages to property due to events like fire, theft, or natural disasters.</li>
                </ul>
            `,
        },
        'The importance of saving money': {
            mp4: '/videos/The importance of saving money.mp4',
            content: `
                <p>Saving money is critical for achieving financial security. Benefits include:</p>
                <ul>
                    <li>Building an emergency fund for unexpected expenses.</li>
                    <li>Accumulating wealth for future goals like buying a house or education.</li>
                    <li>Providing a cushion during financial uncertainties.</li>
                </ul>
            `,
        },
        Quiz: '',
    };

    const modules4 = {
        'MODULE 4': '',
        'Budgeting and its Advantages': {
            mp4: '/videos/Basics of Investment.mp4',
            content: `
                <p>Budgeting involves creating a financial plan to manage income, expenses, and savings. Advantages include:</p>
                <ul>
                    <li>Controlling overspending.</li>
                    <li>Setting and achieving financial goals.</li>
                    <li>Ensuring money is allocated effectively to various needs.</li>
                </ul>
            `,
        },
        'Retirement Planning': {
            mp4: '/videos/What are the different types of Insurance_.mp4',
            content: `
                <p>Retirement planning is the process of preparing financially for life after work. It involves:</p>
                <ul>
                    <li>Saving and investing to ensure a comfortable retirement.</li>
                    <li>Factoring in inflation, expenses, and expected longevity.</li>
                    <li>Choosing appropriate retirement accounts and investment strategies.</li>
                </ul>
            `,
        },
        'The importance of saving money': {
            mp4: '/videos/The importance of saving money.mp4',
            content: `
                <p>Saving money is essential for financial stability. It allows individuals to:</p>
                <ul>
                    <li>Accumulate wealth for future goals.</li>
                    <li>Manage unexpected expenses without falling into debt.</li>
                    <li>Gain peace of mind and financial independence.</li>
                </ul>
            `,
        },
        Quiz: '',
    };

    // Function to handle topic selection and update video and content
    const handleSelect = (module, setSelectedModule, moduleData) => {
        setSelectedModule(module);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        if (moduleData[module]) {
            setCurrentVideo(moduleData[module].mp4 || '');
            setVideoTitle(module);
            setContent(moduleData[module].content || ''); // Update content for the selected module
            setIsVideoVisible(true); // Show video by default
        }
    };

    // Function to switch to content view
    const showContent = () => {
        setIsVideoVisible(false);
    };

    return (
        <div className="dashboard-container">
            <div className="left-grid">
                <h2>Modules</h2>

                {/* Dropdown for Module 1 */}
                <div className={`dropdown ${isOpen1 ? 'open' : ''}`}>
                    <div
                        className="dropdown-toggle"
                        onClick={() => setIsOpen1(!isOpen1)}
                    >
                        {selectedModule1}
                    </div>
                    {isOpen1 && (
                        <div className="dropdown-menu">
                            {Object.keys(modules1).map((module, index) => (
                                <div
                                    key={index}
                                    className={`dropdown-item ${selectedModule1 === module ? 'selected' : ''}`}
                                    onClick={() => handleSelect(module, setSelectedModule1, modules1)}
                                >
                                    {module}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dropdown for Module 2 */}
                <div className={`dropdown ${isOpen2 ? 'open' : ''}`}>
                    <div
                        className="dropdown-toggle"
                        onClick={() => setIsOpen2(!isOpen2)}
                    >
                        {selectedModule2}
                    </div>
                    {isOpen2 && (
                        <div className="dropdown-menu">
                            {Object.keys(modules2).map((module, index) => (
                                <div
                                    key={index}
                                    className={`dropdown-item ${selectedModule2 === module ? 'selected' : ''}`}
                                    onClick={() => handleSelect(module, setSelectedModule2, modules2)}
                                >
                                    {module}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dropdown for Module 3 */}
                <div className={`dropdown ${isOpen3 ? 'open' : ''}`}>
                    <div
                        className="dropdown-toggle"
                        onClick={() => setIsOpen3(!isOpen3)}
                    >
                        {selectedModule3}
                    </div>
                    {isOpen3 && (
                        <div className="dropdown-menu">
                            {Object.keys(modules3).map((module, index) => (
                                <div
                                    key={index}
                                    className={`dropdown-item ${selectedModule3 === module ? 'selected' : ''}`}
                                    onClick={() => handleSelect(module, setSelectedModule3, modules3)}
                                >
                                    {module}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dropdown for Module 4 */}
                <div className={`dropdown ${isOpen4 ? 'open' : ''}`}>
                    <div
                        className="dropdown-toggle"
                        onClick={() => setIsOpen4(!isOpen4)}
                    >
                        {selectedModule4}
                    </div>
                    {isOpen4 && (
                        <div className="dropdown-menu">
                            {Object.keys(modules4).map((module, index) => (
                                <div
                                    key={index}
                                    className={`dropdown-item ${selectedModule4 === module ? 'selected' : ''}`}
                                    onClick={() => handleSelect(module, setSelectedModule4, modules4)}
                                >
                                    {module}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right grid to show video or content */}
            <div className="right-grid">
                <div className="videotitle">{videoTitle}</div>

                {isVideoVisible ? (
                    <div className="video-container">
                        {currentVideo ? (
                            <video key={currentVideo} controls>
                                <source src={currentVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <p>Please select a topic to view the video.</p>
                        )}
                        <div className="buttons">
                            <button onClick={showContent}>View Content</button>
                        </div>
                    </div>
                ) : (
                    <div className="content-container">
                        <div
                            className="content-html"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                        <div className="buttons">
                            <button onClick={() => setIsVideoVisible(true)}>View Video</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modules;
