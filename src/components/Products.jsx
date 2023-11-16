// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("api/products.json", {
//           headers: {
//             Origin: window.location.hostname,
//             "X-Requested-With": "XMLHttpRequest",
//           },
//         });

//         const items = response.data.products.data.items;
//         console.log("Product Items:", items);
//         setProducts(items);
//       } catch (error) {
//         console.error("Fetching error:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const displayPageNumbers = () => {
//     const totalPages = Math.ceil(products.length / itemsPerPage);
//     const pageNumbers = [];

//     for (
//       let i = Math.max(1, currentPage - 1);
//       i <= Math.min(totalPages, currentPage + 1);
//       i++
//     ) {
//       pageNumbers.push(
//         <li
//           key={i}
//           className={`px-3 py-1 mx-1 border rounded ${
//             currentPage === i
//               ? "bg-blue-500 text-white"
//               : "bg-white text-blue-500 hover:bg-blue-200"
//           }`}
//         >
//           <button className="focus:outline-none" onClick={() => paginate(i)}>
//             {i}
//           </button>
//         </li>
//       );
//     }

//     return pageNumbers;
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4 mt-8">
//         {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
//           currentProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between"
//             >
//               {product.images && product.images.length > 0 ? (
//                 <img
//                   src={product.images[0]}
//                   alt={`${product.name}-0`}
//                   className="w-full h-40 object-cover mb-4 rounded-md"
//                 />
//               ) : (
//                 <p className="text-center text-gray-500 text-xl mb-36">
//                   No image available
//                 </p>
//               )}

//               <h2 className="font-semibold text-xl text-indigo-400">
//                 {product.name}
//               </h2>
//               <p className="text-gray-600 mt-4">${product.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//       <div className="mt-4">
//         <nav>
//           <ul className="flex justify-center xl:mt-32 lg:mt-16 sm:mt-4">
//             <li
//               className={`px-3 py-1 mx-1 border rounded ${
//                 currentPage === 1
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-white text-blue-500 hover:bg-blue-200"
//               }`}
//             >
//               <button
//                 className="focus:outline-none"
//                 onClick={() => paginate(currentPage - 1)}
//                 disabled={currentPage === 1}
//               >
//                 Prev
//               </button>
//             </li>

//             {displayPageNumbers()}

//             <li
//               className={`px-3 py-1 mx-1 border rounded ${
//                 currentPage === Math.ceil(products.length / itemsPerPage)
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-white text-blue-500 hover:bg-blue-200"
//               }`}
//             >
//               <button
//                 className="focus:outline-none"
//                 onClick={() => paginate(currentPage + 1)}
//                 disabled={
//                   currentPage === Math.ceil(products.length / itemsPerPage)
//                 }
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Products;
