const { Router } = require('express')
const router=Router();


const { renderIndex, renderAbout, renderContact, renderGenerar } = require('../controllers/index.controller')

router.get('/',renderIndex)
router.get('/about',renderAbout)
router.get('/contact',renderContact)
router.get('/generar',renderGenerar) //agregue esta parte para cambiar la pagina de generar y probar si funciona el js

module.exports =router;
