// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     query PostQuery {
//       allDatoCmsPost {
//         nodes {
//           id
//           slug
//         }
//       }
//       datoCmsPost(id: { eq: $id }) {
//         content {
//           value
//           blocks {
//             id: originalId
//             __typename
//             ... on DatoCmsImageBlock {
//               image {
//                 fluid {
//                   ...GatsbyDatoCmsFluid
//                 }
//               }
//             }
//             children {
//               ... on DatoCmsImageBlock {
//                 id
//                 image {
//                   fluid {
//                     ...GatsbyDatoCmsFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//         coverImage {
//           fluid {
//             ...GatsbyDatoCmsFluid
//           }
//         }
//       }
//     }
//   `);

//   data.allDatoCmsPost.nodes.forEach(node => {
//     actions.createPage({
//       path: "/blogs/" + node.slug,
//       component: path.resolve("./src/templates/BlogTemplate.js"),
//       context: { id: node.id },
//     });
//   });
// };

// export const query = graphql`
//   query SinglePostQuery($id: String) {

//   }
// `;
