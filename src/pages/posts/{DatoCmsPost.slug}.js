import { graphql } from "gatsby";
import React from "react";
import MorePost from "../../components/Posts/MorePost";
import PostBody from "../../components/Posts/PostBody";
import Site from "../../components/Posts/Site";
import styled from "styled-components";

export default function Post({ data: { site, post, morePosts } }) {
  console.log("Site", site);
  console.log("Post", post);
  console.log("MorePosts", morePosts);
  return (
    <PostPage>
      <Site site={site} />
      <PostBody post={post} />
      <MorePost morePosts={morePosts} />
    </PostPage>
  );
}

export const query = graphql`
  query PostBySlug($id: String) {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          ... on DatoCmsImageBlock {
            id: originalId
            image {
              fluid(
                imgixParams: { fm: "jpg" }
                sizes: "(max-width: 700) 100vw, 700px"
              ) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
      date
      coverImage {
        fluid(
          imgixParams: { fm: "jpg" }
          sizes: "(max-width: 1500px) 100vw, 1500px"
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
    morePosts: allDatoCmsPost(
      sort: { fields: date, order: DESC }
      limit: 2
      filter: { id: { ne: $id } }
    ) {
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

const PostPage = styled.div`
  // Main
  padding-left: 20px;
  padding-right: 20px;

  p {
    font-size: 16px;
    font-family: san-serif;
  }

  /* ul & ol  */
  ol ol,
  ul ul,
  ul ol,
  ol ul {
    margin: 0.5em 0 1em;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  ul,
  ol {
    max-width: 100%;
  }
`;
