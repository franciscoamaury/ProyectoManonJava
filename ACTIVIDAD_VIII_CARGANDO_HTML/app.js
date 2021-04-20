const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
  })

  app.get('/contacto.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'contacto.html'))
  })

app.get('/info.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'info.html'))
})

app.listen(port, () => {
    console.log(` Example app listening at http://localhost:${port} `)
})