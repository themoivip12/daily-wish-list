import {
  Route,
  RouteObject,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from 'app/pages/Layout';
import Login from 'app/pages/Auth/Loadable';
import Dashboard from 'app/pages/Dashboard/Loadable';


import { path } from './path';
import { AccountList } from 'app/pages/Account/List/AccountList';



export default function Routes() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={path.login} element={<Login />} />
        <Route path="/" element={<Layout />} >
          <Route path={path.home} index element={<Dashboard />} />
          <Route path={path.account} index element={<AccountList />} />
        </Route>

        {/* ... etc. */}
      </Route>,
    ),
  );
}
