import { path } from 'app/routes/path';
import i18next from 'i18next';

const menu = [
  {
    label: 'menu.dailyWishList',
    key: path.dailyWishList,
    icon: <i className='i-mah-wish-list h-32px w-32px' />,
  },
  {
    label: 'menu.schedule',
    key: path.schedule,
    icon: <i className='i-mah-schedule h-32px w-32px' />,
  },
];

export default menu;
