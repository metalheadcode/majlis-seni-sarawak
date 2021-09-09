import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BlogPosts } from "../components/Sections/BlogPosts";
import HeroLayoutOne from "../components/Sections/HeroLayoutOne";
import HeroLayoutTwo from "../components/Sections/HeroLayoutTwo";
import SectionTwo from "../components/Sections/SectionTwo";

const Homescreen = ({ batikOne }) => {
  const [scrollY, setScrollY] = useState();
  console.log("Homescreen", batikOne);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  return (
    <div>
      <WrapperGlobal>
        <HeroLayoutOne scrollY={scrollY} batikOne={batikOne} />
        <BlogPosts />
        <SectionTwo scrollY={scrollY} />
        <HeroLayoutTwo scrollY={scrollY} />
      </WrapperGlobal>
    </div>
  );
};

export default Homescreen;

const WrapperGlobal = styled.div`
  width: 100vw;
  overflow: hidden;
`;
