import { Module } from '@nestjs/common';
import { AutomovilModule } from './automovil/automovil.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [AutomovilModule, ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get('MONGO_URI'),
    })
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
