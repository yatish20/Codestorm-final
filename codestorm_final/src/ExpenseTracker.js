import React from 'react';

function ExpenseTracker() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="http://localhost:3001/dashboard"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Expense Tracker"
      />
    </div>
  );
}

export default ExpenseTracker;
