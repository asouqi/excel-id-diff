/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// eslint-disable-next-line func-names
// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             frontmatter {
//               path
//               title
//             }
//             id
//           }
//         }
//       }
//     }
//   `)
//
//   // eslint-disable-next-line array-callback-return
//   return data.allMdx.edges.map((edge) => {
//     const { path, title } = edge.node.frontmatter
//     const { id } = edge.node
//     actions.createPage({
//       path,
//       component: require.resolve("./src/components/pages/Layout.tsx"),
//       context: { id, title },
//     })
//   })
// }
