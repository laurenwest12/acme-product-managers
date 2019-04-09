const Sequelize = require('sequelize')
const db = require('./db')

const Manager = db.define('manager', {
    name: Sequelize.STRING,
})

module.exports = Manager