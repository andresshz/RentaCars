import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Automovil } from 'src/interfaces/automovil.interface';
import { InjectModel } from '@nestjs/mongoose'
import { AutoDTO } from 'src/dto/automovil.dto';

@Injectable()
export class AutomovilService {
    constructor(@InjectModel('Automovil') private modelAuto: Model<Automovil>){}

    async agregarAutomovil(autoDTO: AutoDTO): Promise<Automovil>{
        const create = await this.modelAuto.create(autoDTO);
        return  create;
    }
}
