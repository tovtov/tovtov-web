import React from "react";
import Gravatar from "./gravatar";
import "../styles/profileHeader.scss";

const ProfileHeader = () => {
  return (
    <div className="container is-fullhd">
      <Gravatar />
      <nav className="navbar is-dark topNav">
        <div className="navbar-item userName">User Name</div>
      </nav>
      <nav className="navbar is-white-ter">
        <div className="kudosNav">Kudos</div>
      </nav>
    </div>
  );
};
export default ProfileHeader;
