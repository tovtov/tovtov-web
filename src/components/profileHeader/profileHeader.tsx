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
  return (
    <div className="container is-fullhd" data-testid="profileHeaderComp">
      <Gravatar userImg={userImg} />
      <nav className="navbar topNav navbar-item">
        <strong className="item userName firstNavItem">{fullName}</strong>
      </nav>

      <div className="navbar firstNavItem">
        <div className="navbar-item ">
          <div className="counter">
            <div className="num">{kudosReceivedCounter}</div> Gifted
          </div>
        </div>
        <div className="navbar-item">
          <div className="counter">
            <div className="num">{kudosGivenCounter}</div> Given
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
