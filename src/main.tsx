import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'uno.css';
import getStore from 'store/configureStore.ts';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'locales/i18n';
import { ConfigProvider } from 'antd';

const store = getStore();

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              colorBgHeader: '#083344',
              colorBgTrigger: '#f0fdfa',
              colorBgBody: '#514D9E'
            },
            Menu: {
              itemHeight: 60,
              fontSize: 20,
              fontSizeLG: 24,
              iconMarginInlineEnd: 16,
              itemBg:'#514D9E',
              itemColor: '#fff'
            },

          },
          // Seed Token
          token: {
            // Seed Token
            colorPrimary: '#164e63',

            // Alias Token
            colorBgElevated: '#514D9E',
          },
          // Alias Token

        }}
      >
        <App />
      </ConfigProvider>
    </Provider>,
  );
};

renderApp();
// const anyModule: any = module;

// if (anyModule?.hot) {
//   anyModule?.hot.accept(['./locales/i18n'], () => {
//     // No need to render the App again because i18next works with the hooks
//   });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
