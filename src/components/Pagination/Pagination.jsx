

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];
  const pagesToShow = 1; 

 
  const isFirstPage = (num) => num === 1;

 
  let startPage = Math.max(1, currentPage - pagesToShow);
  let endPage = Math.min(totalPages, startPage + 2);


  if (totalPages <= 3) {
    startPage = 1;
    endPage = totalPages;
  } else {

    if (currentPage >= totalPages - pagesToShow) {
      startPage = totalPages - 2;
      endPage = totalPages;
    } else if (currentPage <= pagesToShow) {
     
      startPage = 1;
      endPage = startPage + 2;
    }
  }


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
        <li className="px-3 py-1 mx-1 border rounded bg-white text-blue-500 hover:bg-blue-200 cursor-pointer transition duration-200">
          <button
            className="focus:outline-none"
            onClick={() => paginate(currentPage - 1)}
          >
            &lt;&lt;
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
            &gt;&gt;
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
