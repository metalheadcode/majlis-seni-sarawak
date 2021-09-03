import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Homescreen from "../screens/Homescreen"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Homescreen />
  </Layout>
)

export default IndexPage
