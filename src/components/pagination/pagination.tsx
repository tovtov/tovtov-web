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
  //moves page forward 1
  const pagForward = (lastPageYet: boolean) => {
    if (lastPageYet) {
      setCurrentPage(currentPage + 1); //havent hit the end yet add 1
    }
  };
  //moves page backwards 1
  const pagBackward = (firstPageYet: boolean) => {
    if (firstPageYet) {
      setCurrentPage(currentPage - 1);
    }
  };
  //goes to exact page user clicks on
  const exactPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  //if currentpage is 1st page
  const startOfPages = (pageNum: number) => {
    if (pageNum === 1) {
      return (
        <ul className="pagination-list">
          <li>
            <div
              className="pagination-link is-current"
              aria-label={"Current Page "}
              onClick={() => exactPage(currentPage)}
            >
              {currentPage}
            </div>
          </li>
          <li>
            <div
              className="pagination-link"
              aria-label={"next Page"}
              onClick={() => exactPage(currentPage + 1)}
            >
              {currentPage + 1}
            </div>
          </li>
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
          <li>
            <div
              className="pagination-link"
              aria-label={"Previous Page"}
              onClick={() => exactPage(currentPage)}
            >
              {currentPage - 1}
            </div>
          </li>
          <li>
            <div
              className="pagination-link is-current"
              aria-label={"Current Page "}
              onClick={() => exactPage(currentPage)}
            >
              {currentPage}
            </div>
          </li>
        </ul>
      );
    }
  };
  //if currentpage is somewhere in the middle. *not first and not last page.
  const middleOfPages = (pageNum: number) => {
    if (pageNum !== 1 && pageNum !== totalPages) {
      return (
        <ul className="pagination-list">
          <li>
            <div
              className="pagination-link"
              aria-label={"Previous Page " + currentPage}
              onClick={() => exactPage(currentPage - 1)}
            >
              {currentPage - 1}
            </div>
          </li>
          <li>
            <div
              className="pagination-link is-current"
              aria-label={"Current Page " + currentPage}
              onClick={() => exactPage(currentPage)}
            >
              {currentPage}
            </div>
          </li>
          <li>
            <div
              className="pagination-link"
              aria-label={"Next Page " + currentPage}
              onClick={() => exactPage(currentPage + 1)}
            >
              {currentPage + 1}
            </div>
          </li>
        </ul>
      );
    }
  };
  //if there are more 3 or more pages pagination will display multiple pages at once
  const displayMultiplePageNumbers = (totalPages: number) => {
    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <div
          className="pagination-previous"
          data-testid="pagination-previous"
          onClick={() => pagBackward(currentPage > 1)}
        >
          Previous
        </div>

        <div
          className="pagination-next"
          onClick={() => pagForward(currentPage < totalPages)}
        >
          Next
        </div>
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
        <div
          className="pagination-previous"
          data-testid="pagination-previous"
          onClick={() => pagBackward(currentPage > 1)}
        >
          Previous
        </div>
        <div
          className={classNames("pagination-link is-current")}
          aria-label={"Current Page " + currentPage}
        >
          {currentPage}
        </div>
        <div
          className="pagination-next"
          onClick={() => pagForward(currentPage < totalPages)}
        >
          Next
        </div>
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
