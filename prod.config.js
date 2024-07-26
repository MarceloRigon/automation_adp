const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config');

const e2e = {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    
    env: {
        username:'Admin',
        password:'admin123'
    } 
    
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})
