import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MorePost from "../components/Posts/MorePost";
import HeroLayoutOne from "../components/Sections/HeroLayoutOne";
import HeroLayoutTwo from "../components/Sections/HeroLayoutTwo";
import SectionTwo from "../components/Sections/SectionTwo";

const Homescreen = ({ data }) => {
  const [scrollY, setScrollY] = useState();

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
        <HeroLayoutOne scrollY={scrollY} data={data} />
        <MorePost morePosts={data.morePosts} title="More Posts" />;
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
