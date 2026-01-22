"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BlogCard from "../HomeSection/Cards/BlogCard";

const BlogCardSlider = ({className}) => {
     const cards = [
    {
       PostTitle: "How to Build a Smooth User Experience in 2026?",
      image: "/smooth-user-experience.svg",
    },
    {
       PostTitle: "The Startup Guide to Launching an MVP Faster?",
      image: "/MVP-faster.svg",
    },
    {
       PostTitle: "Top Front-End Development Trends You Should Know",
      image: "/Front-End.svg",
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
    <div className={`w-full lg:hidden   ${className}`}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className='px-1.5'>
            <BlogCard
             src={card.image}
             PostTitle={card.PostTitle}
              
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BlogCardSlider