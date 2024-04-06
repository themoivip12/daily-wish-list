import { path } from 'app/routes/path';
import i18next from 'i18next';

const menu = [
  {
    label: 'menu.dailyWishList',
    key: path.dailyWishList,
    icon: <i className='i-mah-wish-list h-30px w-30px ml-24px px-7' />,
  },
  {
    label: 'menu.schedule',
    key: path.schedule,
    icon: <i className='i-mah-schedule h-30px w-30px ml-24px px-7' />,
  },
];

export default menu;
