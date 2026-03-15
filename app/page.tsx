import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Team from "@/components/Team";
import JoinUs from "@/components/JoinUs";
import Legal from "@/components/Legal";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MatrixRain />
      <div className="scanlines" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        {/* Divider */}
        <div className="divider mx-8" />
        <About />
        <div className="divider mx-8" />
        <Services />
        <div className="divider mx-8" />
        <Achievements />
        <div className="divider mx-8" />
        <Team />
        <div className="divider mx-8" />
        <JoinUs />
        <div className="divider mx-8" />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
