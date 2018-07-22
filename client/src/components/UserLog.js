import React from "react";
import { Link } from "react-router-dom";
import MessageTimelineUser from "./MessageTimelineUser";

const UserLog = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>Che si dice?</h1>
        <h4>Conosci InstaChat?</h4>
        <Link to="/signup" className="btn btn-primary">
          Registrati
        </Link>
      </div>
    );
  }
  return (
    <div>
      <MessageTimelineUser
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
        userId={currentUser.user.id}
      />
    </div>
  );
};

export default UserLog;