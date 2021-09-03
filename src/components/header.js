import * as React from "react"
import MenuButton from "./Menu/MenuButton"
import styled from "styled-components"

const Header = () => (
  <Navbar>
    <MenuButton />
  </Navbar>
)

export default Header

const Navbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 20;
`
