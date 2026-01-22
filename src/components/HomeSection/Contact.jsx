"use client";
import TextareaAutosize from "react-textarea-autosize";
import FadeLeft from "../Animations/FadeLeft.jsx";
import FadeRight from "../Animations/FadeRight.jsx";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import { Button } from "../ui/button.jsx";
import { Input } from "../ui/input.jsx";


const Contact = () => {


   const handelSubmit =async(e)=>{
    e.preventDefault()

    const target = e.target
    const companyName = target.companyName.value
    const name = target.name.value
    const projectType = target.projectType.value
    const message = target.message.value

  

  await fetch("/api/send-mail", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    companyName,
    name,
    projectType,
    message
  }),
});


  }



  return (
    <>
 
      <div className="py-10 md:py-15 lg:py-20 bg-[#FFFFFF]">
        <ResponsiveContainer>
          <div className="flex items-center flex-wrap justify-evenly lg:justify-between xl:justify-evenly">
             <FadeLeft >  
            <div className="">
             
              <SectionHeader
                className={"text-[#22282B] "}
                section={"Contact Us"}
                SNClassName={" font-lato justify-center lg:justify-start "}
                Title={"Let’s Build Together"}
                TitleClassName={
                  " max-w-[652px] mx-auto lg:mx-0   leading-[100%] pt-[15px] pb-8 lg:text-start!"
                }
                subtitle={
                  "Have a project in mind or questions about our services? Drop us a message and we’ll get back to you promptly."
                }
                SubClassName={
                  "font-semibold opacity-80 max-w-[548px] mx-auto lg:mx-0 lg:text-start! leading-[150%] "
                }
              />
              

<div className="flex items-center justify-center lg:justify-start gap-x-5 pt-6 md:pt-8 pb-15 md:pb-20 lg:pb-[142.34px]">
              <Button  className={'px-[20.51px]! py-[14.83px]! h-[49.66px] font-poppins flex md:text-[17.43px] bg-[#000000] text-[#FFFFFF] rounded-[40px] cursor-pointer items-center hover:bg-transparent hover:text-[#22282B] hover:border-none duration-500'}>  View Our Services</Button>
              <Button className={'px-[20.51px]! py-[14.83px]! h-[49.66px] font-poppins flex md:text-[17.43px] bg-[#000000] text-[#FFFFFF] rounded-[40px] cursor-pointer items-center hover:bg-transparent hover:text-[#22282B] hover:border-none duration-500'}> See Reviews</Button>

              </div>

              <div className="flex items-center justify-center lg:justify-start font-manrope pb-6 lg:pb-0 gap-x-10">
                <div className="">
                  <h4 className="text-[#808080] pb-1">Reach out to us</h4>
                  <h3 className="text-[#FF7A08] text-[18px] font-semibold">devniq@gmail.com</h3>
                </div>

                <div className="">
                  <h4 className="text-[#808080] pb-1">Contact with us</h4>
                  <h3 className="text-[#FF7A08] text-[18px] font-semibold">+880-1903486922</h3>
                </div>
              </div>
              
            </div>
</FadeLeft>

            {/* Right - Contact Form */}

            <FadeRight className="w-full max-w-full md:max-w-[617px] px-4 md:px-0">
  <form   onSubmit={handelSubmit} className="bg-[#000000] py-6 px-4 sm:px-6 md:px-8 rounded-2xl border">
    <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-manrope font-bold text-[#FFFFFF] pb-1">
      Get in Touch
    </h3>
    <p className="text-[#AFB6C8] font-manrope pb-6 text-sm sm:text-base">
      Let’s connect and build something amazing.
    </p>

    {/* Input fields */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2 gap-y-4 pb-4">
      <Input
        type="text"
        name="companyName"
        placeholder="Enter your company name"
        className=" w-full   h-[50px] rounded-[13px]! border border-[#212121] text-[#ECEDF2] placeholder:text-[#ECEDF2] placeholder:text-[13px] lg:placeholder:text-[14px]"
        required
      />
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="w-full sm:w-[268.5px] h-[50px] rounded-[13px]! border border-[#212121] text-[#ECEDF2] placeholder:text-[#ECEDF2] placeholder:text-[13px] lg:placeholder:text-[14px]"
        required
      />
    </div>

    {/* Select */}
    <select
      required
      defaultValue=""
      name="projectType"
      className="w-full rounded-[13px]! h-[50px] bg-[#000000] border border-[#212121] text-[#ECEDF2] placeholder:text-[#ECEDF2] cursor-pointer px-3 py-2 mb-4"
    >
      <option value="" disabled>
        Type of project you’re looking for
      </option>
      <option value="software-development">Software Development</option>
      <option value="frontend-development">Front End Development</option>
      <option value="seo">SEO</option>
      <option value="app-development">App Development</option>
      <option value="web-development">Web Development</option>
    </select>

    {/* Textarea */}
    <TextareaAutosize
      name="message"
      data-slot="input-group-control"
      className="w-full resize-none bg-transparent px-3 py-2.5 text-base sm:text-sm md:text-base pt-[13px] pl-4 rounded-[13px]! mt-4 border border-[#212121] text-[#ECEDF2] placeholder:text-[#ECEDF2] min-h-[150px] sm:min-h-[180px]"
      placeholder="Anything you would like to share with us...."
    />

    {/* Submit button */}
    <button
      type="submit"
      className="w-full mt-6 px-6 py-3 font-poppins bg-linear-to-r from-[#FF383C] to-[#FB6000] text-[#FFFFFF] font-medium rounded-[14px] shadow-md transition text-sm sm:text-base"
    >
      Start Your Journey
    </button>
  </form>
</FadeRight>

          </div>
        </ResponsiveContainer>
      </div>
      
    </>
  );
};

export default Contact;
