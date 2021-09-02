import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"

const MenuButton = () => {
  const menu = useRef(null)
  useEffect(() => {
    gsap.from(menu.current, {
      opacity: 0,
      duration: 0.7,
      ease: "Power3.easeIn",
    })
  }, [])

  const handleMenuClick = () => {
    //
  }
  return (
    <MenuBtn ref={menu} onClick={handleMenuClick}>
      Menu
    </MenuBtn>
  )
}

export default MenuButton

const MenuBtn = styled.button`
  z-index: 100;
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
`
