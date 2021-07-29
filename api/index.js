const { Op } = require('sequelize'); 
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

const getProductBasic = async () => {
    const product = await db.producto.findAll({ 
		where:{
		nombre:{
			[Op.endsWith]: 'latas'
			}
		},	
	}).then(result => {
            return result;
        });

    return product;
}

const getProductPremium = async () => {
    const product = await db.producto.findAll({ 
		where:{
		nombre:{
			[Op.substring]: 'con'
			}
		},	
	}).then(result => {
            return result;
        });

    return product;
}
const getProductDestapador = async () => {
    const product = await db.producto.findAll({ 
		where:{
		nombre:{
			[Op.substring]: 'destapa'
			}
		},	
	}).then(result => {
            return result;
        });

    return product;
}




module.exports = {
    getProduct,
    getImg,
    getProductBasic,
    getProductPremium,
    getProductDestapador
   
    
}