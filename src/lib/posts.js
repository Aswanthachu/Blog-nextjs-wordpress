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
export async function getPostSlugs() {
  const query = {
    query: `query getPostSlug {
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
export async function getSinglePost(slug) {
  const query = {
    query: `query getSinglePost {
      posts(where: {name: "${slug}"}) {
        nodes {
          slug
          title
          content(format: RENDERED)
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts.nodes[0];
}

export async function getAllCategories(slug) {
  const query = {
    query: `query getAllCategories {
      categories {
        nodes {
          slug
          name
          id
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.categories.nodes;
}

export async function getAllPostByCategories(id) {
  const query = {
    query: `query getAllPostByCategories {
      category(id: "${id}") {
        id
        posts {
          nodes {
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            excerpt(format: RENDERED)
            title
          }
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.category.posts.nodes;
}
