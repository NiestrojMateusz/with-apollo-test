import { withApollo } from '../lib/apollo';
import { PostsProvider, PostsContext } from '../components/PostsProvider';
import { ConfigProvider, ConfigContext } from '../components/ConfigProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <ConfigContext.Consumer>
        {(config) => {
          console.log('_app -> config', config);
          return (
            <PostsProvider config={config}>
              <PostsContext.Consumer>
                {(allPosts) => {
                  console.log('Posts, _app', allPosts);
                  return <Component posts={allPosts} {...pageProps} />;
                }}
              </PostsContext.Consumer>
            </PostsProvider>
          );
        }}
      </ConfigContext.Consumer>
    </ConfigProvider>
  );
}

export default withApollo({ ssr: true })(MyApp);
