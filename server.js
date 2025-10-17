import http from 'http'


const PORT = 8000 

const server = http.createServer((req,res) => {

    const message = `<html><h1>The server is working</h1><html>`

    res.setHeader("Content-Type", "text/html")
    res.statusCode = 200
    res.writeHead
    res.end('./index.html')
})

server.listen(PORT,() => 
    console.log(`console running on the port ${PORT}`)
)