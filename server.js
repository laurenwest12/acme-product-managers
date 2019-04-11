const express = require('express');
const app = express();
const path = require('path');
const {syncAndSeed, Manager, Product} = require ('./db/index')

const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
    Product.findAll()
        .then(products => res.send(products))
        .catch(next)
})

app.get('/api/managers', (req, res, next) => {
    Manager.findAll()
        .then(managers => res.send(managers))
        .catch(next)
})

app.put('/api/products/:id', (req, res, next) => {
    Product.findByPk(req.params.id)
    .then(product => product.update({managerId: req.body.managerId}))
    .then(product => res.send(product))
    .catch(next)
})

syncAndSeed()
    .then(() => app.listen(port, ()=> console.log(`listening on port ${port}`)))
