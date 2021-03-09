import React, { FunctionComponent, useState } from "react";
import ProfileHeader from "../../components/profileHeader/profileHeader";
import Kudo from "../../components/kudo/kudo";
import Pagination from "../../components/pagination/pagination";
import { KudoReceived } from "../../models/kudosReceivedInterface";
import { LoginUser, UserInfo, CountersData } from "../../database/userData";
import "./profilePage.scss";

const ProfilePage: FunctionComponent = () => {
  const itemsPerPage = 3; //how many kudos displayed per page
  const [kudoReceived] = useState<Array<KudoReceived>>(UserInfo);
  const [user] = useState(LoginUser);
  const [counters] = useState(CountersData);
  const { image, name } = user[1];
  const { received, given } = counters[0];
  const [page, setPage] = useState(1);
  const [totalPages] = useState(Math.round(UserInfo.length / itemsPerPage));

  // Get current kudos for this page
  const indexOfLastPost = page * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const kudosDisplayed = kudoReceived.slice(indexOfFirstPost, indexOfLastPost);

  const kudosToDisplay = (received: number) => {
    if (received === 0) {
      return false;
    } else {
      return true;
    }
  };
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
        </div>
        {kudosToDisplay(received) === true ? (
          kudosDisplayed.map((singleKudo: KudoReceived, i: number) => (
            <div key={i} className="">
              <Kudo {...singleKudo} />
            </div>
          ))
        ) : (
          <div> Looks like there is nothing here yet! </div>
        )}
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
