const assert = require('assert')
const fs = require('fs')
const https = require('https')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const server = https.createServer({
  cert: fs.readFileSync('./example.com+5.pem'),
  key: fs.readFileSync('./example.com+5-key.pem'),
}, (req, res) => {
  console.log('[server] Received request')
  res.end('it worked!')
})

server.listen(7777, () => {
  console.log('[server] Listening on 7777')

  https.request('https://localhost:7777', (res) => {
    res.on('data', (chunk) => {
      assert.strictEqual(chunk.toString(), 'it worked!')
      console.log('Successfully retrieved SSL content')
    })

    res.on('end', () => {
      console.log('Response finished, ending')
      process.exit(0)
    })
  })
  .on('error', (err) => {
    console.error('Error received:')
    console.error(err)
    server.close()
  })
  .end()
})
