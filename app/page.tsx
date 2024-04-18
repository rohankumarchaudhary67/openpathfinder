import AboutSectionOne from "@/components/landing-page/About/AboutSectionOne";
import AboutSectionTwo from "@/components/landing-page/About/AboutSectionTwo";
import Blog from "@/components/landing-page/Blog";
import ScrollUp from "@/components/landing-page/Common/ScrollUp";
import Contact from "@/components/landing-page/Contact";
import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import Testimonials from "@/components/landing-page/Testimonials";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
