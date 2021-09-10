import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const PostHeader = ({ title, author, coverImage, date }) => {
  console.log(author);
  return (
    <HeaderWrapper>
      <BlogTitle>{title}</BlogTitle>
      <Author>
        <Img fixed={author.picture.fixed} />
        <h2>{author.name}</h2>
      </Author>
      <Img fluid={coverImage.fluid} />
    </HeaderWrapper>
  );
};

export default PostHeader;

const HeaderWrapper = styled.h1`
  max-width: 1240px;
  margin: 100px auto;
  padding: 0 20px;
`;

const Author = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
  margin-bottom: 40px;

  h2 {
    margin: 0;
  }
`;

const BlogTitle = styled.h1`
  font-size: 6rem;
`;
