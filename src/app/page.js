import About from "@/component/About";
import BuildBanner from "@/component/BuildBanner";
import CTA from "@/component/CTA";
import Feedback from "@/component/Feedback";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import HonorsAwards from "@/component/HonorsAwards";
import Project from "@/component/Projects";
import Publication from "@/component/Publication";
import SocialMediaCards from "@/component/SocialMediaCards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="about" className="scroll-mt-8">
        <About />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Project />
      </div>
      <HonorsAwards />
      <div id="feedback">
        <Feedback />
      </div>
      <Publication />
      <SocialMediaCards />
      <BuildBanner
        topText="Turn your idea into reality"
        mainText="Ready to build something great?"
        buttonText="Get Started"
        // onClick={() => router.push(`/portfolio`)}
        delay={0.2}
      />
      {/* <Footer /> */}
    </div>
  );
}
