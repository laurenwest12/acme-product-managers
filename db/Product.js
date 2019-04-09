const Sequelzie = require('sequelize')
const db = require('./db')

const Product = db.define('Product', {
    name: Sequelzie.STRING,
})

module.exports = Product