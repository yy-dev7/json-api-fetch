const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
})

app.get('/data', (req, res) => {
  res
    .status(200)
    .send(JSON.stringify({
      data: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ],
      meta: {
        'copyright': 'Copyright 2015 Example Corp.',
      },
      links: {
        self: 'http://example.com'
      },
    }))
})

app.get('/error', (req, res) => {
  res
    .status(403)
    .send(JSON.stringify({
      error: {
        status: 403,
        code: 10000,
        title: 'FORBIDDEN',
        detail: '该操作不允许'
      }
    }))
})

app.get('/empty', (req, res) => {
  res.status(204)
    .send()
})

const httpServer = require('http').createServer(app)

export default httpServer