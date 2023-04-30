import { Document } from 'mongoose';

export interface Automovil extends Document {
  nombre: string;
  descripcion: string;
  año: number;
  placa: number;
  precioRenta: number;
  estadoAuto: string; //Disponble o rentado.
}
