import React, { useState, useEffect, useRef } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category for filtering
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const filterRef = useRef(null); // Ref for filter icon and modal
  const overlayRef = useRef(null); // Ref for overlay

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(5);
      } else {
        setItemsPerPage(12);
      }
      setCurrentPage(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Extract unique categories with normalization to prevent duplicates due to case or whitespace
  const uniqueCategories = [...new Set(equipments.map((eq) => eq.category.trim().toLowerCase()))];

  // Debug log to verify unique categories
  useEffect(() => {
    console.log("Unique Categories:", uniqueCategories);
  }, [uniqueCategories]);

  // Filter equipments based on search term and selected category
  const filteredEquipments = equipments.filter((equipment) => {
    const matchesSearch =
      equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.dimension.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || equipment.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredEquipments.length / itemsPerPage);
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = new Set();
    const maxNumericButtons = 4;

    if (totalPages <= maxNumericButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.add(i);
      }
    } else {
      pages.add(1);
      pages.add(currentPage);
      pages.add(totalPages);

      if (pages.size < maxNumericButtons) {
        if (currentPage > 1 && !pages.has(currentPage - 1) && currentPage - 1 !== 1) {
          pages.add(currentPage - 1);
        }
      }
      if (pages.size < maxNumericButtons) {
        if (currentPage < totalPages && !pages.has(currentPage + 1) && currentPage + 1 !== totalPages) {
          pages.add(currentPage + 1);
        }
      }
      if (pages.size < maxNumericButtons) {
        if (!pages.has(2) && totalPages > 2) pages.add(2);
      }
      if (pages.size < maxNumericButtons) {
        if (!pages.has(totalPages - 1) && totalPages > 2) pages.add(totalPages - 1);
      }
    }

    let sortedNumericPages = Array.from(pages).sort((a, b) => a - b);
    const finalPagesWithEllipses = [];
    for (let i = 0; i < sortedNumericPages.length; i++) {
      finalPagesWithEllipses.push(sortedNumericPages[i]);
      if (i < sortedNumericPages.length - 1) {
        if (sortedNumericPages[i + 1] - sortedNumericPages[i] > 1) {
          finalPagesWithEllipses.push("...");
        }
      }
    }
    return finalPagesWithEllipses;
  };

  // Handle modal toggle
  const toggleFilterModal = () => {
    setIsFilterModalOpen((prev) => !prev);
  };

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target)
      ) {
        setIsFilterModalOpen(false);
      }
    };

    if (isFilterModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterModalOpen]);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle selection
    setCurrentPage(1); // Reset to first page
    setIsFilterModalOpen(false); // Close modal after selection
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
            <div
              className="flex items-center gap-[12px] bg-[#EFEFEF] pl-[10px] p-[10px] rounded-[8px] lg:w-[108px] md:w-[100px] lg:h-[68px] md:h-[55px] h-[40px] relative"
              ref={filterRef}
            >
              <img
                className="cursor-pointer w-6 h-6"
                src={filterIcon}
                alt="filterIcon"
                onClick={toggleFilterModal}
              />
              <p className="text-[20px] font-Inter font-medium text-[#969797] hidden md:block">
                Filter
              </p>
              {isFilterModalOpen && (
                <>
                  <div
                    ref={overlayRef}
                    className="fixed inset-0 bg-black/60 z-40"
                    onClick={() => setIsFilterModalOpen(false)}
                  ></div>
                  <div className="absolute top-full 2xl:right-0 lg:right-0 md:right-0 right-0 mt-2 bg-white shadow-lg rounded-lg z-50 w-[290px] p-2">
                    {uniqueCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full hover:text-white text-[#333333] bg-[#F2F3F7] hover:bg-[#008A3F] 2xl:text-[24px] lg:text-[20px] font-Inter font-medium py-2 px-4 rounded-md mb-2 transition-colors duration-200 ${
                          selectedCategory === category ? "bg-[#008A3F]" : ""
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Equipments */}
        <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-x-8 md:gap-y-12">
          {currentEquipments.map((equipment) => (
            <div key={equipment.id} className="bg-[#EEF4F0A3] overflow-hidden">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full object-cover rounded-[15px]"
              />
              <div className="p-4">
                <h3 className="lg:text-[28px] md:text-[20px] font-bold text-[#333333] font-Inter mb-2 lg:h-[34px]">
                  {equipment.name}
                </h3>
                <p className="text-[16px] text-[#969797] font-Inter font-normal lg:leading-[22px] lg:h-[44px] lg:w-[233px]">
                  {equipment.dimension} {equipment.category}
                </p>
                <p className="text-sm text-[#969797] font-Inter font-medium mb-1"></p>
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
                onClick={() => typeof page === "number" && handlePageClick(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-[4px] font-bold text-[24px] text-[#000101]
                  ${typeof page === "number" ? "cursor-pointer" : "cursor-default"}
                  ${currentPage === page ? "bg-[#F6C200] text-[#333333]" : "bg-[#EFEFEF]"}
                  ${typeof page === "number" ? "hover:bg-[#008A3F] hover:text-white transition-colors duration-200" : ""}
                  ${page === "..." ? "pointer-events-none" : ""}
                `}
                disabled={page === "..."}
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