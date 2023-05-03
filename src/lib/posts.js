import graphqlRequest from "./graphqlRequest";

export async function getPostList({ after, no }) {
  const query = {
    query: `query getPostList {
      posts(where: {orderby: {field: DATE, order: DESC}}, after: "${after}", first:${no} ) {
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
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts;
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
          categories {
            nodes {
              id
            }
          }
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts.nodes[0];
}

export async function getAllCategories() {
  const query = {
    query: `query getAllCategories {
      categories {
        nodes {
          name
          id
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.categories.nodes;
}

export async function getCategorySlugs() {
  const query = {
    query: `query getCategorySlugs {
      categories {
        nodes {
          id
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.categories.nodes;
}

export async function getAllPostByCategories({ after, id, no }) {
  const query = {
    query: `query getAllPostByCategories {
      category(id: "${id}") {
        id
        posts(after: "${after}", first: ${no}) {
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
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.category.posts;
}

export async function searchPosts(searchQuery) {
  const query = {
    query: `query searchPosts {
  posts(
    first: 10
    where: {search: "${searchQuery}", orderby: {field: DATE, order: DESC}}
    after: "null"
  ) {
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
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}`,
  };

  if (searchQuery) {
    const resJson = await graphqlRequest(query);
    console.log(resJson.data.posts);
    return resJson.data.posts;
  }
}

export async function searchPostsByCategory({ searchQuery, slug }) {
  console.log(searchQuery, slug);
  const query = {
    query: `query searchPostsByCategory {
      category(id: "${slug}") {
        id
        posts(
          after: "null"
          first: 10
          where: {search: "${searchQuery}", orderby: {field: DATE, order: DESC}}
        ) {
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
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }`,
  };

  if (searchQuery) {
    const resJson = await graphqlRequest(query);
    console.log(resJson.data.posts);
    return resJson.data.category.posts;
  }
}
