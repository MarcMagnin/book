const express = require('express')
const next = require('next')
const multer  = require('multer')

var upload = multer({ dest: './uploads' });

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

    server.post('/upload', upload.any(), function(req, res) {
    if (req.files) {
        console.dir(req.files);
        return res.end('Thank you for the file');
    }
    res.end('Missing file');
    });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})