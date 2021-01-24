import React, { FunctionComponent } from "react";
import ProfileHeader from "../components/profileHeader";
import Kudo from "../components/kudo";
import { SingleKudo } from "../models/singleKudoInterface";
import { User } from "../models/userInterface";
import { UserData } from "../database/userData";
import "./profilePage.scss";

export interface ProfilePageProps {
  user?: User;
}
const ProfilePage: FunctionComponent<ProfilePageProps> = (ProfilePageProps) => {
  return (
    <div>
      <ProfileHeader
        kudosCounter={ProfilePageProps.user?.kudos.length as number}
        userImg={ProfilePageProps.user?.userImg as string}
      />
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

export default ProfilePage;
