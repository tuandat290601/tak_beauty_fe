// import domainConfig from './domainConfig';
import environmentConfig from './enviromentConfig';
import {storageKey, eventsKey} from './storageKey';

const isDevEnv = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const envConfig = isDevEnv ? environmentConfig.development : environmentConfig.production;
// const domainUrlConfig = isDevEnv ? domainConfig.development : domainConfig.production;

const Config = {
    isDevEnv,
    storageKey,
    eventsKey,
    apiConfig: {
        ...envConfig
    },
    // urlConfig: {
    //     ...domainUrlConfig
    // }
};

export default Config;
