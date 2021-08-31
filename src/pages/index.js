import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroLayoutOne from "../components/Heroes/HeroLayoutOne"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroLayoutOne />
  </Layout>
)

export default IndexPage
