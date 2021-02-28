// SERVIDOR
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')

// Configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
// Início e configuração do servidor
// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
// Rotas
.get("/", pageLanding)
.get ("/study", pageStudy)
.get ("/give-classes", pageGiveClasses)
.listen(5500)