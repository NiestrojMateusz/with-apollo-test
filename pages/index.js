import App from '../components/App';
import InfoBox from '../components/InfoBox';
import Header from '../components/Header';
import PostList from '../components/PostList';

const IndexPage = ({ posts }) => {
  console.log('IndexPage -> Posts', posts);
  return (
    <App>
      <Header />
      <InfoBox>
        ℹ️ This example shows how to fetch all initial apollo queries on the
        server. If you <a href="/">reload</a> this page you won't see a loader
        since Apollo fetched all needed data on the server. This prevents{' '}
        <a
          href="https://nextjs.org/blog/next-9#automatic-static-optimization"
          target="_blank"
          rel="noopener noreferrer"
        >
          automatic static optimization
        </a>{' '}
        in favour of full Server-Side-Rendering.
      </InfoBox>
      <PostList posts={posts} />
    </App>
  );
  c;
};

export default IndexPage;
