var express = require('express');
const sgMail = require('@sendgrid/mail');
var router = express.Router();
const api = require('../api');
const db = require('../models');

sgMail.setApiKey('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');

/* GET home page. - Tengo que cambiar la ruta de la home,
 ahi voy a mostrar otra cosa no todos los productos*/ 

router.get('/', async (req, res) => {
  const product = await api.getProduct();
  //console.log(product);

  res.render('index', { title: 'DF-SOLIN', product });
  // res.send(product); // devuelve un JSON con la informacion
});

/* GET de Contacto */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto',  {title: 'Contacto'});
});

/* POST de Enviar mail */
router.post('/enviar', (req, res) => {
 /* console.log(req.body.nombre);
  console.log(req.body.email);
  console.log(req.body.telefono);
  console.log(req.body.comentarios);*/
  const msg = {
    to: 'ana.molina1205@gmail.com',
    from: 'ana.molina1205@gmail.com', // Use the email address or domain you verified above
    subject: 'Mensaje desde web DF-SOLIN',
    text: `Recibiste una mail de ${req.body.email}, nombre: ${req.body.nombre} , Telefono: ${req.body.telefono}, Comentario: ${req.body.comentarios}`,
    
  };
  //ES6
  sgMail.send(msg)

  res.send('Mensaje de prueba enviado');
});

/* GET de Nosotros */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros',  {title: 'Nosotros'});
});

/* GET de Productos */
router.get('/productos', async (req, res) => {
  const product = await api.getProduct();
    console.log(product);
  
    res.render('pages/productos', { title: 'Productos', product });
  });
/*GET de imagenes */
router.get('/imagen', async (req, res) => {
  const Img = await api.getImg();
  console.log(Img);

  res.send(Img); // devuelve un JSON con la informacion
});
/* GET de productos basicos */
router.get('/p-basico', async (req, res) => {
  // Los datos de la URL vienen en un req.query
  const product = await api.getProductBasic();
  res.render('pages/p-basico', { title: 'Productos básicos', product });
    });
  
 /*GET de productos premium */
  router.get('/p-premium', async (req, res) => {
    // Los datos de la URL vienen en un req.query
    const product = await api.getProductPremium();
    res.render('pages/p-premium', { title: 'Productos premium',product });
      }); 

      /*GET de producto destapador */
  router.get('/p-destapador', async (req, res) => {
    // Los datos de la URL vienen en un req.query
    const product = await api.getProductDestapador();
    res.render('pages/p-destapador', { title: 'Destapadores', product });
      });
      
      /* GET producto por ID*/
      router.get('/uni-producto/:id', async (req, res) => {
        const Img = await api.getImg();
        const product = await api.getProductById(req.params.id);
      
        res.render('pages/uni-producto', { Img, product });
      });
      
      




module.exports = router;
