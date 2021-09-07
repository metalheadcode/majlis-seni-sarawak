import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CardBlogs from "../Cards/CardBlogs";

import styled from "styled-components";

export const BlogPosts = () => {
  const data = useStaticQuery(query);
  const blogArr = data.allPosts.nodes;
  console.log(data);
  console.log(blogArr);

  return (
    <CardsWrapper>
      {blogArr.map((blog, index) => (
        <CardBlogs
          key={index}
          author={blog.author}
          coverImage={blog.coverImage}
          title={blog.title}
          excerpt={blog.excerpt}
          slug={blog.slug}
          date={blog.date}
        />
      ))}
    </CardsWrapper>
  );
};

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: fluid(
            imgixParams: { fm: "jpg" }
            sizes: "(max-width: 1500px) 100vw, 1500px"
          ) {
            ...GatsbyDatoCmsFluid
          }
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

const CardsWrapper = styled.div`
  margin: 200px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
