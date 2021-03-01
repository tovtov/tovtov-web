import React, { FunctionComponent } from "react";

const Pagination = () => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <div className="pagination-previous" title="This is the first page">
        Previous
      </div>
      <div className="pagination-next">Next page</div>
      <ul className="pagination-list">
        <li>
          <div
            className="pagination-link is-current"
            aria-label="Page 1"
            aria-current="page"
          >
            1
          </div>
        </li>
        <li>
          <div className="pagination-link" aria-label="Goto page 2">
            2
          </div>
        </li>
        <li>
          <div className="pagination-link" aria-label="Goto page 3">
            3
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
