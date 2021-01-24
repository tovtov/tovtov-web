import React, { FunctionComponent } from "react";
import Gravatar from "./gravatar";
import "./profileHeader.scss";

let img = "https://bulma.io/images/placeholders/128x128.png";

export interface profileHeaderProps {
  userImg: string; //the users chosen plants interface
  kudosCounter: number;
}
const ProfileHeader: FunctionComponent<profileHeaderProps> = (
  profileHeaderProps
) => {
  return (
    <div className="container is-fullhd" data-testid="profileHeaderComp">
      <Gravatar userImg={profileHeaderProps.userImg} />

      <nav className="navbar is-dark topNav">
        <div className="navbar-item userName">User Name</div>
      </nav>
      <nav className="navbar is-white-ter">
        <div className="kudosNav">
          <span>Total Kudos: </span>
          <span>{profileHeaderProps.kudosCounter}</span>
        </div>
      </nav>
    </div>
  );
};
export default ProfileHeader;
