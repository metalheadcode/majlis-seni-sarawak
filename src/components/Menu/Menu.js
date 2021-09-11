import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { Link } from "gatsby";
import CSSPlugin from "gsap/CSSPlugin";

const Menu = ({ state }) => {
  const menuWrapper = useRef(null);
  console.log(state);

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
    if (state.clicked === false) {
      // close menu
      gsap.to(menuWrapper.current, {
        height: 0,
        duration: 1,
        ease: "Power3.easeIn",
      });
      gsap.to(menuWrapper.current, {
        delay: 1,
        css: { display: "none" },
      });
    } else if (
      // open menu
      state.initial === true ||
      (state.initial === null && state.clicked === true)
    ) {
      // set menu to display grid
      gsap.to(menuWrapper.current, {
        duration: 0,
        css: { display: "grid" },
      });
      // allow menu to have height of 100%
      gsap.to(menuWrapper.current, {});
    }
  }, [state]);

  return (
    <MenuWrapper ref={menuWrapper}>
      <MenuItems>
        <Link to={"/"}>Home</Link>
      </MenuItems>
      <MenuItems>
        <Link to={"/artist"}>Sarawak Artist</Link>
      </MenuItems>
      <MenuItems>
        <Link to={"/about"}>About MSS</Link>
      </MenuItems>
      <MenuItems>
        <Link to={"/contact"}>Contact</Link>
      </MenuItems>
      <MenuItems>
        <Link to={"/grant"}>Grant</Link>
      </MenuItems>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background-color: #d66a50;
  z-index: 100;
  display: none;
  overflow: hidden;
`;

const MenuItems = styled.div`
  padding: 60px 20px;
  text-align: center;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */

  a {
    font-size: 60px;
    font-weight: bold;
    color: white;
  }

  &:hover {
    cursor: pointer;
    background-color: #ffbb54;
    transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);

    a {
      color: black;
    }
  }
`;
