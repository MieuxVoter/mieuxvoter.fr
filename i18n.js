// i18n.js
const { join } = require('path')
const { readdirSync, lstatSync } = require('fs')
const i18next = require('i18next')
const Backend = require('i18next-fs-backend')
i18next
  .use(Backend)
  .init({
    // debug: true,
    initImmediate: false,
    fallbackLng: 'en',
    lng: 'en',
    preload: readdirSync(join(__dirname, '../locales')).filter((fileName) => {
      const joinedPath = join(join(__dirname, '../locales'), fileName)
      const isDirectory = lstatSync(joinedPath).isDirectory()
      return isDirectory
    }),
    ns: 'backend-app',
    defaultNS: 'backend-app',
    backend: {
      loadPath: join(__dirname, '../locales/{{lng}}/{{ns}}.json')
    }
  })