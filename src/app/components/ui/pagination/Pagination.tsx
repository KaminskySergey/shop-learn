

interface IPagination {
    productsLength: number
    productsPerPage: number;
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void
}

export default function Pagination({productsLength, productsPerPage, setCurrentPage, currentPage}: IPagination) {

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };
      
    return <div className="flex justify-center mt-4">
    {Array.from({ length: Math.ceil(productsLength / productsPerPage) }).map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={`mx-1 px-3 py-2 rounded-md ${
          currentPage === index + 1
            ? 'bg-blue-500 text-white focus:outline-none'
            : 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:outline-none'
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>
}
