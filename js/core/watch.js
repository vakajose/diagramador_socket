'use strict'
const { SOCKET_URL } = require('../config/constants');
const io = require('socket.io-client');
const socket = io.connect(SOCKET_URL);
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};