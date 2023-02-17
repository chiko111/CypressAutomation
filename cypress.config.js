const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'aa3ob1',
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },
})
