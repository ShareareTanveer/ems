import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityRepository } from 'typeorm';

import { Country } from './entities/country.entity';
import { TimeZone } from './entities/time-zone.entity';


@Injectable()
export class AppService {
  
  
    constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
    @InjectRepository(TimeZone)
    private timeZoneRepository: Repository<TimeZone>,
  ) {}

  
  getHello(): string {
    return 'Hello World!';
  }
  
    // All Countries - List Page
  async GetAllCountries():Promise<Country[]>{
   const countries = await this.countryRepository.find({
     relations:["time_zone"],
   })
   return countries
  }
  
  // All Active Countries - List Page
  async GetAllActiveCountries():Promise<Country[]>{
   const countries = await this.countryRepository.find({
     where: {
        is_active: true,
    },
     relations:["time_zone"],
   })

   return countries
  }
  
  
  // Single Country By Id - Detail Page
  async GetOneCountry(id:number):Promise<Country>{
   const country = await this.countryRepository.findOne({
    where: {
        id: id,
    },
    relations: {
        time_zone: true,
    },
})
    
   if (!country){
     throw new NotFoundException(`Country With Given Id ${id} Does Not Exists`)
   }
  
   return country
  }
  
  
  
  
  // All TimeZone - List Page
  async GetAllTimeZones():Promise<TimeZone[]>{
   const timeZones = await this.timeZoneRepository.find({relations:["country"]})
   return timeZones
  }
  
  // All Active TimeZone - List Page
  async GetAllActiveTimeZones():Promise<TimeZone[]>{
   const timeZones = await this.timeZoneRepository.find({
     relations:["country"],
     where:{
       is_active:true
     }
   })
   return timeZones
  }
  
  
  
  // Single TimeZone By Id - Detail Page
  async GetOneTimeZone(id:number):Promise<TimeZone>{
   const timeZone = await this.timeZoneRepository.findOne({
    where: {
        id: id,
    },
    relations: {
        country: true,
    },
})
   
   if (!timeZone){
     throw new NotFoundException(`Time Zone With Given Id ${id} Was Not Found`)
   }
  
   return timeZone
  }
  
  
  
  
}
