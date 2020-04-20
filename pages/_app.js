import { withApollo } from '../lib/apollo';
import { PostsProvider, PostsContext } from '../components/PostsProvider';

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <PostsContext.Consumer>
        {(allPosts) => {
          console.log('Posts, _app', allPosts);
          return <Component posts={allPosts} {...pageProps} />;
        }}
      </PostsContext.Consumer>
    </PostsProvider>
  );
}

export default withApollo({ ssr: true })(MyApp);
