/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';

// * Components
import App from './App';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home/Home'));
const Detail = lazy(() => import('./pages/About/pages/Detail/Detail'));
const Info = lazy(() => import('./pages/About/pages/Info/Info'));
const About = lazy(() => import('./pages/About/About'));

// * Element
function Element({ component }) {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
}

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Home />} />,
        children: [],
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
        children: [
          {
            path: 'detail',
            element: <Element component={<Detail />} />,
          },
          {
            path: 'info',
            element: <Element component={<Info />} />,
          },
        ],
      },
    ],
  },
]);
