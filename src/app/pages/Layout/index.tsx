import { Outlet } from 'react-router';
import { Layout } from 'antd';
import Sidebar from 'app/components/sidebar/sidebar';

function LayoutMain() {
  return (
    <Layout>
      <Sidebar />
      <Layout.Content className="layout-content ml-320px h-screen">
        <div className="p-2 h-100%">
          <div className="p-4 rd-6 bg-white h-full w-100%">
            <Outlet />
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default LayoutMain;
