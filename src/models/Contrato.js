const{Schema, model}= require('mongoose');

const ContratoSchema = new Schema({
  estado:{
    type:String,
    required: true
  },
  municipio:{
    type:String,
    required: true
  },
  fecha:{
    type:Date,
    required: true
  },
  numven:{
    type:Number,
    required: true
  },
  v1tpersona:{
    type:String,
    required: true
  },
  v1nombre:{
    type:String,
    required: true
  },
  v1genero:{
    type:String,
    required: true
  },
  nombre1:{
    type:String,
    required: true
  },
  constituido:{
    type:String,
    required: true
  },
  numero:{
    type:Number,
    required: true
  },
  Fecha2:{
    type:Date,
    required: true
  },
  v2nombrerep:{
    type:String,
    required: false
  },
  v2tpersona2:{
    type:String,
    required: false
  },
  v2nombre2:{
    type:String,
    required: false
  },
  v2genero2:{
    type:String,
    required: false
  },
  nombre3:{
    type:String,
    required: false
  },
  constituido1:{
    type:String,
    required: false
  },
  numero1:{
    type:Number,
    required: false
  },
  fecha3:{
    type:Date,
    required: false
  },
  nombrerep2:{
    type:String,
    required: false
  },
  numcomp:{
    type:Number,
    required: true
  },
  personacomp:{
    type:String,
    required: true
  },
  nombrecomp1:{
    type:String,
    required: true
  },
  constcomp:{
    type:String,
    required: true
  },
  numeropol:{
    type:Number,
    required: true
  },
  fechacomp:{
    type:Date,
    required: true
  },
  nombrerep3:{
    type:String,
    required: true
  },
  nombre4:{
    type:String,
    required: true
  },
  genero3:{
    type:String,
    required: true
  },
  comppersona2:{
    type:String,
    required: false
  },
  nombre5:{
    type:String,
    required: false
  },
  constituido3:{
    type:String,
    required: false
  },
  numero3:{
    type:Number,
    required: false
  },
  fecha4:{
    type:Date,
    required: false
  },
  nombre6:{
    type:String,
    required: false
  },
  nombre7:{
    type:String,
    required: false
  },
  genero4:{
    type:String,
    required: false
  },
  objcomprado:{
    type:String,
    required: true
  },
  objmarca:{
    type:String,
    required: true
  },
  objmodelo:{
    type:String,
    required: true
  },
  objidvehicular:{
    type:String,
    required: true
  },
  objplacas:{
    type:String,
    required: true
  },
  objadquirido:{
    type:String,
    required: true
  },
  fechafinal:{
    type:Date,
    required: true
  },
  objdescripcion:{
    type:String,
    required: true
  },
},{
  timestamps: true
})

module.exports = model('Contrato', ContratoSchema);
