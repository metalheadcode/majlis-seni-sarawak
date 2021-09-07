import React from "react";
import { graphql } from "gatsby";
import cn from classnames;
import Image from "gatsby-image";
import { StructuredText } from "react-datocms";
import styled from "styled-components";

const BlogTemplate = ({ data }) => {
  const { title } = data.datoCmsPost;
  const { content } = data.datoCmsPost;
  console.log(content);
  return (
    <BlogWrapper>
      <h1>{title}</h1>
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          console.log("Record", record);
          <Image
            fluid={{
              ...coverImage.small,
              alt: `${record}`,
            }}
            className={cn("shadow-small", {
              "hover:shadow-medium transition-shadow duration-200": slug,
            })}
          />;
        }}
      />
    </BlogWrapper>
  );
};

export default BlogTemplate;

export const query = graphql`
  query SinglePostQuery($id: String) {
    datoCmsPost(id: { eq: $id }) {
      content {
        value
        blocks {
          id: originalId
          image {
            fluid(imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;

const BlogWrapper = styled.div`
  max-width: 1240px;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  a {
    color: tomato;
  }
`;
