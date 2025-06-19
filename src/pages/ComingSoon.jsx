import React from 'react';

function ComingSoon() {
  return (
    <>
      <style>
        {`
        :root {
          --blue: #000760;
          --dark-blue: #0A0F50;
          --light-blue: #ECECEC;
          --light-blue-ii: #F7F8FA;
          --grey-color: #575757;
        }
        .under-dev-bg {
          min-height: 100vh;
          background: #141416;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
            width: 100%;
            top: 0;
            z-index: 23;
        }
        .under-dev-card {
          background: #1e1e1e;
          padding: 2.5rem 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 7, 96, 0.10);
          text-align: center;
          max-width: 370px;
          width: 100%;
          animation: fadeIn 1s;
        }
        .under-dev-icon {
          margin-bottom: 1.2rem;
          animation: bounce 1.5s infinite;
        }
        .under-dev-card h1 {
          color: #FFF;
          margin-bottom: 0.5rem;
          font-size: 2rem;
          font-weight: bold;
        }
        .under-dev-card p {
          color: var(--grey-color);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .under-dev-highlight {
          color: #159b48;
          font-weight: 600;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
        }
        `}
      </style>
      <div className="under-dev-bg">
        <div className="under-dev-card">
          <div className="under-dev-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#159b48" strokeWidth="2" fill="#159b48"/>
              <path d="M12 8v4" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1" fill="#FFF"/>
            </svg>
          </div>
          <h1>Coming Soon!</h1>
          <p>
            This page is currently <span className="under-dev-highlight">under development</span>.<br/>
            Please check back soon.
          </p>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;