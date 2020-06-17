const { Router } = require('express')
const router =Router()

const { renderContratoForm,
  createNewContrato,
  renderContratos,
  renderEditContratos,
  updateContratos,
  deleteContratos
} = require('../controllers/contratos.controller');
// Nuevos contratos
router.get('/contratos/add',renderContratoForm);
router.post('/contratos/new-contrato', createNewContrato);

//Ver todos los contratos
router.get('/contratos', renderContratos);

//Editar contratos
router.get('/contratos/edit/:id', renderEditContratos);
router.put('/contratos/edit/:id', updateContratos);

//Eliminar contratos
router.delete('/contratos/delete/:id', deleteContratos);

module.exports = router
