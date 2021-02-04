import React, { FunctionComponent, useState } from "react";
import ProfileHeader from "../../components/profileHeader/profileHeader";
import Kudo from "../../components/kudo/kudo";
import { SingleKudoReceived } from "../../models/singleKudoInterface";
import { UserData } from "../../models/userInterface";
import { LoginUser, UserInfo } from "../../database/userData";
import "./profilePage.scss";

const ProfilePage: FunctionComponent = () => {
  const [userData] = useState<Array<UserData>>(UserInfo);
  const [user] = useState(LoginUser);
  const { userImg, fullName } = user[1];
  const { kudosGiven, kudosReceived } = userData[3];
  let howManyKudosGiven;
  let howManyKudosReceived;

  kudosReceived === undefined
    ? (howManyKudosReceived = 0)
    : (howManyKudosReceived = kudosReceived.length);
  kudosGiven === undefined
    ? (howManyKudosGiven = 0)
    : (howManyKudosGiven = kudosGiven.length);

  return (
    <div>
      <ProfileHeader
        kudosReceivedCounter={howManyKudosReceived}
        userImg={userImg}
        fullName={fullName}
        kudosGivenCounter={howManyKudosGiven}
      />
      <section className="section">
        <div className="container">
          <p className="title is-4 is-align-items-flex-end kudosTitle">Kudos</p>
          {kudosReceived === undefined ? (
            <div>looks like there is nothing here yet! </div>
          ) : (
            kudosReceived.map((singleKudo: SingleKudoReceived, i: number) => (
              <div key={i} className="">
                <Kudo {...singleKudo} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
