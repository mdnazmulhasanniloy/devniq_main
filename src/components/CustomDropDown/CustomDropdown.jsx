"use client";

import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const CustomDropdown = ({
  options = [],
  placeholder = "Select an option",
  className = "",
  onChange, // parent control
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value, label) => {
    setSelected(label);
    setIsOpen(false);
    onChange?.(value); // send value to parent safely
  };

  //  Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/*  Select button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className=" w-[150px] lg:w-[206px] h-9 lg:h-[50px] bg-white rounded-xl lg:rounded-2xl text-[14px] lg:text-[16px] px-3.5 pr-4 lg:px-5 lg:pr-14 text-[#020617] flex items-center justify-between cursor-pointer border border-[#ECEDF2]"
      >
        <span className="truncate">{selected || placeholder}</span>

        <RiArrowDropDownLine
          className={`absolute right-2 lg:right-5 top-1/2 -translate-y-1/2 text-xl lg:text-3xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/*  Options */}
      {isOpen && (
        <ul className="absolute z-50 w-full mt-5 pb-5 text-[14px] md:text-[16px] bg-white rounded-2xl shadow-lg overflow-hidden">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value, option.label)}
              className="px-5 py-3 hover:bg-gray-100 cursor-pointer select-none border-none"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
