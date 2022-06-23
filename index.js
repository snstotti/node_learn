const express = require('express')
const ExpressHandlebars = require('express-handlebars').engine

const randonFortune = require('./lib/fortune')
const handlers = require('./lib/handlers')


const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', ExpressHandlebars({
    defaultLayout:'main'
}))
app.set('view engine', 'handlebars')


app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/contact', handlers.contact )

app.get('/about', handlers.about)



app.use(handlers.notFound)
app.use(handlers.servererror)


if(require.main === module){
    app.listen(port,()=>console.log(`Express запущен на ${port} порту`))
}else {
    module.exports = app
}

// app.listen(port,()=>console.log(`Express запущен на ${port} порту`))