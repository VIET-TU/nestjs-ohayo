import { DynamicModule, Module } from '@nestjs/common';
import {
  STORE_CONFIG_TOKEN,
  StoreConfig,
  StoreFreatureConfig,
  storeRootConfig,
} from './store.config';
import { StoreService } from './store.service';

let rootStoreConfig: StoreConfig;
const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({
  providers: [StoreService],
  exports: [StoreService],
})
class RootStoreModule {}

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
  static forRoot(storeConfig?: storeRootConfig): DynamicModule {
    rootStoreConfig = StoreModule.createConfig(storeConfig);
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: STORE_CONFIG_TOKEN,
          useValue: rootStoreConfig,
        },
      ],
    };
  }

  static forFeature(storeConfig: StoreFreatureConfig): DynamicModule {
    const token = 'STORE_SERVICE' + storeConfig.filename;
    return {
      module: StoreModule,
      providers: [
        {
          provide: token,
          useFactory: () => {
            const featureStoreConfig = StoreModule.createConfig({
              ...rootStoreConfig,
              ...storeConfig,
            });
            return new StoreService(featureStoreConfig);
          },
        },
      ],
      exports: [token],
    };
  }
  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultCofnig: StoreConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFAULT_FILE_NAME,
    };
    return { ...defaultCofnig, ...config };
  }
}
