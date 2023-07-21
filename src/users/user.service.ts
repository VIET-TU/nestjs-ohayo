import { StoreConfig } from 'src/store/store.config';
import { StoreService } from '../store/store.service';
import { LoggerService } from 'src/logger/logger.service';
import { SecurityService } from './security.service';
import { UserDto } from './user.dto';
import { Inject, Injectable, forwardRef } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @Inject('STORE_CONFIG') storeConfig: StoreConfig,
    @Inject('STORE_SERVICEuser.json') private storeService: StoreService,
    private readonly logger: LoggerService,
    @Inject(forwardRef(() => SecurityService))
    private securityService: SecurityService
  ) {
    console.log('storeConfig :>> ', storeConfig);
  }
  createUser(user: any): any {
    user.createdAt = new Date();
    user.id = 1;
    user.updatedAt = new Date();
    this.storeService.save(user);
    this.storeService.save(user);
    return UserDto.plainToInstance(user);
  }
  getLoggoer() {
    this.securityService.getSecuritySevice();
    return this.logger.log();
  }
}

// useValue: value
// useFra
