import React, { FunctionComponent } from "react";
import Gravatar from "../gravatar/gravatar";
import "./profileHeader.scss";

export interface profileHeaderProps {
  userImg: string;
  kudosCounter: number;
}

const ProfileHeader: FunctionComponent<profileHeaderProps> = (
  profileHeaderProps
) => {
  console.log(profileHeaderProps.userImg);
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
