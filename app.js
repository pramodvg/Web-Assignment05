const express = require('express')
const app = express()

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use((req,res)=>{
    res.render("index");
})

app.listen(3000)
