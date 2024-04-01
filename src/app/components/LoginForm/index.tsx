import { ILogin } from 'types';
import { Controller, useForm } from 'react-hook-form';
import { Input as AntInput, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import * as yup from 'yup';
import i18next from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo } from 'react';

import Input from '../Input';
import ControllerItem from '../HOC/ControllerItem';

interface Props {
  onSubmit: (data: ILogin) => void;
}

const schema = yup.object().shape({
  username: yup
    .string()
    .nullable()
    .required(
      i18next.t(translations.common.fieldRequired, {
        field: i18next.t(translations.login.username),
      }),
    ),
  password: yup
    .string()
    .nullable()
    .required(
      i18next.t(translations.common.fieldRequired, {
        field: i18next.t(translations.login.password),
      }),
    ),
});

const LoginForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<ILogin>({
    defaultValues: { username: '', password: '' },
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-100%  text-center">
        <ControllerItem
          name="username"
          title={t(translations.login.username)}
          control={control}
          className="mb-4"
          render={({ field }) => (
            <Input
              {...field}
              placeholder={t(translations.login.usernamePlaceholder)}
            />
          )}
        />
        <ControllerItem
          name="password"
          title={t(translations.login.password)}
          control={control}
          className="mb-4"
          render={({ field }) => (
            <AntInput.Password
              {...field}
              placeholder={t('login.passwordPlaceholder')}
            />
          )}
        />
        <Button className="mt-5" type="primary" htmlType="submit">
          {t(translations.common.signIn)}
        </Button>
      </div>
    </form>
  );
};

export default memo(LoginForm);
