'use client'
import React, { useState } from 'react'

const FaqList = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`border border-[#ECEDF2] p-3 md:p-5 md:max-w-[708px] rounded-2xl mb-4 font-manrope  `}
    >
      <button
        className="flex justify-between items-center w-full text-left  text-[#020617]  "
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-[16px] md:text-xl">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform text-[#1E1E1E] duration-300 cursor-pointer ${
            isOpen ? "rotate-180 " : "rotate-0 "
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-[#22282B]/80 font-medium leading-[150%]">{answer}</p>
      </div>
    </div>
  )
}

export default FaqList
