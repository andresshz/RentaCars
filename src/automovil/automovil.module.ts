import { Module } from '@nestjs/common';
import { AutomovilController } from './automovil.controller';
import { AutomovilService } from './automovil.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoSchema } from 'src/schemas/automovil.schema';



@Module({
  imports:[MongooseModule.forFeature([{
    name: 'Automovil',
    schema: AutoSchema
  }])],
  controllers: [AutomovilController],
  providers: [AutomovilService]
})
export class AutomovilModule {}
