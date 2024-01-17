// * Base
import { Outlet } from 'react-router';

// * Components
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
