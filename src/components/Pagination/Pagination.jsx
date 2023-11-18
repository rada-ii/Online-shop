import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];
  const pagesToShow = 1; // Adjust this value as needed

  // Helper function to check if a number is the first page
  const isFirstPage = (num) => num === 1;

  // Calculate the start and end points for the page range
  let startPage = Math.max(1, currentPage - pagesToShow);
  let endPage = Math.min(totalPages, startPage + 2);

  // If there are fewer than 3 pages, adjust the endPage to show 3 pages
  if (totalPages <= 3) {
    startPage = 1;
    endPage = totalPages;
  } else {
    // If currentPage is near the last page, adjust the startPage to show 3 pages
    if (currentPage >= totalPages - pagesToShow) {
      startPage = totalPages - 2;
      endPage = totalPages;
    } else if (currentPage <= pagesToShow) {
      // If currentPage is near the first page, adjust the endPage to show 3 pages
      startPage = 1;
      endPage = startPage + 2;
    }
  }

  // Display the first page and pages around the current page, excluding the last page
  for (let i = startPage; i <= endPage; i++) {
    if (isFirstPage(i) || i !== totalPages) {
      const pageContent = isFirstPage(i) ? i : i.toString();

      pageNumbers.push(
        <li
          key={i}
          className={`px-3 py-1 mx-1 border rounded ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } hover:bg-blue-200 cursor-pointer`}
        >
          <button className="focus:outline-none" onClick={() => paginate(i)}>
            {pageContent}
          </button>
        </li>
      );
    }
  }

  return (
    <ul className="flex justify-center xl:mt-32 lg:mt-16 sm:mt-4 mb-20">
      {currentPage > 1 && (
        <li className="px-3 py-1 mx-1 border rounded bg-white text-blue-500 hover:bg-blue-200 cursor-pointer">
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
        <li className="px-3 py-1 mx-1 border rounded bg-white text-blue-500 hover:bg-blue-200 cursor-pointer">
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
