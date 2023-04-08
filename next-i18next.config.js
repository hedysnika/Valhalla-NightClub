const path = require('path');

module.exports = {
    i18n: {
      locales: ['ge', 'en', 'ru'],
      defaultLocale: 'ge',
      localeDetection: false,
    },
    fallbackLng: { default: ['ge', 'en', 'ru' ]},
    defaultNs: 'shared',
    localePath: path.resolve('./public/locales'),
  };
  