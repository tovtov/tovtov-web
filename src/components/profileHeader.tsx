import React from "react";
import Gravatar from "./gravatar";
import "./profileHeader.scss";

let img = "https://bulma.io/images/placeholders/128x128.png";

const ProfileHeader = () => {
  return (
    <div className="container is-fullhd">
      <Gravatar userImg={img} />
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
