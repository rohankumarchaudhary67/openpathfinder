import AboutSection from "@/components/landing-page/About/aboutSection";
import Blog from "@/components/landing-page/Blog";
import Contact from "@/components/landing-page/Contact";
import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import Testimonials from "@/components/landing-page/Testimonial";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <AboutSection />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
