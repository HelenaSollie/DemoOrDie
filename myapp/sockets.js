'use strict';

//Created server and Primus instance

var Primus = require('primus')
    , server = require('http').createServer()
    , primus = new Primus(server, { transformer: 'websockets' });


//Added plug-in
primus.plugin('emit', require('primus-emit'));