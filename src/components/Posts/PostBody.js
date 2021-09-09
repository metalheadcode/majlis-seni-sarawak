import React from "react";
import { StructuredText } from "react-datocms";
import Img from "gatsby-image";

const PostBody = ({ post }) => {
  return (
    <div style={{ width: "100%" }}>
      <StructuredText
        data={post.content}
        renderBlock={({ record }) => {
          console.log(record.image.fluid);
          if (record.__typename === "DatoCmsImageBlock") {
            return <Img fluid={record.image.fluid} />;
          }
        }}
      />
    </div>
  );
};

export default PostBody;
