import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { Link } from "gatsby";

const Menu = ({ state }) => {
  const menuWrapper = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to(menuWrapper.current, {
        height: 0,
        duration: 1,
        ease: "Power3.easeIn",
      });
      gsap.to(menuWrapper.current, {
        duration: 1,
        css: {
          display: "none",
        },
      });
    } else if (state.initial === null && state.clicked === true) {
      gsap.to(menuWrapper.current, {
        duration: 0,
        css: {
          display: "grid",
        },
      });
      console.log("Animation 1");
      gsap.from(menuWrapper.current, {
        height: 0,
        duration: 1,
        ease: "Power3.easeOut",
      });
      console.log("Animation 2");
    }
  }, [state]);

  return (
    <MenuWrapper ref={menuWrapper}>
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
`;

const MenuItems = styled.div`
  padding: 30px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  a {
    font-size: 60px;
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
