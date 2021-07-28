const db = require('../models');

const getProduct = async () => {
    const product = await db.producto.findAll({ include: db.imagen})
        .then(result => {
            return result;
        });

    return product;
}

const getImg = async () => {
    const Img = await db.imagen.findAll()
        .then(result => {
            return result;
    });

        return Img;
}



module.exports = {
    getProduct,
    getImg
    
}