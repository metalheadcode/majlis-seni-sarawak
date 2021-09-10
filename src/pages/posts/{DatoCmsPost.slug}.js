import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import PostBody from "../../components/Posts/PostBody";
import PostHeader from "../../components/Posts/PostHeader";
import MorePost from "../../components/Posts/MorePost";

export default function Post({ data: { post, morePosts } }) {
  return (
    <Layout>
      <PostHeader
        title={post.title}
        author={post.author}
        coverImage={post.coverImage}
        date={post.date}
      />
      <PostBody post={post} />
      <MorePost morePosts={morePosts} title="More Posts" />
    </Layout>
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
