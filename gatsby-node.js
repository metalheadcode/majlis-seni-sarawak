const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query PostQuery {
      allDatoCmsPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  data.allDatoCmsPost.nodes.forEach(node => {
    actions.createPage({
      path: "/blogs/" + node.slug,
      component: path.resolve("./src/templates/BlogTemplate.js"),
      context: { id: node.id },
    });
  });
};
