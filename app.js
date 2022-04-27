import express from 'express'
import Query from './db/query.js'

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(express.static(__dirname + '/assets'));
app.get('/assets/css/custom.css', async function (req, res) {
    res.sendFile('/assets/css/custom.css', { root: '.' })
})

app.get('/', (req, res) => {
    res.render('pages/login', { error: false})
})

app.post('/login', (req, res) => {
    const user = req.body.user
    const passwd = req.body.password
    if (user === 'admin' && passwd === 'admin') {
        res.redirect('/home')
        // res.render('pages/home', { user: user });
    } else {
        res.render('pages/login', { error: 'Usuário ou senha incorretos' })
    }
})

app.get('/home', (req, res) => {
    res.render('pages/home')
});

app.get('/cemiterio', (req, res) => {
    res.render('pages/cemiterio')
})

app.post('/cemiterio', async (req, res) => {
    
    const result = await Query.insert_und(req.body.unitName, req.body.address, req.body.district, req.body.state, req.body.city, req.body.responsible)
    console.log(result)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})