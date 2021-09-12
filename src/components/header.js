import * as React from "react";
import MenuButton from "./Menu/MenuButton";
import styled from "styled-components";

const Header = () => (
  <Navbar>
    <MenuButton />
  </Navbar>
);

export default Header;

const Navbar = styled.header`
  position: relative;
  background-color: transparent;
  z-index: 20;
`;
