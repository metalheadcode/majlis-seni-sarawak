import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuItems>
        <h1>Sarawak Artist</h1>
      </MenuItems>
      <MenuItems>
        <h1>About MSS</h1>
      </MenuItems>
      <MenuItems>
        <h1>Contact</h1>
      </MenuItems>
      <MenuItems>
        <h1>Grant</h1>
      </MenuItems>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  width: 100vw;
  background-color: #d66a50;
  z-index: 100;
  display: grid;
  gap: 20px;
`;

const MenuItems = styled.div`
  padding: 20px;

  h1 {
    font-size: 60px;
    color: white;
    text-align: center;
  }

  &:hover {
    background-color: #ffbb54;
    transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);

    h1 {
      color: black;
    }
  }
`;
