import Img from "gatsby-image";
import React from "react";
import cn from "classnames";
import styled from "styled-components";
import { Link } from "gatsby";

const CardBlogs = ({ author, coverImage, title, excerpt, slug, date }) => {
  const usDate = new Date(date).toLocaleDateString("en-US");

  return (
    <Link to={`/posts/${slug}`} style={{ textDecoration: "none" }}>
      <BlogCard>
        <Img
          fluid={{
            ...coverImage.small,
            alt: `Cover Image for ${title}`,
          }}
          className={cn("shadow-small", {
            "hover:shadow-medium transition-shadow duration-200": slug,
          })}
        />
        <Title>{title}</Title>
        <AuthorAndDate>
          <p>{author.name}</p>
          <p>{usDate}</p>
        </AuthorAndDate>
        <p>{excerpt}</p>
      </BlogCard>
    </Link>
  );
};

export default CardBlogs;

const BlogCard = styled.div`
  color: black;
  padding: 20px;
  display: grid;
  gap: 15px;
  cursor: pointer;
  background-color: white;
  border: 3px solid black;
  box-shadow: 7px 10px 0px 2px #d66a50;
  -webkit-box-shadow: 7px 10px 0px 2px #d66a50;
  -moz-box-shadow: 7px 10px 0px 2px #d66a50;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 10px 12px 0px 2px #d66a50;
    -webkit-box-shadow: 10px 12px 0px 2px #d66a50;
    -moz-box-shadow: 10px 12px 0px 2px #d66a50;
  }
  &:active {
    transform: translate(2px, 2px);
    background-color: #ffbb54;
  }

  p {
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const AuthorAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
`;
