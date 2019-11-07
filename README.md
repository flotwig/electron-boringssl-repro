electron-boringssl-repro
===

Trying to cleanly reproduce an SSL error present in Electron 5.x.

Currently does not error.

https://github.com/cypress-io/cypress/issues/5446#issuecomment-549786711

Run `node server.js` to start the test server.

Run `electron client.js` to test.

Check `gen-cert.sh` for the commands used to generate the sample cert.
