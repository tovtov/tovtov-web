import React, { FunctionComponent } from "react";
import ProfileHeader from "../components/profileHeader";
import Kudo from "../components/kudo";
import { User, UserData, SingleKudo } from "../database/userData";
import "./pageProfile.scss";

export interface pageProfileProps {
  user?: User; //the users chosen plants interface
}
const PageProfile: FunctionComponent<pageProfileProps> = () => {
  return (
    <div>
      <ProfileHeader userImg={UserData[0].userImg} />
      <section className="section">
        {UserData.map((user: User, index: number) => (
          <div key={index} className="notification">
            <p className="title is-4 is-align-items-flex-end kudosTitle">
              Kudos
            </p>
            {user.kudos.map((singleKudo: SingleKudo, i: number) => (
              <div key={i} className="notification">
                <Kudo kudo={singleKudo} />
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PageProfile;
