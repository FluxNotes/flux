import {
    CompassApp
} from '../containers/CompassApp';
import FullApp from '../containers/FullApp';
import SlimApp from '../containers/SlimApp';
import SmartApp from '../containers/SmartApp';
import LandingPage from '../containers/SmartApp';
import LaunchPage from '../components/LaunchPage';
import {ConfigManagerInstance} from '../config/ConfigManager';
const APPS = {
    "FullApp": FullApp,
    "SlimApp": SlimApp,
    "SmartApp": SmartApp,
    "LaunchPage": LaunchPage,
    "LandingPage": LandingPage,
    "CompassApp": CompassApp
};

export default class AppManager {
    constructor() {
        this.apps = ConfigManagerInstance.get("apps").map((appConfig) => {
            appConfig.app = APPS[appConfig.app];
            return appConfig;
        });
    }
    getSupportedApps() {
        return this.apps;
    }

}
