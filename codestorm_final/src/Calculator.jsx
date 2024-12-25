import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [activeCalculator, setActiveCalculator] = useState(null);
    const [hoveredCalculator, setHoveredCalculator] = useState(null);

    const [sipValues, setSipValues] = useState({
        monthlyInvestment: 1000,
        rateOfReturn: 12,
        timePeriod: 10,
        totalAmount: 0,
    });

    const [swpValues, setSwpValues] = useState({
        initialInvestment: 100000,
        withdrawalAmount: 1000,
        rateOfReturn: 8,
        timePeriod: 5,
        totalAmount: 0,
    });

    const [ppfValues, setPpfValues] = useState({
        yearlyInvestment: 50000,
        rateOfReturn: 7,
        timePeriod: 15,
        totalAmount: 0,
    });

    const [fdValues, setFdValues] = useState({
        principal: 100000,
        rateOfReturn: 6,
        timePeriod: 5,
        totalAmount: 0,
    });

    const [epfValues, setEpfValues] = useState({
        monthlyContribution: 1000,
        rateOfReturn: 8,
        timePeriod: 10,
        totalAmount: 0,
    });

    const [retirementValues, setRetirementValues] = useState({
        currentAge: 30,
        retirementAge: 60,
        currentExpenses: 30000,
        inflationRate: 6,
        savings: 1000000,
        totalAmount: 0,
    });

    // SIP Calculation
    const calculateSIP = () => {
        const months = sipValues.timePeriod * 12;
        const rate = sipValues.rateOfReturn / 100 / 12;
        const amount = sipValues.monthlyInvestment * (((1 + rate) ** months - 1) / rate) * (1 + rate);
        setSipValues({ ...sipValues, totalAmount: amount.toFixed(2) });
    };

    // SWP Calculation
    const calculateSWP = () => {
        const months = swpValues.timePeriod * 12;
        const rate = swpValues.rateOfReturn / 100 / 12;
        const remainingAmount = swpValues.initialInvestment - swpValues.withdrawalAmount * months;
        setSwpValues({ ...swpValues, totalAmount: remainingAmount.toFixed(2) });
    };

    // PPF Calculation
    const calculatePPF = () => {
        const rate = ppfValues.rateOfReturn / 100;
        const amount = ppfValues.yearlyInvestment * ((Math.pow(1 + rate, ppfValues.timePeriod) - 1) / rate);
        setPpfValues({ ...ppfValues, totalAmount: amount.toFixed(2) });
    };

    // FD Calculation
    const calculateFD = () => {
        const amount = fdValues.principal * (1 + fdValues.rateOfReturn / 100) ** fdValues.timePeriod;
        setFdValues({ ...fdValues, totalAmount: amount.toFixed(2) });
    };

    // EPF Calculation
    const calculateEPF = () => {
        const months = epfValues.timePeriod * 12;
        const rate = epfValues.rateOfReturn / 100 / 12;
        const amount = epfValues.monthlyContribution * (((1 + rate) ** months - 1) / rate) * (1 + rate);
        setEpfValues({ ...epfValues, totalAmount: amount.toFixed(2) });
    };

    // Retirement Calculation
    const calculateRetirement = () => {
        const years = retirementValues.retirementAge - retirementValues.currentAge;
        const inflatedExpenses = retirementValues.currentExpenses * Math.pow((1 + retirementValues.inflationRate / 100), years);
        const requiredAmount = inflatedExpenses * 12 * years;
        const amount = requiredAmount - retirementValues.savings;
        setRetirementValues({ ...retirementValues, totalAmount: amount.toFixed(2) });
    };

    const calculatorInfo = {
        SIP: "Systematic Investment Plan (SIP) allows you to invest a fixed sum regularly in mutual funds.",
        SWP: "Systematic Withdrawal Plan (SWP) lets you withdraw fixed amounts periodically from your investment.",
        PPF: "Public Provident Fund (PPF) is a long-term savings scheme with tax benefits.",
        FD: "Fixed Deposit (FD) is a safe investment option with a guaranteed return.",
        EPF: "Employees' Provident Fund (EPF) is a government-backed retirement savings scheme.",
        Retirement: "Retirement calculator helps you plan your post-retirement financial needs.",
    };

    return (
        <div className="calculator-container">
            {/* Left panel with category buttons */}
            <div className="categories">
                {Object.keys(calculatorInfo).map((key) => (
                    <button
                        key={key}
                        className="category-btn"
                        onMouseEnter={() => setHoveredCalculator(key)}
                        onMouseLeave={() => setHoveredCalculator(null)}
                        onClick={() => setActiveCalculator(key)}
                    >
                        {key}
                    </button>
                ))}
            </div>

            {/* Right panel to show hover info or the calculator */}
            <div className={`info-panel ${hoveredCalculator || activeCalculator ? 'show' : ''}`}>
                {hoveredCalculator && (
                    <div className="hover-info">
                        <p>{calculatorInfo[hoveredCalculator]}</p>
                    </div>
                )}

                {activeCalculator && (
                    <div className="active-calculator">
                        {/* SIP Calculator */}
                        {activeCalculator === 'SIP' && (
                            <div className="sip-calculator">
                                <h2>SIP Calculator</h2>
                                <div className="input-group">
                                    <label>Monthly Investment (₹)</label>
                                    <input type="number" value={sipValues.monthlyInvestment} onChange={(e) => setSipValues({ ...sipValues, monthlyInvestment: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Expected Return Rate (p.a %)</label>
                                    <input type="number" value={sipValues.rateOfReturn} onChange={(e) => setSipValues({ ...sipValues, rateOfReturn: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Time Period (Years)</label>
                                    <input type="number" value={sipValues.timePeriod} onChange={(e) => setSipValues({ ...sipValues, timePeriod: e.target.value })} />
                                </div>
                                <button className="calculate-btn" onClick={calculateSIP}>Calculate</button>
                                {sipValues.totalAmount > 0 && <div className="result">Total Value: ₹{sipValues.totalAmount}</div>}
                            </div>
                        )}

                        {/* SWP Calculator */}
                        {activeCalculator === 'SWP' && (
                            <div className="swp-calculator">
                                <h2>SWP Calculator</h2>
                                <div className="input-group">
                                    <label>Initial Investment (₹)</label>
                                    <input type="number" value={swpValues.initialInvestment} onChange={(e) => setSwpValues({ ...swpValues, initialInvestment: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Monthly Withdrawal (₹)</label>
                                    <input type="number" value={swpValues.withdrawalAmount} onChange={(e) => setSwpValues({ ...swpValues, withdrawalAmount: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Expected Return Rate (p.a %)</label>
                                    <input type="number" value={swpValues.rateOfReturn} onChange={(e) => setSwpValues({ ...swpValues, rateOfReturn: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Time Period (Years)</label>
                                    <input type="number" value={swpValues.timePeriod} onChange={(e) => setSwpValues({ ...swpValues, timePeriod: e.target.value })} />
                                </div>
                                <button className="calculate-btn" onClick={calculateSWP}>Calculate</button>
                                {swpValues.totalAmount > 0 && <div className="result">Remaining Value: ₹{swpValues.totalAmount}</div>}
                            </div>
                        )}

                        {/* PPF Calculator */}
                        {activeCalculator === 'PPF' && (
                            <div className="ppf-calculator">
                                <h2>PPF Calculator</h2>
                                <div className="input-group">
                                    <label>Yearly Investment (₹)</label>
                                    <input type="number" value={ppfValues.yearlyInvestment} onChange={(e) => setPpfValues({ ...ppfValues, yearlyInvestment: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Expected Return Rate (p.a %)</label>
                                    <input type="number" value={ppfValues.rateOfReturn} onChange={(e) => setPpfValues({ ...ppfValues, rateOfReturn: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Time Period (Years)</label>
                                    <input type="number" value={ppfValues.timePeriod} onChange={(e) => setPpfValues({ ...ppfValues, timePeriod: e.target.value })} />
                                </div>
                                <button className="calculate-btn" onClick={calculatePPF}>Calculate</button>
                                {ppfValues.totalAmount > 0 && <div className="result">Total Value: ₹{ppfValues.totalAmount}</div>}
                            </div>
                        )}

                        {/* FD Calculator */}
                        {activeCalculator === 'FD' && (
                            <div className="fd-calculator">
                                <h2>FD Calculator</h2>
                                <div className="input-group">
                                    <label>Principal (₹)</label>
                                    <input type="number" value={fdValues.principal} onChange={(e) => setFdValues({ ...fdValues, principal: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Expected Return Rate (p.a %)</label>
                                    <input type="number" value={fdValues.rateOfReturn} onChange={(e) => setFdValues({ ...fdValues, rateOfReturn: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Time Period (Years)</label>
                                    <input type="number" value={fdValues.timePeriod} onChange={(e) => setFdValues({ ...fdValues, timePeriod: e.target.value })} />
                                </div>
                                <button className="calculate-btn" onClick={calculateFD}>Calculate</button>
                                {fdValues.totalAmount > 0 && <div className="result">Total Value: ₹{fdValues.totalAmount}</div>}
                            </div>
                        )}

                        {/* EPF Calculator */}
                        {activeCalculator === 'EPF' && (
                            <div className="epf-calculator">
                                <h2>EPF Calculator</h2>
                                <div className="input-group">
                                    <label>Monthly Contribution (₹)</label>
                                    <input type="number" value={epfValues.monthlyContribution} onChange={(e) => setEpfValues({ ...epfValues, monthlyContribution: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Expected Return Rate (p.a %)</label>
                                    <input type="number" value={epfValues.rateOfReturn} onChange={(e) => setEpfValues({ ...epfValues, rateOfReturn: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Time Period (Years)</label>
                                    <input type="number" value={epfValues.timePeriod} onChange={(e) => setEpfValues({ ...epfValues, timePeriod: e.target.value })} />
                                </div>
                                <button className="calculate-btn" onClick={calculateEPF}>Calculate</button>
                                {epfValues.totalAmount > 0 && <div className="result">Total Value: ₹{epfValues.totalAmount}</div>}
                            </div>
                        )}

                        {/* Retirement Calculator */}
                        {activeCalculator === 'Retirement' && (
                            <div className="retirement-calculator">
                                <h2>Retirement Calculator</h2>
                                <div className="input-group">
                                    <label>Current Age</label>
                                    <input type="number" value={retirementValues.currentAge} onChange={(e) => setRetirementValues({ ...retirementValues, currentAge: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Retirement Age</label>
                                    <input type="number" value={retirementValues.retirementAge} onChange={(e) => setRetirementValues({ ...retirementValues, retirementAge: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Current Monthly Expenses (₹)</label>
                                    <input type="number" value={retirementValues.currentExpenses} onChange={(e) => setRetirementValues({ ...retirementValues, currentExpenses: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Inflation Rate (% p.a)</label>
                                    <input type="number" value={retirementValues.inflationRate} onChange={(e) => setRetirementValues({ ...retirementValues, inflationRate: e.target.value })} />
                                </div>
                                <div className="input-group">
                                    <label>Current Savings (₹)</label>
                                    <input type="number" value={retirementValues.savings} onChange={(e) => setRetirementValues({ ...retirementValues, savings: e.target.value })} />
                                </div>
                                <button className="calculate-btn" onClick={calculateRetirement}>Calculate</button>
                                {retirementValues.totalAmount > 0 && <div className="result">You need to save: ₹{retirementValues.totalAmount}</div>}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
