const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Ibrahim',req)
})

server.listen(4000)