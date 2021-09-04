import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { StaticImage } from "gatsby-plugin-image";
import batikImage1 from "../../images/batik1.webp";

const HeroLayoutOne = ({ scrollY }) => {
  const logo = useRef(null);
  const button = useRef(null);
  const bushLeft = useRef(null);
  const bushRight = useRef(null);
  const bigCircleLeft = useRef(null);
  const bigCircleRight = useRef(null);
  const bird1 = useRef(null);
  const bird2 = useRef(null);
  const bird3 = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);

  useEffect(() => {
    lineUp(logo.current, line1.current, line2.current, button.current);
    gsapTo(bird1.current, 500, 2);
    gsapTo(bird2.current, -300, 1.6);
    gsapTo(bird3.current, 140, 1.8);
    gsapTo(bushLeft.current, 350, 1);
    gsapTo(bushRight.current, -380, 1);
    gsapTo(bigCircleLeft.current, 400, 2);
    gsapTo(bigCircleRight.current, -400, 1.9);
  }, []);

  const gsapTo = (node1, xPosition, delay) => {
    gsap.to(node1, {
      x: xPosition,
      delay,
      duration: 1,
      ease: "Power3.easeOut",
    });
  };

  const lineUp = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      y: 120,
      ease: "Power3.easeOut",
      opacity: 0,
      delay: 0.7,
      stagger: {
        amount: 0.3,
      },
    });
  };

  return (
    <Section>
      <Wrapper>
        <BigCircleLeft ref={bigCircleLeft} />
        <BigCircleRight ref={bigCircleRight} />
        <BushLeft ref={bushLeft}>
          <StaticImage
            src="../../images/bushLeft.webp"
            alt="bird-0"
            width={432}
            height={493}
          />
        </BushLeft>
        <BushRight ref={bushRight}>
          <StaticImage
            src="../../images/bushRight.webp"
            alt="bird-0"
            width={380}
            height={520}
          />
        </BushRight>
        <Bird1 ref={bird1}>
          <StaticImage src="../../images/bird1.webp" alt="bird-1" width={100} />
        </Bird1>
        <Bird2 ref={bird2}>
          <StaticImage src="../../images/bird2.webp" alt="bird-2" width={100} />
        </Bird2>
        <Bird3 ref={bird3}>
          <StaticImage src="../../images/bird3.webp" alt="bird-3" width={100} />
        </Bird3>

        <MiddleContentGroup>
          <Logo ref={logo} />
          <MaskLine>
            <TitleLine ref={line1}>Majlis Seni Sarawak</TitleLine>
          </MaskLine>
          <MaskLine>
            <DescriptionLine ref={line2}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                cumque nam laboriosam explicabo reprehenderit voluptatum!
              </p>
            </DescriptionLine>
          </MaskLine>
          <LoginButton ref={button}>Login</LoginButton>
        </MiddleContentGroup>
        <MovingBatik1
          style={{
            left: `-${scrollY * 0.5}px`,
            backgroundImage: `url(${batikImage1})`,
          }}
        >
          {/* <StaticImage src="../../images/#_longBatik.png" alt="batik" /> */}
        </MovingBatik1>
        <MovingBatik2
          style={{
            right: `-${scrollY * 0.5}px`,
            backgroundImage: `url(${batikImage1})`,
          }}
        >
          {/* <StaticImage src="../../images/#_longBatik.png" alt="batik" /> */}
        </MovingBatik2>
      </Wrapper>
    </Section>
  );
};

export default HeroLayoutOne;

const Section = styled.section`
  background-color: linear-gradient(162.1deg, #f5f2ec 4.56%, #dcdad4 101.2%);
  max-width: 100vw;
  color: white;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 170px;
  padding-bottom: 170px;
  max-width: 1024px;
  height: 100%;
  margin: auto;
  z-index: -3;
`;

const MovingBatik1 = styled.div`
  position: absolute;
  bottom: -75px;
  left: 0;
  height: 75px;
  width: 200%;
`;
const MovingBatik2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 75px;
  width: 200%;
`;
const BigCircleLeft = styled.div`
  width: 630px;
  height: 630px;
  border-radius: 50%;
  background-color: #ffbb54;
  position: absolute;
  top: 100px;
  left: -700px;
`;
const BigCircleRight = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: #ffbb54;
  position: absolute;
  right: -700px;
`;

const BushLeft = styled.div`
  position: absolute;
  top: 300px;
  left: -432px;
  z-index: 5;
  background: transparent !important;
`;
const BushRight = styled.div`
  position: absolute;
  top: 300px;
  right: -380px;
  z-index: 5;
`;
const Bird1 = styled.div`
  position: absolute;
  top: 20px;
  left: -100px;
  z-index: 5;
`;
const Bird2 = styled.div`
  position: absolute;
  top: 190px;
  right: -100px;
  z-index: 5;
`;
const Bird3 = styled.div`
  position: absolute;
  top: 90px;
  left: -100px;
  z-index: 5;
`;
const MiddleContentGroup = styled.div`
  display: grid;
  gap: 50px;
  justify-items: center;
  margin: auto;
  max-width: 700px;
`;
const Logo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #fd5f5f;
`;
// Mask
const MaskLine = styled.div`
  overflow: hidden;
`;

const TitleLine = styled.div`
  font-size: 64px;
  text-align: center;
  color: #373737;

  @media (max-width: 610px) {
    font-size: 100px;
  }
  @media (max-width: 470px) {
    font-size: 60px;
  }
`;
const DescriptionLine = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  color: rgba(37, 37, 37, 0.7);

  @media (max-width: 610px) {
    font-size: 100px;
  }
  @media (max-width: 470px) {
    font-size: 60px;
  }
`;
const LoginButton = styled.button`
  width: 50%;
  padding: 20px 0;
  font-size: 16px;
  border: none;
`;
