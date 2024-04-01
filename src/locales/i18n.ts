import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// import en from './en/translation.json';
import { convertLanguageJsonToObject } from './translations';
import ko from 'locales/ko/translation.json';
import en from 'locales//en/translation.json';

export const translationsJson = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

convertLanguageJsonToObject(ko);

console.log(en);

export const i18n = i18next.use(initReactI18next).init({
  resources: translationsJson,
  fallbackLng: 'ko',
  lng: 'ko',
  debug:
    import.meta.env.NODE_ENV !== 'production' &&
    import.meta.env.NODE_ENV !== 'test',
  interpolation: {
    escapeValue: false,
  },
});
