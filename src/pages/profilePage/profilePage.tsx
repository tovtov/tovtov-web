import React, { FunctionComponent, useState } from "react";
import ProfileHeader from "../../components/profileHeader/profileHeader";
import Kudo from "../../components/kudo/kudo";
import Pagination from "../../components/pagination/pagination";
import { KudoReceived } from "../../models/kudosReceivedInterface";
import { LoginUser, UserInfo, CountersData } from "../../database/userData";
import "./profilePage.scss";

const ProfilePage: FunctionComponent = () => {
  const [kudoReceived] = useState<Array<KudoReceived>>(UserInfo);
  const [user] = useState(LoginUser);
  const [counters] = useState(CountersData);
  const { image, name } = user[1];
  const { received, given } = counters[0];
  const [page, setPage] = useState(1);
  const [totalPages] = useState(UserInfo.length / 1);
  const [currentPagesKudos, setCurrentPageKudos] = useState(kudoReceived); //figure out how to pass 3 kudos per page

  return (
    <div>
      <ProfileHeader
        kudosReceivedCounter={received}
        userImg={image}
        fullName={name}
        kudosGivenCounter={given}
      />
      <section className="section">
        <div className="container">
          <p className="title is-4 is-align-items-flex-end kudosTitle">Kudos</p>
          {received === 0 ? (
            <div> Looks like there is nothing here yet! </div>
          ) : (
            kudoReceived.map((singleKudo: KudoReceived, i: number) => (
              <div key={i} className="">
                <Kudo {...singleKudo} />
              </div>
            ))
          )}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          setCurrentPage={setPage}
        />
      </section>
    </div>
  );
};

export default ProfilePage;
