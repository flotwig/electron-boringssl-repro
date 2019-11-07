const assert = require('assert')
const https = require('https')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

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
})
.end()
