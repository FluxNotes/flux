import { CompassApp } from '../containers/CompassApp';
import SmartCompassApp from '../containers/SmartCompassApp';
import { FullApp } from '../containers/FullApp';
import SmartApp from '../containers/SmartApp';
import SlimApp from '../containers/SlimApp';
import PointOfCareApp from '../containers/PointOfCareApp';
import LandingPage from '../components/LandingPage';
import LaunchPage from '../components/LaunchPage';
import {ConfigManagerInstance} from '../config/ConfigManager';

const APPS = {
    'FullApp': FullApp,
    'SlimApp': SlimApp,
    'SmartApp': SmartApp,
    'LaunchPage': LaunchPage,
    'LandingPage': LandingPage,
    'CompassApp': CompassApp,
    'SmartCompassApp': SmartCompassApp,
    'PointOfCareApp': PointOfCareApp,
};

export default class AppManager {
    constructor() {
        this.apps = ConfigManagerInstance.get('apps').map((appConfig) => {
            appConfig.app = APPS[appConfig.app];
            return appConfig;
        });
    }
    getSupportedApps() {
        return this.apps;
    }
}
