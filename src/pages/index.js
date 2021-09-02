import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroLayoutOne from "../components/Sections/HeroLayoutOne"
import SectionTwo from "../components/Sections/SectionTwo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroLayoutOne />
    <SectionTwo />
  </Layout>
)

export default IndexPage
