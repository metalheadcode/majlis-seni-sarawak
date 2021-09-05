import React from "react";
import styled from "styled-components";
import CardArtist from "../Cards/CardArtist";
import batikImage1 from "../../images/batik1.webp";

const dataArtist = [
  {
    id: 1,
    name: "Ahmad Hazim",
    title: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1516637897631-79d2d7f8a182?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  },
  {
    id: 2,
    name: "Ahmad Hazim",
    title: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1516637897631-79d2d7f8a182?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  },
  {
    id: 3,
    name: "Ahmad Hazim",
    title: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1516637897631-79d2d7f8a182?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  },
];

const SectionTwo = ({ scrollY }) => {
  return (
    <Section>
      <Wrapper>
        <Title>Featured Artist</Title>
        <CardWrapper>
          {dataArtist.map(item => (
            <CardArtist key={item.id} data={item} />
          ))}
        </CardWrapper>
      </Wrapper>

      <MovingBatik
        style={{
          right: `-${scrollY * 0.5}px`,
          backgroundImage: `url(${batikImage1})`,
        }}
      ></MovingBatik>
    </Section>
  );
};

export default SectionTwo;

const Section = styled.section`
  background: linear-gradient(162.1deg, #f5f2ec 4.56%, #dcdad4 101.2%);
  width: 100%;
  padding: 120px 20px;
  color: white;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  height: 100%;
  margin: auto;
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-size: 64px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const MovingBatik = styled.div`
  position: absolute;
  bottom: -35px;
  right: 0;
  height: 75px;
  width: 200%;
`;
