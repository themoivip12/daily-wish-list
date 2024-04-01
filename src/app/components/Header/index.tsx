import { Layout, Row, Col, Input, Tooltip, Badge, Breadcrumb } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { useNavigate } from 'react-router';
import { path } from 'app/routes/path';

import User from '../../../imgs/user.svg';
import Cash from '../../../imgs/cash.svg';

const { Search } = Input;

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function routerToMyPage() {
    navigate(path.myPage);
  }
  function routerPayment() {
    navigate(path.payment);
  }

  function routerMain() {
    navigate(path.home);
  }
  return (
    <Layout.Header className="z-1 h-60px flex align-items-center ">
      <Row className="text-white w-100%" align="middle">
        <Col flex={"180px"}>
        </Col>
        <Col flex={"500px"}>
          <Breadcrumb
            className='!all-text-gray'
            separator=""
            items={[
              {
                title: 'Location',
              },
              {
                type: 'separator',
                separator: ':',
              },
              {
                href: '',
                title: 'Application Center',
              },
              {
                type: 'separator',
              },
              {
                href: '',
                title: 'Application List',
              },
              {
                type: 'separator',
              },
              {
                title: 'An Application',
              },
            ]}
          />
        </Col>
        <Col span={6} className='flex-items-center flex'>
          <Search placeholder="input search text" allowClear />
        </Col>

        <Col className='ml-auto'>
          <div className="w-5rem flex align-items-center justify-between">
            <Tooltip title={t(translations.common.cash)}>
              <Badge count={100} size="small">
                <img
                  onClick={routerPayment}
                  className="cursor-pointer"
                  src={Cash}
                  alt="Cash"
                />
              </Badge>
            </Tooltip>
            <Tooltip title={t(translations.common.user)}>
              <img
                onClick={routerToMyPage}
                className="cursor-pointer"
                src={User}
                alt="User"
              />
            </Tooltip>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default memo(Header);
