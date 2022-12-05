/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity,BaseEntity, Column,PrimaryGeneratedColumn,JoinColumn,OneToMany} from 'typeorm';
import { Max } from "class-validator"
import { TimeZone } from "./time-zone.entity"



@Entity('countries')
export class Country extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', name: 'name', unique:true})
  name: string;
  
  @Column({ type: 'text', name: 'country_code'})
  country_code: string;
  
  @Column({ type:'boolean', name: 'is_active', default: true })
  is_active: boolean;

  @OneToMany(() => TimeZone, timeZone=> timeZone.country)
  time_zone: TimeZone[];
    
    
    }
  





