import React from 'react';
import './userprofile.css';

function UserProfilePage() {
  return (
    <div className="App">
      <div className="profile">
        <div className="userbox">
          <div className="usericon">
            <img src="https://via.placeholder.com/150" alt="user avatar" />
          </div>
          <div className="userinfo">
            <h2>User's Name</h2>
            <p>Bio goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;