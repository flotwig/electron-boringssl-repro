const fs = require('fs')
const https = require('https')

const server = https.createServer({
  cert: fs.readFileSync('./example.com+5.pem'),
  key: fs.readFileSync('./example.com+5-key.pem'),
}, (req, res) => {
  console.log('[server] Received request')
  res.end('it worked!')
})

server.listen(7777, () => {
  console.log('[server] Listening on 7777')
})
