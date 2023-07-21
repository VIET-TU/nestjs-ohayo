import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.sevice';
import { StoreConfig } from 'src/store/store.config';
import { StoreService } from './store.service';

function createStore(config: StoreConfig): StoreService {
  console.log('config :>> ', config);
  return new StoreService();
}

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USERVIE_SERVICE_VIETTU',
      useClass: UserService,
    }, // Add a comma here

    // Add a comma here and correct the object structure
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'user',
      } as StoreConfig,
    },
    {
      provide: 'STORE_SERIVCE',
      useFactory: createStore,
      inject: [
        {
          token: 'STORE_CONFIG',
          optional: true,
        },
      ],
    },
  ],
})
export class UserModule {}
