/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */

const linguiNextConfig = require('./src/lingui-next/config')
const { loadConfig } = require('./src/next-config')
require('dotenv').config()

const locales = loadConfig(process.cwd()).storefront.map(({ locale }) => locale)

module.exports = linguiNextConfig({ locales })
