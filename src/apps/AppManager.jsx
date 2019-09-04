import { CompassApp } from '../containers/CompassApp';
import SmartCompassApp from '../containers/SmartCompassApp';
import { FullApp } from '../containers/FullApp';
import SmartFullApp from '../containers/SmartFullApp';
import SlimApp from '../containers/SlimApp';
import PointOfCareApp from '../containers/PointOfCareApp';
import Pilot2MvpApp from '../containers/Pilot2MvpApp';
import LandingPage from '../components/LandingPage';
import LaunchPage from '../components/LaunchPage';
import {ConfigManagerInstance} from '../config/ConfigManager';

const APPS = {
    'SlimApp': SlimApp,
    'FullApp': FullApp,
    'SmartFullApp': SmartFullApp,
    'LaunchPage': LaunchPage,
    'LandingPage': LandingPage,
    'CompassApp': CompassApp,
    'SmartCompassApp': SmartCompassApp,
    'PointOfCareApp': PointOfCareApp,
    'Pilot2MvpApp': Pilot2MvpApp,
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
