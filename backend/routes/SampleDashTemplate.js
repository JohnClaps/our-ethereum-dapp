import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userData.name}</h1>
      <div>
        <p>Email: {userData.email}</p>
        <p>License Number: {userData.license_number}</p>
        {/* Display other user details here */}
      </div>
      {/* More dashboard content based on user data */}
    </div>
  );
};

export default Dashboard;
