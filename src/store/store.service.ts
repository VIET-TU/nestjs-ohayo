import { Inject } from '@nestjs/common';
import { StoreConfig } from './store.config';
import * as fs from 'fs';
export class StoreService {
  constructor(
    @Inject('STORE_CONFIG') private readonly storeConfig: StoreConfig
  ) {
    if (!fs.existsSync(this.storeConfig.dir)) {
      fs.mkdirSync(this.storeConfig.dir);
    }
  }
  save(data: any): void {
    fs.appendFileSync(
      `${this.storeConfig.dir}/${this.storeConfig.filename}`,
      JSON.stringify(data)
    );
    console.log('data :>> ', data);
  }
}
