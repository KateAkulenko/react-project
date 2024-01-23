// * Base
import { Outlet } from 'react-router';

// * Components
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <Outlet />
      <Footer />
      <script id="dsq-count-scr" src="//reactproject.disqus.com/count.js" async></script>
    </>
  );
}

export default App;
