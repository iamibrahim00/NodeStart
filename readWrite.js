const http = require('http')
const fs = require('fs')
const { create } = require('domain')


const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method
  
    if(url ==='/'){
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action ="/message" method="POST"><input type = "text" name ="message"><button type = "submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url ==='/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1]  
            fs.writeFileSync('message.txt',message)
            
        })
        
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
    }
        res.write('<html>')
        res.write('<head><title>My FIrst Node</title></head>')
        res.write('<body>Hello NodeJS</body>')
        res.write('</html>')
        return res.end();
})

server.listen(3000)