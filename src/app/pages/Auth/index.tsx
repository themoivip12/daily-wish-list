import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import { path } from 'app/routes/path';
import LoginForm from 'app/components/LoginForm';
import { useCallback } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import { ILogin, TYPE_OF_WORK } from 'types';
import { useAppDispatch } from 'store/configureStore';

import AuthActionThunk from './slice/actions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = useCallback(
    (data: ILogin) => {
      dispatch(AuthActionThunk.login(data)).then(
        res => res.meta.requestStatus === 'fulfilled' && navigate(path.home),
      );
    },
    [dispatch, navigate],
  );

  return (
    <Layout>
      <Row
        className="w-screen h-screen"
        gutter={16}
        justify={'center'}
        align={'middle'}
      >
        <Col span={8} className="align-items-center mb-32">
          <Card className="text-align-center">
            <Typography.Title
              level={2}
              className="text-primary text-center"
              style={{ marginBottom: '24px' }}
            >
              Login
            </Typography.Title>
            <LoginForm onSubmit={handleSubmit} />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default Login;
