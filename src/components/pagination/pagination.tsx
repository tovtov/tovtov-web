import { FunctionComponent } from "react";
import classNames from "classnames";
import "./pagination.scss";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  //pagination
  const pageForward = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); //havent hit the end yet add 1
    } else {
      //otherwise set it to total
      setCurrentPage(totalPages);
    }
  };
  //moves page backwards 1
  const pageBackwards = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      // if the page num is ever less than 1 set it to be 1
      setCurrentPage(1);
    }
  };
  //goes to exact page user clicks on
  const exactPage = (pageNumber: number) => {
    if (pageNumber <= totalPages && pageNumber > 0) {
      //check that page number clicked is an actual page we can go to
      setCurrentPage(pageNumber);
    }
  };

  const nextPageNum = () => {
    return (
      <div
        className="pagination-link"
        aria-label={"Next Page " + currentPage}
        onClick={() => exactPage(currentPage + 1)}
      >
        {currentPage + 1}
      </div>
    );
  };
  const currentPageNum = () => {
    return (
      <div
        className="pagination-link is-current"
        aria-label={"Current Page "}
        onClick={() => exactPage(currentPage)}
      >
        {currentPage}
      </div>
    );
  };
  const prevPageNum = () => {
    return (
      <div
        className="pagination-link"
        aria-label={"Previous Page" + (currentPage - 1)}
        onClick={() => exactPage(currentPage - 1)}
      >
        {currentPage - 1}
      </div>
    );
  };
  //if currentpage is 1st page
  const startOfPages = (pageNum: number) => {
    if (pageNum === 1) {
      return (
        <ul className="pagination-list">
          <li>{currentPageNum()}</li>
          <li>{nextPageNum()}</li>
          <li>
            <div
              className="pagination-link "
              aria-label={"next next Page "}
              onClick={() => exactPage(currentPage + 2)}
            >
              {currentPage + 2}
            </div>
          </li>
        </ul>
      );
    }
  };
  //if currentpage is last page
  const endOfPages = (pageNum: number) => {
    if (pageNum === totalPages) {
      return (
        <ul className="pagination-list">
          <li>
            <div
              className="pagination-link"
              aria-label={"Previous Previous Page "}
              onClick={() => exactPage(currentPage - 2)}
            >
              {currentPage - 2}
            </div>
          </li>
          <li>{prevPageNum()}</li>
          <li>{currentPageNum()}</li>
        </ul>
      );
    }
  };
  //if currentpage is somewhere in the middle. *not first and not last page.
  const middleOfPages = (pageNum: number) => {
    if (pageNum !== 1 && pageNum !== totalPages) {
      return (
        <ul className="pagination-list">
          <li>{prevPageNum()}</li>
          <li>{currentPageNum()}</li>
          <li>{nextPageNum()}</li>
        </ul>
      );
    }
  };
  const previousButton = () => {
    return (
      <div
        className="pagination-previous"
        data-testid="pagination-previous"
        onClick={() => pageBackwards()}
      >
        Previous
      </div>
    );
  };
  const nextButton = () => {
    return (
      <div className="pagination-next" onClick={() => pageForward()}>
        Next
      </div>
    );
  };
  //if there are more 3 or more pages pagination will display multiple pages at once
  const displayMultiplePageNumbers = (totalPages: number) => {
    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        {previousButton()}
        {nextButton()}
        {startOfPages(currentPage)}
        {endOfPages(currentPage)}
        {middleOfPages(currentPage)}
      </nav>
    );
  };

  //if there are 2 pages of less pagination will only display the current page being viewed
  const displayOnlyCurrentPage = () => {
    return (
      <li className={classNames([`pagination-list`])}>
        {previousButton()}
        {currentPageNum()}
        {nextButton()}
      </li>
    );
  };
  return (
    <nav
      className={classNames([`pagination`])}
      data-testid="paginationComponent"
      role="navigation"
      aria-label="pagination"
    >
      {totalPages < 3
        ? displayOnlyCurrentPage()
        : displayMultiplePageNumbers(totalPages)}
    </nav>
  );
};

export default Pagination;
