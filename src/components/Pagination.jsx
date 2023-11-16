import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(totalPages, currentPage + 1);
    i++
  ) {
    pageNumbers.push(
      <li
        key={i}
        className={`px-3 py-1 mx-1 border rounded ${
          currentPage === i
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500 hover:bg-blue-200"
        }`}
      >
        <button className="focus:outline-none" onClick={() => paginate(i)}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <ul className="flex justify-center xl:mt-32 lg:mt-16 sm:mt-4">
      {currentPage > 1 && (
        <li className="px-3 py-1 mx-1 border rounded bg-white text-blue-500 hover:bg-blue-200">
          <button
            className="focus:outline-none"
            onClick={() => paginate(currentPage - 1)}
          >
            Prev
          </button>
        </li>
      )}

      {pageNumbers}

      {currentPage < totalPages && (
        <li className="px-3 py-1 mx-1 border rounded bg-white text-blue-500 hover:bg-blue-200">
          <button
            className="focus:outline-none"
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
