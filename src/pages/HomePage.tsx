import "../App.css";
import AboutTile from "../components/AboutTile";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Tile2 from "../components/Tile2";
import Tile3 from "../components/Tile3";
import waveImage from "../images/image2.jpg";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full bg-black relative pl-3 pr-3 pt-45"
    >
      <AppBar />

      <section
        id="hero"
        className="w-full h-[60vh] flex flex-col justify-center px-10 pt-10"
        data-scroll-section
      >
        <h1 className="text-white font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight font-medium whitespace-nowrap">
          WE MADE OCEANS
        </h1>

        <h1 className="text-white font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight font-medium whitespace-nowrap">
          SPEAK OUR LANGUAGE
        </h1>

        <div className="text-white/80 pt-5 text-lg font-semibold">
          <h2>Explore vast and complex ocean data with the power of AI,</h2>
          <h2>
            transforming raw measurements into clear insights for research and
            sustainability
          </h2>
        </div>
      </section>

      <section
        id="image"
        className="w-full h-screen relative"
        data-scroll-section
      >
        <img
          src={waveImage}
          alt="Waves"
          className="w-full h-full object-cover"
        />
      </section>

      <section id="about" data-scroll-section>
        <div data-scroll data-scroll-class="fade-up">
          <AboutTile />
        </div>
      </section>

      <div>
        <Tile2 />
      </div>

      <section id="tile3" data-scroll-section>
        <div data-scroll data-scroll-class="fade-up">
          <Tile3 />
        </div>
      </section>

      <section id="footer" data-scroll-section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
