import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/searchIcon2.png";
import cancelSearch from "../../assets/closeIcon.png";
import filterIcon from "../../assets/filterIcon.png";
import { equipments } from "./equipmentDb.js";
import nextIcon from "../../assets/nextIcon.png";
import previousIcon from "../../assets/previousIcon.png";

const AllEquipment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12); 
  const [searchTerm, setSearchTerm] = useState(""); 

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(5);
      } else { 
        setItemsPerPage(12);
      }
      setCurrentPage(1); 
    };

    // Set initial items per page
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter equipments based on search term
  const filteredEquipments = equipments.filter(equipment =>
    equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    equipment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    equipment.dimension.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredEquipments.length / itemsPerPage);

  // Get current equipments for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEquipments = filteredEquipments.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers to display in pagination
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 10) {
      // If 10 or fewer total pages, display all of them
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If more than 10 pages, display 1 2 3 4 ... 9 10
      pages.push(1, 2, 3, 4);
      if (currentPage > 4 && currentPage < totalPages - 1) {
        // If current page is in the middle, show ellipsis
        pages.push('...');
        pages.push(currentPage); 
        pages.push('...');
      } else {
        pages.push('...');
      }
      pages.push(totalPages - 1, totalPages);
    }
    return pages;
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1); 
  };

  return (
    <div className="w-full md:my-10 my-4">
      <div className="container mx-auto w-11/12">
        <section className="flex md:flex-row flex-col justify-between md:items-center mb-8">
          <div>
            <p className="text-[#000000] font-Inter font-bold md:text-[28px] text-[20.35px] md:mb-0 mb-2">
              All Equipments
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#EFEFEF] pl-[10px] pr-[14px] py-[10px] 2xl:w-[625px] lg:h-[68px] h-[40px] md:h-[55px] lg:w-[430px] md:w-[300px] w-[286px] rounded-[8px] relative">
              <img src={searchIcon} alt="searchIcon" className="w-5 h-5" />
              <input
                type="text"
                placeholder="search equipments..."
                id="search" 
                className="placeholder:text-[#969797] placeholder:font-normal text-black placeholder:font-Inter md:placeholder:text-[20px] placeholder:text-[14px] w-3/4 focus:outline-none text-[20px] font-Inter font-normal"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {searchTerm && ( 
                <img
                  className="rounded-full border-1 border-[#969797] p-[4px] absolute right-4 cursor-pointer w-6 h-6" 
                  src={cancelSearch}
                  alt="cancelSearchIcon"
                  onClick={handleClearSearch}
                />
              )}
            </div>
            <div className="flex items-center gap-[12px] bg-[#EFEFEF] pl-[10px] p-[10px] rounded-[8px] lg:w-[108px] md:w-[100px] lg:h-[68px] md:h-[55px] h-[40px]">
              <img
                className="cursor-pointer w-6 h-6" 
                src={filterIcon}
                alt="filterIcon"
              />
              <p className="text-[20px] font-Inter font-medium text-[#969797] hidden md:block">
                Filter
              </p>
            </div>
          </div>
        </section>

        {/* Equipments*/}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-12">
          {currentEquipments.map((equipment) => (
            <div key={equipment.id} className="bg-[#EEF4F0A3] overflow-hidden">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full object-cover rounded-[15px]" 
              />
              <div className="p-4">
              <h3 className="lg:text-[28px] md:text-[20x] font-bold text-[#333333] font-Inter mb-2 lg:h-[34px] ">
                  {equipment.name}
                </h3>
                <p className="text-[16px] text-[#969797] font-Inter font-normal lg:leading-[22px] lg:h-[44px] lg:w-[233px]">
                  {equipment.dimension} {equipment.category}
                </p>
                <p className="text-sm text-[#969797] font-Inter font-medium mb-1">
                 
                </p>
                
                <button className="mt-4 text-[#333333] font-Inter font-normal text-[16px] hover:underline hover:cursor-pointer">
                  More details
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-[#EFEFEF] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#008A3F] hover:text-white transition-colors duration-200"
            >
              <img src={previousIcon} alt="Previous" className="w-6 h-6" />
            </button>
            
            {getPageNumbers().map((page, index) => (
              <button
                key={index} 
                onClick={() => typeof page === 'number' && handlePageClick(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-[4px] font-bold text-[24px] text-[#000101]
                  ${typeof page === 'number' ? 'cursor-pointer' : 'cursor-default'}
                  ${currentPage === page ? 'bg-[#F6C200] text-[#333333]' : 'bg-[#EFEFEF]'}
                  ${typeof page === 'number' ? 'hover:bg-[#008A3F] hover:text-white transition-colors duration-200' : ''}
                  ${page === '...' ? 'pointer-events-none' : ''}
                `}
                disabled={page === '...'}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-[#EFEFEF] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#008A3F] hover:text-white transition-colors duration-200"
            >
              <img src={nextIcon} alt="Next" className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEquipment;
