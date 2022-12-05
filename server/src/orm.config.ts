import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PREFIX } from './shared/constant/database.constant';

const commonConf = {
  SYNCRONIZE: false,
  ENTITIES: [__dirname + '/entities/*.entity{.ts,.js}'],
  MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
};

export const TypeOrmConfig: TypeOrmModuleOptions = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'ems',
  entities: commonConf.ENTITIES,
  migrations: commonConf.MIGRATIONS,
  entityPrefix: PREFIX,
  synchronize: true,
  migrationsRun: true,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  logging: true,
};
