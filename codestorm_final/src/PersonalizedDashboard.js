import React from 'react';

function PersonalizedDashboard() {
  const progress = [
    { module: 'Budgeting Basics', completed: 75 },
    { module: 'Saving Strategies', completed: 50 },
    { module: 'Investment 101', completed: 25 },
    { module: 'Retirement Planning', completed: 10 },
  ];

  return (
    <section id="dashboard" className="personalized-dashboard">
      <h2>Your Financial Journey</h2>
      <div className="progress-tracker">
        {progress.map((item, index) => (
          <div key={index} className="progress-item">
            <h3>{item.module}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${item.completed}%` }}></div>
            </div>
            <span>{item.completed}% Completed</span>
          </div>
        ))}
      </div>
      <div className="recommendations">
        <h3>Personalized Recommendations</h3>
        <ul>
          <li>Complete the "Investment 101" module to learn about diversifying your portfolio.</li>
          <li>Review your budget and identify areas where you can increase your savings.</li>
          <li>Start planning for retirement by exploring different retirement account options.</li>
        </ul>
      </div>
    </section>
  );
}

export default PersonalizedDashboard;