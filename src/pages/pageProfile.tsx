import React, { FunctionComponent } from "react";
import ProfileHeader from "../components/profileHeader";
import Kudo from "../components/kudo";
import { User, UserData } from "../database/userData";
import "./pageProfile.scss";

export interface pageProfileProps {
  user?: User[]; //the users chosen plants interface
}
const PageProfile: FunctionComponent<pageProfileProps> = (
  kudos,
  userImg: User
) => {
  console.log(kudos, userImg);
  return (
    <div>
      <ProfileHeader />
      <section className=" section ">
        <div className="notification is-light">
          <p className="title is-4 is-align-items-flex-end kudosTitle">Kudos</p>
          <Kudo />
        </div>

        {/* {UserData.map((userPlant: UserPlant, index: number) => (
          <CollectionBox
            key={index}
            userPlant={userPlant}
            userPlantindex={index as number}
          />
        ))} */}
      </section>
    </div>
  );
};

export default PageProfile;
