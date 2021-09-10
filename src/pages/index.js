import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Homescreen from "../screens/Homescreen";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Homescreen data={data} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    batikOne: file(relativePath: { eq: "batik1.webp" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
    batikTwo: file(relativePath: { eq: "batik2.webp" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
    birdOne: file(relativePath: { eq: "bird1.webp" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
    birdTwo: file(relativePath: { eq: "bird2.webp" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
    birdThree: file(relativePath: { eq: "bird3.webp" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
    morePosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 4) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          small: fluid(
            imgixParams: { fm: "jpg" }
            sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px"
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        author {
          name
          picture {
            fixed(
              width: 48
              height: 48
              imgixParams: { fm: "jpg", fit: "crop", sat: -100 }
            ) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`;
