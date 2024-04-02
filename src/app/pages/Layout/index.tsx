import { Outlet } from 'react-router';
import { Layout, Typography } from 'antd';
import Sidebar from 'app/components/sidebar/sidebar';

function LayoutMain() {
  return (
    <Layout>
      <Sidebar />
      <Layout.Content className="layout-content ml-320px h-screen">
        <div className="p-2 h-100%">
          <div className="p-4 rd-6 bg-white h-full w-100%">
            <Typography.Title level={1} className='!color-#514D9E px-3 font-800' >
              Daily Wish List
            </Typography.Title>
            <Outlet />
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default LayoutMain;
