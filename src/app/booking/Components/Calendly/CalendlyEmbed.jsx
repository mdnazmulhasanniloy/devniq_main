"use client";
import { InlineWidget } from "react-calendly";

const CalendlyEmbed = () => {
  return (
    <div className="w-full h-[700px]">
      <InlineWidget
        url="https://calendly.com/devniqit/30min" 
        pageSettings={{
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
         primaryColor: "#FF7A08",
         textColor:"#000000"
        }}
      />
    </div>
  );
};

export default CalendlyEmbed;
