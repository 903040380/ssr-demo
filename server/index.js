import express from 'express'
import { renderToString } from 'react-dom/server'
import { App } from '../client/App'

const server = express()

const content = renderToString(<App></App>)

server.use(express.static('dist')) // 开启静态资源服务

server.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>hello</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="./client.js"></script>
    </body>
  </html>
`)
})

server.listen(3007, () => {
  console.log('http://localhost:3007')
})
