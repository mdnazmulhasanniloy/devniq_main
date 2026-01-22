import React from "react";

const ResponsiveContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
                  max-w-full sm:max-w-[640px] md:max-w-3xl lg:max-w-5xl xl:max-w-[1312px] 2xl:max-w-[1440px]
                  ${className}`}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
