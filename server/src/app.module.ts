import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfig } from './orm.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TimeZone } from './entities/time-zone.entity';
import { Country } from './entities/country.entity';







@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([Country,TimeZone])
    ],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
