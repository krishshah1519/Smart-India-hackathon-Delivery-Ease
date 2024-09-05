import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to AI-Based Delivery System</h1>
      <Link to="/sender">Go to Sender Dashboard</Link>
      <br />
      <Link to="/receiver">Go to Receiver Dashboard</Link>
    </div>
  );
};

export default HomePage;
