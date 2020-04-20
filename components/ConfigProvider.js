import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const ConfigContext = React.createContext(null);

export const CONFIG_QUERY = gql`
  query config {
    config @client {
      first
    }
  }
`;

export const ConfigProvider = ({ children }) => {
  const { data, loading } = useQuery(CONFIG_QUERY);

  console.log('loading', loading);
  // console.log('data', data);
  const config = data ? data.config : {};
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
