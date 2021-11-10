import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base-classes/base.service';
import { Connection } from 'typeorm';
import { APPLICATION_CONNECTION } from '../tenant/tenant.module';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(@Inject(APPLICATION_CONNECTION) connection: Connection) {
    super();
    this._model = connection.getRepository(User);
  }
}
