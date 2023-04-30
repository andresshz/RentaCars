import { Controller, Post, Get, Body, Res, HttpStatus } from '@nestjs/common';
import { AutoDTO } from 'src/dto/automovil.dto';
import { AutomovilService } from './automovil.service';

@Controller('automovil')
export class AutomovilController {
    constructor(private serviceAuto: AutomovilService){}

    @Post()
    async agregarAutomovil(@Body() automovilDTO: AutoDTO, @Res() res ){
        try{
            const crearAuto = await this.serviceAuto.agregarAutomovil(automovilDTO)
            if(crearAuto){
                return res.status(HttpStatus.CREATED).send(crearAuto)
            }

        }catch(E){
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(E);
        }
    }
}
