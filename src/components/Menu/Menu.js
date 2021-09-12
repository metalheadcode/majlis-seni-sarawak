import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { Link } from "gatsby";

const Menu = ({ state }) => {
  const menuWrapper = useRef(null);
  console.log(state);

  useEffect(() => {
    if (state.clicked === true)
      gsap.to(menuWrapper.current, {
        ease: "Power3.easeOut",
        yPercent: 100,
      });
    else if (state.clicked === false) {
      gsap.to(menuWrapper.current, {
        ease: "Power3.easeOut",
        yPercent: 0,
      });
    }
  }, [state]);

  return (
    <MenuWrapper ref={menuWrapper}>
      <MenuItems>
        <Link to={"/"}>Home</Link>
      </MenuItems>
      <MenuItems>
        <Link to={"/about"}>About MSS</Link>
      </MenuItems>
      <MenuItems>
        <Link to={"/contact"}>Contact</Link>
      </MenuItems>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: -483.33px;
  background-color: #d66a50;
  z-index: 100;
  display: grid;
`;

const MenuItems = styled.div`
  padding: 60px 20px;

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
      text-decoration: none;
    }
  }
`;
