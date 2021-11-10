import { join } from 'path';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'APPLICATION_CONNECTION',
    useFactory: async (req) =>
      await createConnection({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number.parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [join(__dirname, '../app/**/*.entity.{ts,js}')],
        synchronize: true,
      }),
  },

  {
    provide: 'TENANT_CONNECTION',
    useFactory: async (req) =>
      await createConnection({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number.parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [join(__dirname, '../../app/**/*.entity.{ts,js}')],
        synchronize: true,
      }),
  },
];
