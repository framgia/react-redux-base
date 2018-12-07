const { createServer } = require('http')
const express = require('express')
const next = require('next')
const routes = require('./routes')
const port = parseInt(process.env.MIX_APP_URL, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)
const server = express()
const cookieParser = require('cookie-parser');
const { nextI18NextMiddleware } = require('./i18n')

app.prepare()
  .then(() => {
    server.use(handler)
    server.use(cookieParser());
    nextI18NextMiddleware(app, server)

    server.get('/auth/signin', (req, res) => {
        if (req.cookies.token) {
            res.redirect('/');
        } else {
            return app.render(req, res, '/auth/signin', req.query);
        }
    });

    server.get('/auth/signup', (req, res) => {
        if (req.cookies.token) {
            res.redirect('/');
        } else {
            return app.render(req, res, '/auth/signup', req.query);
        }
    });

    server.get('*', (req, res) => {
       return handle(req, res)
    })

    createServer(handler)
        .listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
  })
