const featured = [
  'atom',
  'skype',
  'slack',
  'svgsus'
]

const apps = require('electron-apps')
  .map(app => {
    app.featured = featured.includes(app.slug)
    return app
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

module.exports = apps
