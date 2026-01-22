import { Banner } from "@/components/HomeSection/Banner.jsx";
import Blogs from "@/components/HomeSection/Blogs.jsx";
import Contact from "@/components/HomeSection/Contact.jsx";
import Faq from "@/components/HomeSection/Faq.jsx";
import Projects from "@/components/HomeSection/Projects.jsx";
import Service from "@/components/HomeSection/Service.jsx";
import Tstimonials from "@/components/HomeSection/Tstimonials.jsx";
import WhyChoseUs from "@/components/HomeSection/WhyChoseUs.jsx";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop.jsx";

export default function Home() {
  return (
    <>
    <ScrollToTop/>
      <section id="home">
        <Banner />
      </section>

      <section id="services">
        <Service />
      </section>

      <section >
        <WhyChoseUs />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="testimonials">
        <Tstimonials />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="about">
        <Faq />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
    </>
  );
}
