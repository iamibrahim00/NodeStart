const http = require('http')

const server = http.createServer((req,res)=>{
 
    console.log(req.url)
    if(req.url == '/home'){
        res.write('<html>')
    res.write('<head><title>My First Request Page</title></head>')
    res.write('<Body>Welcome Home</body>')
    res.write('</html>')
    }
    else if(req.url == '/about'){
        res.write('<html>')
    res.write('<head><title>My First Request Page</title></head>')
    res.write('<Body>Welcome About Us</body>')
    res.write('</html>')
    }
    else{
        res.write('<html>')
    res.write('<head><title>My First Request Page</title></head>')
    res.write('<Body>Welcome to My Node project</body>')
    res.write('</html>')
    }
    res.end()

})

server.listen(4000)