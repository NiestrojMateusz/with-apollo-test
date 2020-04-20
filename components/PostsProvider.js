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
  first: 10,
};

export const PostsProvider = ({ children }) => {
  const { data, loading } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  console.log('loading', loading);
  // console.log('data', data);
  const allPosts = data ? data.allPosts : [];
  return (
    <PostsContext.Provider value={allPosts}>{children}</PostsContext.Provider>
  );
};
