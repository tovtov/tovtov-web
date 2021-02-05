import React, { FunctionComponent } from "react";
import Gravatar from "../gravatar/gravatar";
import "./profileHeader.scss";

export interface ProfileHeaderProps {
  userImg: string;
  fullName: string;
  kudosReceivedCounter: number;
  kudosGivenCounter: number;
}

const ProfileHeader: FunctionComponent<ProfileHeaderProps> = (
  profileHeaderProps
) => {
  const {
    fullName,
    userImg,
    kudosReceivedCounter,
    kudosGivenCounter,
  } = profileHeaderProps;
  console.log("ProfileHeaderProps", profileHeaderProps);
  return (
    <div className="container is-fullhd" data-testid="profileHeaderComp">
      <Gravatar userImg={userImg} />
      <nav className="navbar is-dark topNav">
        <div className="navbar-item userName">{fullName}</div>
      </nav>
      <nav className="navbar tile is-white-ter">
        <div className="kudosNav tile is-vertical is-4">
          <span className="tile has-text-weight-semibold">
            {kudosReceivedCounter}
          </span>
          <span className="tile has-text-weight-light">Kudos Recieved </span>
        </div>
        <div className="kudosNav tile is-vertical is-3">
          <span className="tile has-text-weight-semibold">
            {kudosGivenCounter}
          </span>
          <span className="tile has-text-weight-light">Kudos Given </span>
        </div>
      </nav>
    </div>
  );
};
export default ProfileHeader;
