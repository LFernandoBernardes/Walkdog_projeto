const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://walkdog.vercel.app/signup',
  },
  fixtures: true,
  video: false,
})