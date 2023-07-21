import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreConfig } from './store.config';

@Module({
  //   providers: [
  //     StoreService,
  //     {
  //       provide: 'STORE_CONFIG',
  //       useValue: {
  //         dir: 'src/store',
  //         filename: 'user.json',
  //       } as StoreConfig,
  //     },
  //   ],
  //   exports: [StoreService],
})
export class StoreModule {
  static register(config: StoreConfig): DynamicModule {
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: 'STORE_CONFIG',
          useValue: config,
        },
      ],
      exports: [StoreService],
    };
  }
}
