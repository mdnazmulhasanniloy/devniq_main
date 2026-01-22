"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TstimonialsCard from "../HomeSection/Cards/TstimonialsCard.jsx";

const ClientReviwSlider = ({className}) => {
  const cards = [
    {
      ClientName: "Leslie Alexander",
      Position: "Co-Founder of Womenia",
      image: "/Co-Founder.svg",
    },
    {
      ClientName: "Albert Flores",
      Position: "Founder of GearUp",
      image: "/Founder.svg",
    },
    {
      ClientName: "Leslie Alexander",
      Position: "Co-Founder of Womenia",
      image: "/LeslieAlexander.svg",
    },
  ];

  const settings = {
    dots: false,          
    infinite: true,      
    speed: 1000,          
    slidesToShow: 1,     
    slidesToScroll: 1,   
    centerMode: true,    
    centerPadding: "0px", 
    arrows: false,       
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={`w-full lg:hidden  ${className} `}>
      <Slider {...settings} >
        {cards.map((card, index) => (
          <div key={index} className="px-1.5">
            <TstimonialsCard
              disableHover
              className={`bg-[url(${card.image})] bg-center px-3 rounded-[20px] h-[450px]`}
              DescriptionClassName="block"
              ClientName={card.ClientName}
              Position={card.Position}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientReviwSlider;
