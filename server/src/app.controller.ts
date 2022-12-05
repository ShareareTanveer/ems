import { Controller, Get,Param,ParseIntPipe,Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Country } from './entities/country.entity';
import { TimeZone } from './entities/time-zone.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  

  
  // All Countries  - List Page
 
  @Get("country")
  async GetCountriesWithFilter():Promise<Country[]>{

    return this.appService.GetAllCountries()
    }
      
  
  // All Active Countries - List Page
 
  @Get("active-country")
  async GetAllActiveCountries():Promise<Country[]>{
    return this.appService.GetAllActiveCountries()
  }

 
  // Single Country By Id - Detail Page
  @Get("country/:id")
  async GetOneCountry(@Param("id",ParseIntPipe)id:number):Promise<Country>{
    return this.appService.GetOneCountry(id)
  }
  
  
  
  // All TimeZones - List Page
  @Get("timezone")
  async GetAllTimeZones():Promise<TimeZone[]>{
    return this.appService.GetAllTimeZones()
  }
  
  // All Active TimeZones - List Page
  @Get("active-timezone")
  async GetAllActiveTimeZones():Promise<TimeZone[]>{
    return this.appService.GetAllActiveTimeZones()
  }
  
  // Single TimeZone By Id - Detail Page
  @Get("timezone/:id")
  async GetOneTimeZone(@Param("id",ParseIntPipe)id:number):Promise<TimeZone>{
    return this.appService.GetOneTimeZone(id)
  }
  
  
  
  
}
