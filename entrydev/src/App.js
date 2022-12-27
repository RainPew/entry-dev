import Navbar from './components/Navbar';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routers } from './routers';

function App() {
  const elemen = useRoutes(routers)
  return (
    <div>
      <Navbar/>
      {elemen}
    </div>
  );
}

export default App;
