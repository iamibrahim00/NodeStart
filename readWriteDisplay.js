const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method
//   function showuser(){
//     const parentelem = document.querySelector('body')
//     const childelem = message

//     parentelem.appendChild(childelem)
//   }
    if(url ==='/'){
        fs.readFile('message.txt',{encoding: 'utf-8'},(err,data)=>{
            if(err){
                console.log(err)
            }

            console.log(data)

        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body>${data}</body>`)
        res.write(`<body><form action ="/message" method="POST"><input type = "text" name ="message"><button type = "submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end();
    })
    }
   else if(url ==='/message' && method === 'POST'){
        const body = []
        req.on("data", (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1]  
            fs.writeFileSync('message.txt',message,err =>{
                console.log(err)
            })
            res.statusCode = 302
            res.setHeader('Location','/')
            return res.end()
    })
    }
    else{
        res.write('<html>')
        res.write('<head><title>My FIrst Node</title></head>')
        res.write('<body>Hello NodeJS</body>')
        res.write('</html>')
        return res.end();
    }
    
})

server.listen(3000)