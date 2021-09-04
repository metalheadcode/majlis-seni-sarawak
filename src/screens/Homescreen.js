import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroLayoutOne from "../components/Sections/HeroLayoutOne";
import HeroLayoutTwo from "../components/Sections/HeroLayoutTwo";
import SectionTwo from "../components/Sections/SectionTwo";

const Homescreen = () => {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setScrollY(window.pageYOffset);
  return (
    <div>
      <WrapperGlobal>
        <HeroLayoutOne scrollY={scrollY} />
        <HeroLayoutTwo scrollY={scrollY} />
        <SectionTwo />
      </WrapperGlobal>
    </div>
  );
};

export default Homescreen;

const WrapperGlobal = styled.div`
  width: 100vw;
  overflow: hidden;
`;
