process.env.NODE_ENV = 'production';
const server = require('linux-remote-server');
const client = require('linux-remote-client');
const config = require('./config');
config.client = client;

return server(config);