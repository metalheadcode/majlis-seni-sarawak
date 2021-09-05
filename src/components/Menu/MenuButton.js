import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Menu from "./Menu";

const MenuButton = () => {
  const menu = useRef(null);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    button: "Menu",
  });

  useEffect(() => {
    gsap.from(menu.current, {
      opacity: 0,
      duration: 0.7,
      ease: "Power3.easeIn",
    });
  }, []);

  const handleMenuClick = () => {
    if (state.initial === false) {
      setState({ initial: null, clicked: true, button: "Close" });
    } else if (state.clicked === true) {
      // dah pernah tekan, then terbukak
      setState({ initial: null, clicked: false, button: "Menu" });
    } else if (state.clicked === false) {
      // dah pernah tekan, tertutup
      setState({ initial: null, clicked: true, button: "Close" });
    }
  };

  console.log("Menu state", state);
  return (
    <>
      <MenuBtn ref={menu} onClick={handleMenuClick}>
        {state.button}
      </MenuBtn>
      <Menu state={state} />
    </>
  );
};

export default MenuButton;

const MenuBtn = styled.button`
  z-index: 101;
  padding: 20px 12px;
  border-radius: 50%;
  border: none;
  background-color: #fd5f5f;
  color: #fff;

  position: fixed;
  left: 30px;
  top: 30px;

  &:hover {
    background-color: #fd5f5f;
    cursor: pointer;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.2);
    transition: 4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
