import Routes from 'app/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={Routes()} />;
}

export default App;
