import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { StaticImage } from "gatsby-plugin-image"

const HeroLayoutOne = () => {
  const item1 = React.useRef(null)
  const item2 = React.useRef(null)
  const item3 = React.useRef(null)
  const item4 = React.useRef(null)
  const item5 = React.useRef(null)
  const item6 = React.useRef(null)
  const item7 = React.useRef(null)
  const item8 = React.useRef(null)
  const line1 = React.useRef(null)
  const line2 = React.useRef(null)
  const line3 = React.useRef(null)

  useEffect(() => {
    itemOne(item1.current, 10)
    multipleItemInFromRight(
      item5.current,
      item6.current,
      item7.current,
      item8.current
    )
    lineUp(line1.current, line2.current, line3.current)
  }, [])

  const itemOne = (node1, rightPosition) => {
    gsap.to(node1, {
      x: rightPosition,

      duration: 0.8,
      ease: "Power3.easeOut",
    })
  }
  const multipleItemInFromRight = (node1, node2, node3, node4) => {
    gsap.to([node1, node2, node3, node4], {
      x: -400,
      duration: 0.8,
      ease: "Power3.easeOut",
      stagger: {
        amount: 1,
      },
    })
  }

  const lineUp = (line1, line2, line3) => {
    gsap.from([line1, line2, line3], {
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
      <Wrapper>
        <Item1 ref={item1}>
          <StaticImage
            src="../../images/BUSH_LEFT.png"
            alt="bush-left"
            width={500}
            height={522.4}
          />
        </Item1>
        <Item2 ref={item2} />
        <Item3 ref={item3} />
        <Item4 ref={item4} />
        <MiddleContentGroup>
          <Logo />
          <MaskLine>
            <TitleLine ref={line1}>MAJLIS</TitleLine>
          </MaskLine>
          <MaskLine>
            <TitleLine ref={line2}>SENI</TitleLine>
          </MaskLine>
          <MaskLine>
            <TitleLine ref={line3}>SARAWAK</TitleLine>
          </MaskLine>
        </MiddleContentGroup>
        <Item5 ref={item5} />
        <Item6 ref={item6} />
        <Item7 ref={item7} />
        <Item8 ref={item8} />
      </Wrapper>
    </Section>
  )
}

export default HeroLayoutOne

const Section = styled.section`
  background: radial-gradient(50% 50% at 50% 50%, #eeeeee 0%, #d3d3d3 100%);
  width: 100%;
  height: 100vh;
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
  max-width: 1024px;
  height: 100%;
  margin: auto;
`

const Item1 = styled.div`
  position: absolute;
  left: 0;
  top: 30%;
`
const Item2 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: green;

  left: -90px;
  top: 100px;
`
const Item3 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: yellow;

  left: -90px;
  top: 200px;
`
const Item4 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;

  left: -90px;
  bottom: 0;
`
const Item5 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: purple;
  z-index: 10;
  right: -100px;
  top: 0;
`
const Item6 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;

  left: -90px;
  bottom: 0;
`
const Item7 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;

  left: -90px;
  bottom: 0;
`
const Item8 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;

  left: -90px;
  bottom: 0;
`
const MiddleContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #fd5f5f;
  margin-bottom: 10vh;
`
// Mask
const MaskLine = styled.div`
  overflow: hidden;
`

const TitleLine = styled.div`
  font-size: 120px;
  text-align: center;
  color: #ffbb04;

  @media (max-width: 610px) {
    font-size: 100px;
  }
  @media (max-width: 470px) {
    font-size: 60px;
  }
`
