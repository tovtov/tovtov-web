import React, { FunctionComponent } from "react";
import ProfileHeader from "../components/profileHeader";
import Kudo from "../components/kudo";
import { User, UserData, SingleKudo } from "../database/userData";
import "./pageProfile.scss";

export interface pageProfileProps {
  user?: User; //the users chosen plants interface
}
const PageProfile: FunctionComponent<pageProfileProps> = (kudos, user) => {
  return (
    <div>
      <ProfileHeader />
      <section className=" section ">
        {UserData.map((user: User, index: number) =>
          user.kudos.map((x: SingleKudo, i: number) => (
            <div className="notification is-light">
              <p className="title is-4 is-align-items-flex-end kudosTitle">
                Kudos
              </p>
              <Kudo />
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default PageProfile;
