import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import "./pagination.scss";

export interface PaginationProps {
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  lastKudoDisplayed: number;
  setLastKudosDisplayed: (item: number) => void;
  itemsPerPage: number;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  lastKudoDisplayed,
  totalPages,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  setLastKudosDisplayed,
}) => {
  const pagForward = (lastPageYet: boolean) => {
    if (lastPageYet) {
      setCurrentPage(currentPage + 1); //havent hit the end yet
      setLastKudosDisplayed(itemsPerPage * currentPage);
    } else {
      setCurrentPage(totalPages);
      setLastKudosDisplayed(itemsPerPage * currentPage);
    } //no more pages to increase
  };
  const pagBackward = (firstPageYet: boolean) => {
    if (firstPageYet) {
      setCurrentPage(currentPage - 1);
      setLastKudosDisplayed(currentPage - itemsPerPage);
    } else {
      setCurrentPage(1);
      setLastKudosDisplayed(currentPage - itemsPerPage);
    }
  };
  const exactPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setLastKudosDisplayed(itemsPerPage * currentPage);
  };
  const startOfPages = (pageNum: number) => {
    if (pageNum > 1) {
      return (
        <div
          className="pagination-link"
          aria-label={"Previous Page " + (currentPage - 1)}
          onClick={() => exactPage(currentPage - 1)}
        >
          {currentPage - 1}
        </div>
      );
    } else {
      return null;
    }
  };
  const endOfPages = (pageNum: number) => {
    if (pageNum < totalPages) {
      return (
        <div
          className="pagination-link"
          aria-label={"Next Page " + (currentPage + 1)}
          onClick={() => exactPage(currentPage + 1)}
        >
          {currentPage + 1}
        </div>
      );
    } else {
      return null;
    }
  };
  const displayMultiplePageNumbers = (totalPages: number) => {
    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <div
          className="pagination-previous"
          data-testid="pagination-previous"
          onClick={() => pagBackward(currentPage > 2)}
        >
          Previous
        </div>

        <div
          className="pagination-next"
          onClick={() => pagForward(currentPage < totalPages)}
        >
          Next
        </div>

        <ul className="pagination-list">
          <li>{startOfPages(currentPage)}</li>
          <li>
            <div
              className="pagination-link  is-current"
              aria-label={"Current Page " + currentPage}
              onClick={() => exactPage(currentPage)}
            >
              {currentPage}
            </div>
          </li>
          <li>{endOfPages(currentPage)}</li>
        </ul>
      </nav>
    );
  };

  //if there is only one page
  const displayOnlyCurrentPage = () => {
    return (
      <li className={classNames([`pagination-list`])}>
        <div
          className={classNames("pagination-link")}
          aria-label={"Current Page " + currentPage}
        >
          {currentPage}
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
