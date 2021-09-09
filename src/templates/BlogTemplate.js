import React from "react";
import Img from "gatsby-image";
import { StructuredText } from "react-datocms";
import styled from "styled-components";

const BlogTemplate = ({ data }) => {
  const { title } = data.datoCmsPost;
  const { content } = data.datoCmsPost;
  const { coverImage } = data.datoCmsPost;
  console.log("CoverImage", coverImage);
  return (
    <BlogWrapper>
      <Img fluid={coverImage.fluid} />
      <h1>{title}</h1>
      <div style={{ padding: "20px" }}>
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            console.log("record", record);
            if (record.__typename === "DatoCmsImageBlock") {
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Img
                  fluid={record.image.fluid}
                  style={{
                    display: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    padding: "20px",
                  }}
                />
                ;
              </div>;
            }

            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </BlogWrapper>
  );
};

export default BlogTemplate;

const BlogWrapper = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  a {
    color: tomato;
  }
`;
