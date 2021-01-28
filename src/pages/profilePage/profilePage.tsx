import React, { FunctionComponent, useState } from "react";
import ProfileHeader from "../../components/profileHeader/profileHeader";
import Kudo from "../../components/kudo/kudo";
import { SingleKudoReceived } from "../../models/singleKudoInterface";
import { User } from "../../models/userInterface";
import { UserData } from "../../database/userData";
import "./profilePage.scss";

const ProfilePage: FunctionComponent = () => {
  const [userData] = useState<Array<User>>(UserData);
  const userInfo = userData[0];

  return (
    <div>
      <ProfileHeader
        kudosCounter={userInfo.kudosReceived.length}
        userImg={userInfo.userImg}
        kudosGivenCounter={userInfo.kudosGiven.length}
      />
      <section className="section">
        {userData.map((user: User, index: number) => (
          <div key={index} className="container">
            <p className="title is-4 is-align-items-flex-end kudosTitle">
              Kudos
            </p>
            {user.kudosReceived.map(
              (singleKudo: SingleKudoReceived, i: number) => (
                <div key={i} className="">
                  <Kudo {...singleKudo} />
                </div>
              )
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProfilePage;
