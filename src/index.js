const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")

const app = express()

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('home',)
})

app.listen(3000, () => {
    console.log('Server is listnening on port 3000...')
})