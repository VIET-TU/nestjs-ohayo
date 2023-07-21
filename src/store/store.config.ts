// export interface StoreConfig {
//   dir: string;
//   path?: string;
//   filename?: string;
// }

export interface storeRootConfig {
  path?: string;
  dirname: string;
}

export interface StoreFreatureConfig {
  filename: string;
}

export type StoreConfig = Partial<storeRootConfig & StoreFreatureConfig>;

export const STORE_CONFIG_TOKEN = 'STORE_CONFIG_TOKEN';
