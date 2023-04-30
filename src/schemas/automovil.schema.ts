import { Schema } from 'mongoose'

export const AutoSchema = new Schema({
    
    nombre: { type: String, required: true},
    descripcion: { type: String, required: true},
    año : { type: Number, required: true},
    placa : { type: Number, required: true},
    precioRenta : { type: Number, required: true},
    estadoAuto: {type: String, required: true}

})