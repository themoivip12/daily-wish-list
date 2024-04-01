import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Menu, MenuProps, } from 'antd';
import Logo from '../../../imgs/logo.svg';
import menu from './sidebar.config';
import { path } from 'app/routes/path';
import { useTranslation } from 'react-i18next';

export interface SidebarProps {
  sidebar: boolean;
  handleToggleSidebar?: () => void;
}

const Sidebar = () => {
  const { t } = useTranslation()

  const menuItems = useMemo(() => menu.map(item => ({ ...item, label: t(item.label) })), [t])
  const [current, setCurrent] = useState('1');

  const navigate = useNavigate();
  const onClickMenu: MenuProps['onClick'] = e => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div
      style={{ height: '100vh', width: '320px', position: 'fixed' }}
    >
      <div
        onClick={() => {
          navigate(path.home);
          setCurrent('1');
        }}
        className="logo-sidebar h-160px flex flex-items-center flex-justify-between text-center"
      >
        <img
          className="cursor-pointer w-100% px-4 py-2 max-w-7rem mx-auto block pt-10"
          src={Logo}
          alt="logo"
        />


      </div>
      <Menu
        onClick={onClickMenu}

        selectedKeys={[current]}
        mode="vertical"
        className="menu-sidebar mt-8 font-500"
        items={menuItems}
        expandIcon={() => <></>}
      />


    </div>
  );
};

export default Sidebar;
