const http = require('http')
const { someText } = require('./routes')

const route = require("./routes")

console.log(someText)
const server = http.createServer(route.handler,route.someText)
server.listen(3000)