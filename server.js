import express from 'express'
import { renderToString } from 'react-dom/server'
import { Home } from './Home'

const server = express()

const content = renderToString(<Home></Home>)

server.get('*', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>hello</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>
`)
})

server.listen(3007, () => {
  console.log('http://localhost:3007')
})
