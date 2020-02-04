const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  fallbackLng: 'es',
  lng: 'es',
  allLanguages: ['es', 'en'],
  defaultLanguage: 'es',
  otherLanguages: ['en'],
  defaultNS: 'home',
  initImmediate: true,
  preload: ['es', 'en'],
  localePath: 'static/locales',
  localeSubpaths: {
    es: 'es',
    en: 'en'
  },
});