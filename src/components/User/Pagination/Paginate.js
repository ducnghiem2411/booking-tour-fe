import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

const Paginate = (props) => {
  const [activePage, setActivePage] = useState(1);

  const { total, limit, onPageChange } = props;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  useEffect(() => {}, [activePage]);

  return (
    <>
      <div className="paginate">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={limit}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Paginate;
