const express = require('express')
const ExpressHandlebars = require('express-handlebars').engine

const randonFortune = require('./lib/fortune')

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', ExpressHandlebars({
    defaultLayout:'main'
}))
app.set('view engine', 'handlebars')


app.use(express.static(__dirname + '/public'))


app.get('/', (req,res) => res.render('home'))

app.get('/contact', (req,res)=> res.render('contact') )

app.get('/about', (req,res)=>{ 
    
    res.render('about',{fortune: randonFortune.getFortune()})
} )

app.get('/img', (req,res)=> res.render('contact') )

app.use((req,res)=>{
    res.status(404)
    res.render('404')
})
app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500)
    res.render('500')
})



app.listen(port,()=>console.log(`Express запущен на ${port} порту`))