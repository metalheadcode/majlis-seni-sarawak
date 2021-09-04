import React from "react";
import styled from "styled-components";

const SectionTwo = () => {
  return (
    <Section>
      <Wrapper>This is second section</Wrapper>
    </Section>
  );
};

export default SectionTwo;
const Section = styled.section`
  background: linear-gradient(162.1deg, #f5f2ec 4.56%, #dcdad4 101.2%);
  width: 100%;
  height: 600px;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1024px;
  height: 100%;
  margin: auto;
`;
