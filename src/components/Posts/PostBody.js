import React from "react";
import { StructuredText } from "react-datocms";
import Img from "gatsby-image";
import styled from "styled-components";

const PostBody = ({ post }) => {
  return (
    <Wrapper>
      <DateFormat>{new Date(post.date).toDateString()}</DateFormat>
      <StructuredText
        data={post.content}
        renderBlock={({ record }) => {
          console.log(record.image.fluid);
          if (record.__typename === "DatoCmsImageBlock") {
            return <Img fluid={record.image.fluid} />;
          }
        }}
      />
    </Wrapper>
  );
};

export default PostBody;

const Wrapper = styled.div`
  margin: auto;
  max-width: 720px;
  padding-left: 20px;
  padding-right: 20px;
`;

const DateFormat = styled.p`
  font-weight: 700;
`;
