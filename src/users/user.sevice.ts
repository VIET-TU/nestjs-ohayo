import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { StoreConfig } from 'src/store/store.config';
import { StoreService } from './store.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('STORE_CONFIG') storeConfig: StoreConfig,
    @Inject('STORE_SERIVCE') private storeService: StoreService
  ) {
    console.log('storeConfig :>> ', storeConfig);
  }
  createUser(user: any): any {
    user.createdAt = new Date();
    user.id = 1;
    user.updatedAt = new Date();
    this.storeService.save(user);
    return UserDto.plainToInstance(user);
  }
}

// useValue: value
// useFra
