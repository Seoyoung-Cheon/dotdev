import React from "react";
import { heroLinks } from "../../constants/data";
import { Link } from "react-router-dom";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <h1 className="slogan">
        AceDot Build Tools
        {/* 이스테이프 문자 참조 : https://taemssssss.tistory.com/23#google_vignette */}
        <span>&nbsp; for Developers</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe
        culpa commodi aliquid. Aut voluptatibus soluta corrupti doloribus
        voluptas suscipit dignissimos accusantium eius facilis voluptatem
        corporis cupiditate sed, harum magni!
      </p>
      <div className="sub-links ">
        {heroLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>

      <div className="video-wrapper">
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
        <video autoPlay loop muted>
          <source src={video2} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
