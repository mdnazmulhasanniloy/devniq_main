import { Button } from "../../ui/button.jsx";

const ServiceCard = ({ className, ServiceName, icon }) => {
  return (
    <div className="max-w-[316px]">
      <div className={`bg-no-repeat bg-center bg-cover pt-80 rounded-2xl md:rounded-0 md:pt-[437.34px] group pb-5 ${className}`}>
        
   <Button
  variant="outline"
  className="
     h-12 w-[200px] md:h-[51px] md:w-[280px]
    mx-2 px-4 flex items-center gap-2
    cursor-pointer border-none duration-300 
    group-hover:invert
  "
>
  <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition duration-300 ">
    {icon}
  </span>
  {ServiceName}
</Button>


      </div>
    </div>
  );
};

export default ServiceCard;
