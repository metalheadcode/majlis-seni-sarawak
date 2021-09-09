import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Homescreen from "../screens/Homescreen";
import { graphql } from "gatsby";

const IndexPage = ({ data: { batikOne } }) => (
  <Layout>
    <Seo title="Home" />
    <Homescreen batikOne={batikOne} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    batikOne: file(relativePath: { eq: "batik1.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
