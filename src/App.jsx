import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2563eb', fontSize: '3rem', textAlign: 'center' }}>
        HomeListingAI
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#666' }}>
        AI-Powered Real Estate Platform
      </p>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '12px 24px',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;