import { Global, Module } from '@nestjs/common';
import { databaseProviders } from 'src/shared/database.providers';
export const TENANT_CONNECTION = 'TENANT_CONNECTION';
export const APPLICATION_CONNECTION = 'APPLICATION_CONNECTION';

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class TenantModule {}
