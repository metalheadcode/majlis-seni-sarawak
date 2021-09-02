import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { StaticImage } from "gatsby-plugin-image"
import MenuButton from "../Menu/MenuButton"

const HeroLayoutOne = () => {
  const logo = useRef(null)
  const button = useRef(null)
  const bird1 = useRef(null)
  const bird2 = useRef(null)
  const bird3 = useRef(null)
  const item1 = useRef(null)
  const item2 = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const [scrollY, setScrollY] = useState()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    lineUp(logo.current, line1.current, line2.current, button.current)
    gsapTo(item1.current, 780, 1)
    gsapTo(item2.current, -780, 1.1)
    gsapTo(bird1.current, 500, 1.4)
    gsapTo(bird2.current, -200, 1.6)
    gsapTo(bird3.current, 140, 1.8)
    gsapTo(bird1.current, 0)
    gsapTo(bird2.current, 0)
    gsapTo(bird3.current, 0)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  console.log("Scroll Y Value:", scrollY)

  const handleScroll = () => setScrollY(window.pageYOffset)

  const gsapTo = (node1, xPosition, delay) => {
    gsap.to(node1, {
      x: xPosition,
      delay,
      duration: 1,
      ease: "Power3.easeOut",
    })
  }

  const lineUp = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      y: 120,
      ease: "Power3.easeOut",
      opacity: 0,
      delay: 0.7,
      stagger: {
        amount: 0.3,
      },
    })
  }

  return (
    <Section>
      <MenuButton />
      <Wrapper>
        <Item1 ref={item1}>
          <StaticImage
            src="../../images/leftArt2.webp"
            alt="bush-left"
            height={700}
          />
        </Item1>
        <Item2 ref={item2}>
          <StaticImage
            src="../../images/rightArt1.webp"
            alt="bush-left"
            height={700}
          />
        </Item2>
        <Bird1 ref={bird1}>
          <StaticImage
            src="../../images/bird1.webp"
            alt="bush-left"
            width={100}
          />
        </Bird1>
        <Bird2 ref={bird2}>
          <StaticImage
            src="../../images/bird2.webp"
            alt="bush-left"
            width={100}
          />
        </Bird2>
        <Bird3 ref={bird3}>
          <StaticImage
            src="../../images/bird3.webp"
            alt="bush-left"
            width={100}
          />
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
      </Wrapper>
    </Section>
  )
}

export default HeroLayoutOne

const Section = styled.section`
  background: linear-gradient(162.1deg, #f5f2ec 4.56%, #dcdad4 101.2%);
  max-width: 100vw;
  color: white;
  position: relative;
  overflow: hidden;
`
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
`

const Item1 = styled.div`
  position: absolute;
  left: -1000px;
`
const Item2 = styled.div`
  position: absolute;
  right: -1000px;
`
const Bird1 = styled.div`
  position: absolute;
  top: 20px;
  left: -100px;
  z-index: 5;
`
const Bird2 = styled.div`
  position: absolute;
  top: 500px;
  right: -100px;
  z-index: 5;
`
const Bird3 = styled.div`
  position: absolute;
  top: 90px;
  left: -100px;
  z-index: 5;
`
const MiddleContentGroup = styled.div`
  display: grid;
  gap: 30px;
  justify-items: center;
  margin: auto;
  max-width: 700px;
`
const Logo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #fd5f5f;
`
// Mask
const MaskLine = styled.div`
  overflow: hidden;
`

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
`
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
`
const LoginButton = styled.button`
  width: 50%;
  padding: 20px 0;
  font-size: 16px;
  border: none;
`
