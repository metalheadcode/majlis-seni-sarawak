import React from "react";
import styled from "styled-components";
import CardBlogs from "../Cards/CardBlogs";

const MorePost = ({ title, morePosts }) => {
  return (
    <CardsWrapper>
      <h1>{title}</h1>
      <GridWrapper>
        {morePosts.nodes.length > 1 &&
          morePosts.nodes.map((blog, index) => (
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
      </GridWrapper>
    </CardsWrapper>
  );
};

export default MorePost;

const CardsWrapper = styled.div`
  max-width: 1240px;
  margin: auto;
  padding: 100px 20px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

// margin: 100px auto;
// padding: 0 20px;
