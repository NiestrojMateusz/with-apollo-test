import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const PostsContext = React.createContext(null);

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;
export const allPostsQueryVars = {
  skip: 0,
};

export const PostsProvider = ({ children, config }) => {
  const { data, loading } = useQuery(ALL_POSTS_QUERY, {
    variables: { ...allPostsQueryVars, first: config.first },
  });

  const allPosts = data ? data.allPosts : [];
  return (
    <PostsContext.Provider value={allPosts}>{children}</PostsContext.Provider>
  );
};
