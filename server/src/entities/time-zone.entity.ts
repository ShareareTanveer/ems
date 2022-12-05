import { Entity,BaseEntity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn} from 'typeorm';
import { Max } from "class-validator";
import { Country } from "./country.entity";




@Entity('time_zones')
export class TimeZone extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', name: 'name', length: 100,unique:true})
  name: string;
  
  @Column({ type: 'varchar', name: 'abbr', length: 4})
  abbr: string;
  
  @Column({ name: 'offfset'})
  offset: number;
  
  @Column({ type: 'text', name: 'description'})
  description: string;
  
  @Column({ type: 'text', name: 'utc'})
  utc: string;
  
  @Column({ type: 'boolean', name: 'is_active', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', name: 'is_deleted', default: false })
  is_deleted: boolean;

  @Column({ type: 'boolean', name: 'is_default' })
  is_default: boolean;
  
  @ManyToOne(() => Country, (country) => country.time_zone)
  @JoinColumn({name: "country_id"})
  country: Country;
  
  



}
