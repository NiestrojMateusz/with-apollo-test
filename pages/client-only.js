import App from '../components/App';
import InfoBox from '../components/InfoBox';
import Header from '../components/Header';
import PostList from '../components/PostList';
const ClientOnlyPage = (props) => (
  <App>
    <Header />
    <InfoBox>
      ℹ️ This example shows how to disable apollos query fetching on the server.
      If you <a href="/client-only">reload</a> this page, you will see a loader
      since Apollo didn't fetch any data on the server. This allows{' '}
      <a
        href="https://nextjs.org/blog/next-9#automatic-static-optimization"
        target="_blank"
        rel="noopener noreferrer"
      >
        automatic static optimization
      </a>
      .
    </InfoBox>
    <PostList />
  </App>
);

export default ClientOnlyPage;
