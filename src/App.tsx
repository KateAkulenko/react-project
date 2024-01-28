// * Base
import { Outlet } from 'react-router';

// * Components
import Header from './components/Header/Header';
import BlockRegistration from './components/BlockRegistration/BlockRegistration';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <BlockRegistration />
      <Outlet />
      <Footer />
      <script id="dsq-count-scr" src="//reactproject.disqus.com/count.js" async></script>
    </>
  );
}

export default App;
