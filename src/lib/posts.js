import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `query getAllPosts {
            posts {
              nodes {
                slug
              }
            }
          }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts.nodes;
}