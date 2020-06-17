const contratosCtrl = {};

const Contrato = require('../models/Contrato');

//create contrato
contratosCtrl.renderContratoForm = (req,res) => {
  res.render('contratos/new-contrato');
};
//contrato creado
contratosCtrl.createNewContrato = (req,res) =>{
  const{estado, municipio, fecha, numven,
  v1tpersona, v1nombre, v1genero, nombre1,
  constituido, numero, Fecha2, v2nombrerep, v2tpersona2, v2nombre2,
  v2genero2, nombre3, constituido1, numero1, fecha3, nombrerep2,
  numcomp, personacomp, nombrecomp1, constcomp,
  numeropol, fechacomp, nombrerep3, nombre4, genero3,
  comppersona2, nombre5, constituido3, numero3, fecha4, nombre6,
  nombre7, genero4, objcomprado, objmarca, objmodelo, objidvehicular, objplacas,
  objadquirido, fechafinal, objdescripcion} = req.body
  const newContrato = new Contrato({estado, municipio, fecha, numven,
  v1tpersona, v1nombre, v1genero, nombre1,
  constituido, numero, Fecha2, v2nombrerep, v2tpersona2, v2nombre2,
  v2genero2, nombre3, constituido1, numero1, fecha3, nombrerep2,
  numcomp, personacomp, nombrecomp1, constcomp,
  numeropol, fechacomp, nombrerep3, nombre4, genero3,
  comppersona2, nombre5, constituido3, numero3, fecha4, nombre6,
  nombre7, genero4, objcomprado, objmarca, objmodelo, objidvehicular, objplacas,
  objadquirido, fechafinal, objdescripcion})
  console.log(newContrato)
  res.send('nuevo contrato')
};
//lista de  contratos
contratosCtrl.renderContratos =(req, res) => {
  res.send('Todos los contratos')
};

//actualizar contratos
contratosCtrl.renderEditContratos = (req, res) => {
  res.send('Edicion de contrato')
};
contratosCtrl.updateContratos = (req, res) => {
  res.send('Editor de contrato')
};

//Eliminar contratos
contratosCtrl.deleteContratos = (req, res) => {
  res.send('Eliminacion de contrato')
};

module.exports = contratosCtrl;
