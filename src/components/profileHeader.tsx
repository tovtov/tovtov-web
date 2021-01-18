import React from "react";
import Gravatar from "./gravatar";
import "../styles/profileHeader.scss";

const ProfileHeader = () => {
  return (
    <div className="container is-fullhd">
      <Gravatar />
      <nav className="navbar is-dark userName">
        <div className="">
          <div className="navbar-item">User Name</div>
        </div>
      </nav>
      <nav className="navbar is-white-ter"></nav>
    </div>
  );
};
export default ProfileHeader;
