"use client"
import { useEffect } from "react";
import Hero from "@/components/hero/Hero";
import AOS from "aos";
import AboutMe from "@/components/aboutMe/AboutMe";
import Services from "@/components/services/Services";
import Skils from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import BestPricing from "@/components/bestPricing/BestPricing";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, [])
  return (
      <div className="bg-black overflow-hidden">
        <Hero/>
        <AboutMe/>
        <Services/>
        <Skils/>
        <BestPricing/>
        <Contact/>
      </div>
  );
}
