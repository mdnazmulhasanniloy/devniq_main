
import Image from 'next/image';
import Link from 'next/link';
import { PiCalendarDotsBold } from "react-icons/pi";
import FadeLeft from '../Animations/FadeLeft.jsx';
import FadeRight from '../Animations/FadeRight.jsx';
import FadeUp from '../Animations/Fadeup.jsx';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import FaqList from './FAQItem/FaqList.jsx';


const Faq = () => {
  const faqData = [
    {
      question: "What services does Devniq offer?",
      answer:
        "We design and build modern, scalable digital products — including websites, mobile apps, dashboards, and custom software solutions. We also provide UI/UX design, branding, and ongoing product support.",
    },
    {
      question: "How long does a typical project take?",
      answer: "============================",
    },
    {
      question: "Do you work with startups or only large companies?",
      answer: "============================",
    },
    {
      question: "Will I be involved during the project?",
      answer: "===============================",
    },
  ];

  return (
    <section className="py-10 bg-[#FFFFFF]" aria-label="Frequently Asked Questions">
      <ResponsiveContainer>

        {/*  Section Header */}
        <FadeUp>
        <SectionHeader
          className="text-[#22282B] pb-10 md:pb-14"
          section="FAQ"
          SNClassName="justify-center font-lato"
          Title="Frequently Asked Questions"
          TitleClassName="max-w-[906px] m-auto  leading-[100%] py-3  md:py-6"
          subtitle="Clear answers to the most common questions about our process, pricing, and how we work at Devniq."
          SubClassName="font-semibold opacity-80 max-w-[612px] m-auto leading-[150%] px-5 md:px-0"
        />
</FadeUp>
        <div className="flex justify-evenly flex-wrap lg:gap-x-[21px]">

          {/*  Left Animated Card */}
          <FadeLeft>
          <div
           
            className="bg-[url(/FaqBg.svg)] bg-no-repeat bg-center bg-cover rounded-2xl max-w-[311px] px-7 py-8"
          >
            <Image
              src="/question.svg"
              alt="Question Icon"
              width={104}
              height={160}
              className="m-auto pb-5"
            />

            <h3 className="font-bold font-bdogrotesk leading-[100%] text-[18px] md:text-xl text-[#FFFFFF] text-center pb-5">
              You have different questions?
            </h3>

            <p className="font-medium pb-5 text-center text-[#D9D9D9]">
              Our team will answer all your questions. We ensure a quick responses.
            </p>

            <Link
              href="/booking"
              className="px-[20.51px]! w-fit gap-x-2 py-[15.38px]! m-auto items-center h-[51.28px] font-poppins flex  md:text-[17.43px] bg-white text-[#1E1E1E] rounded-[40px] cursor-pointer"
            >
              <PiCalendarDotsBold className="w-[25px] h-[25px]" /> 
              Contact Support
            </Link>
          </div>
</FadeLeft>
          {/*  FAQ List With Stagger Animation */}
          <div className='pt-5 lg:pt-0'
           
          >
            {faqData.map((item, index) => (
              <FadeRight
              
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <FaqList question={item.question} answer={item.answer} />
             
              </FadeRight>
            ))}
          </div>

        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default Faq;
