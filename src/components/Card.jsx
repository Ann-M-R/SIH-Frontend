// Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, selectedRole, handleToggle }) => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="card">
      <div className="toggle-container">
        <button
          className={`toggle-button ${selectedRole === 'farmer' ? 'active' : ''}`}
          onClick={() => handleToggle('farmer')}
        >
          Farmer
        </button>
        <button
          className={`toggle-button ${selectedRole === 'fpo' ? 'active' : ''}`}
          onClick={() => handleToggle('fpo')}
        >
          FPO
        </button>
      
      </div>
      <div className="card-rest">
      <h2 className='card-name'>{selectedRole === 'farmer' ? 'Farmer' : 'FPO'} Login</h2>
      <div className="input-group">
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" />
      </div>
      <div className="button-group">
        <button className='button-one'>Login</button>
        <div className='signup-container'>
          <span className="not-registered">Not registered?</span>
          <span className="signup-link" onClick={handleSignupClick}>
            Sign Up
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
