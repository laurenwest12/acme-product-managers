const Sequelzie = require('sequelize')
const db = new Sequelzie(process.env.DATABASE_URL || 'postgres://localhost/acme_product_managers', {logging: false})

module.exports = db