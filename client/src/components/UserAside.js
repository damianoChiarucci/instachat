import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/auth";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({ profileImageUrl, username, userId }) => (
  <aside className="col-sm-2">
    <div className="panel panel-default">
      <div className="panel-body text-center">
        <img
          src={profileImageUrl || DefaultProfileImg}
          alt={username}
          width="200"
          height="200"
          className="img-thumbnail"
        />
        <h5 class="card-title">{username}</h5>
        <Link
          to={`/users/profile`}
        >
          Vai al tuo Profilo
        </Link>
      </div>
    </div>
  </aside>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default UserAside;
