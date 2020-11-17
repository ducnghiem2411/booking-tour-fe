import React, { useState } from "react";

const Pagination = (postsPerPage, totalPosts, paginate) => {
    

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers
            ? pageNumbers.map((number, index) => (
                <li key={index} className="page-item">
                  <a
                    onClick={() => paginate(number)}
                    href="#"
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              ))
            : []}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
