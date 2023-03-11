
const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = {
  
    
    "experimentalSessionAndOrigin": true ,
    "blockHosts": [ "https://5fed0c8d3282c6ebc4a8003d25dda9f4.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1 ", "https://926bd5153cc6950e4175491de00e3d27.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1"],
    "chromeWebSecurity" : true,
    "include": ["node_modules/cypress", "./cypress/**/*.js"],
    

    
    
  e2e: {
    

    setupNodeEvents(on, config) {
    
      on('task', {downloadFile})
      
      
      //implement node event listeners here
    },
  },
};
