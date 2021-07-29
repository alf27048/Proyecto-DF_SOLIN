var express = require('express');
var router = express.Router();
const api = require('../api');
const db = require('../models');

/* GET home page. - Tengo que cambiar la ruta de la home,
 ahi voy a mostrar otra cosa no todos los productos*/ 

router.get('/', async (req, res) => {
  const product = await api.getProduct();
  console.log(product);

  res.render('index', { title: 'Proyecto', product });
  // res.send(product); // devuelve un JSON con la informacion
});


/* GET de Contacto */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
/* GET de Nosotros */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

/* GET de Productos */
router.get('/productos', async (req, res) => {
  const product = await api.getProduct();
    console.log(product);
  
    res.render('pages/productos', { product });
  });

router.get('/imagen', async (req, res) => {
  const Img = await api.getImg();
  console.log(Img);

  res.send(Img); // devuelve un JSON con la informacion
});
/* GET de productos basicos */
router.get('/p-basico', async (req, res) => {
  // Los datos de la URL vienen en un req.query
  const product = await api.getProductBasic();
  res.render('pages/p-basico', { product });
    });
  
 /*GET de productos premium */
  router.get('/p-premium', async (req, res) => {
    // Los datos de la URL vienen en un req.query
    const product = await api.getProductPremium();
    res.render('pages/p-premium', { product });
      }); 

      /*GET de producto destapador */
  router.get('/p-destapador', async (req, res) => {
    // Los datos de la URL vienen en un req.query
    const product = await api.getProductDestapador();
    res.render('pages/p-destapador', { product });
      }); 




module.exports = router;
