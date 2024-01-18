/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';

// * Components
import App from './App';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';
import { ReactNode } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Calculator = lazy(() => import('./pages/Calculator/Calculator'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));


// * Element
function Element({ component }: { component: ReactNode }) {
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
        ],
      },
      {
        path: '/online-calculator',
        element: <Element component={<Calculator />} />,
        children: [
        ],
      },
      {
        path: '/contacts',
        element: <Element component={<Contacts />} />,
        children: [
        ],
      },
    ],
  },
]);
