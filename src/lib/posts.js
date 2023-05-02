import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `query getPageSlug {
        posts {
          nodes {
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            excerpt
          }
        }
      }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts.nodes;
}