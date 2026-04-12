import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Models from "@/components/Models";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
     <Navbar />
      <Hero />
      <WhyUs />
      <Models />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
