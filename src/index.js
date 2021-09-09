'use strict'
const express = require('express')
const app = express()
const cors = require('cors')
const os = require('os-utils')
const { Socket } = require('socket.io')

var realTimeCpuUsage  = 0
var realTimeRamUsage = 0
var data

app.use(cors())
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(require('./routerMachine'))

const server = require('http').createServer(app)
const io = require('socket.io')(server);

const port = process.env.PORT || 3000

io.on('connection', () => { 
    console.log(data) 
    socket.emit("messages", data);
    socket.on("new-data",  () => {
        io.sockets.emit("data", data);
      });
});

setInterval(function setCPUAndRAMUsageRealTime() {
    os.cpuUsage(function(v){
        realTimeCpuUsage = v * 100
        realTimeRamUsage = os.freemem() / os.totalmem()
        data = (`{"cpuUsage":${realTimeCpuUsage} %,"ramUsage":${realTimeRamUsage} %}`)
    });
   }, 500);

server.listen(port, () => {
    console.log('Server runnin on http://localhost:'+port)
})