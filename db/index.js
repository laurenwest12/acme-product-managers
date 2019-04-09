const db =  require('./db')
const User = require('./Manager')
const Product = require('./Product')
const Manager = require('./Manager')

Product.belongsTo(Manager, { as: "manager" });

const syncAndSeed = () => {
    return db.sync({force: true})
        .then(() => {
            Promise.all([
                Manager.create({name: 'Larry'}),
                Manager.create({name: 'Curly'}),
                Manager.create({name: 'Moe'}),
                Product.create({name: 'Foo', managerId: 1}),
                Product.create({name: 'Bar', managerId: 2}),
                Product.create({name: 'Bazz', managerId: 3})
            ])
        })
}

module.exports = {
    syncAndSeed,
    Manager,
    Product
}