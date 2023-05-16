import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Header from "./Header";

function Home() {
  const [randomVideoSrc, setRandomVideoSrc] = useState("");
  const videos = {
    src_1: "images/vid-1.mp4",
    src_2: "images/vid-2.mp4",
    src_3: "images/vid-3.mp4",
    src_4: "images/vid-4.mp4",
    src_5: "images/vid20.mp4",
    src_6: "images/vid21.mp4",
    src_7: "images/vid22.mp4",
    src_8: "images/vid23.mp4",
    src_9: "images/vid24.mp4",
  };


  useEffect(() => {
    const videoBtns = document.querySelectorAll(".vid-btn");
    const handleVideoBtnClick = (event) => {
      document.querySelector(".controls ");

      const src = event.target.getAttribute("data-src");
      document.querySelector("#video-slider").src = src;
    };
    videoBtns.forEach((btn) => {
      btn.addEventListener("click", handleVideoBtnClick);
    });
    const randomVideoNumber = Math.floor(Math.random() * 9) + 1;
    setRandomVideoSrc(videos["src_" + randomVideoNumber]);
    return () => {
      videoBtns.forEach((btn) => {
        btn.removeEventListener("click", handleVideoBtnClick);
      });
    };
  }, [videos]);
  
  return (
    <>
        <Header/>
      <section className="home" id="home">
        <div className="content">
          <h3>Adventure is worthwhile</h3>
          <p>Discover new places with us. Adventure awaits.</p>
          <Link to="/Destinations" className="btn">
            Discover more
          </Link>
        </div>

        <div className="controls">
          {Object.values(videos).map((src, index) => (
            <span
              key={index}
              className={src === randomVideoSrc ? "vid-btn " : "vid-btn"}
              data-src={src}
            ></span>
          ))}
        </div>

        <div className="video-container">
          <video src={randomVideoSrc} id="video-slider" loop autoPlay muted></video>
        </div>
      </section>

      <Services />
    </>
  );
}

export default Home;