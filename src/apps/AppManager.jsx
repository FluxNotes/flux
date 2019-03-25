import {
    CompassApp
} from '../containers/CompassApp';
import FullApp from '../containers/FullApp';
import SlimApp from '../containers/SlimApp';
import SmartApp from '../containers/SmartApp';
import LaunchPage from '../components/LaunchPage';
import LandingPage from '../components/LandingPage';
import StaticOutcomesService from '../mcode-pilot/services/outcomes/StaticOutcomesService'
import _ from 'lodash'
const APPS = {
    "FullApp": FullApp,
    "SlimApp": SlimApp,
    "SmartApp": SmartApp,
    "LaunchPage": LaunchPage,
    "LandingPage": LandingPage,
    "CompassApp": CompassApp
}
const SERVICES = {
    "StaticOutcomesService": StaticOutcomesService
}
class AppManager {
    constructor(config = {}) {
        this.config = { ...config,
            ...global.CONFIG
        };
        this.init();
    }

    init() {
        this.config.apps.map((appConfig) => {
            appConfig.app = APPS[appConfig.app];
            return appConfig;
        });

        const keys = Object.keys(this.config.services)
        for (const key of keys) {
            let serviceConfig = this.config.services[key]
            console.log(serviceConfig);
            if (typeof serviceConfig == 'string') {
              console.log(SERVICES[serviceConfig]);
                let type = SERVICES[serviceConfig];
                this.config.services[key] = new type()
            } else if (serviceConfig && serviceConfig.name) {
                let type = SERVICES[serviceConfig.name]
                this.config.services[key] = new type(serviceConfig)
            }
        }

    }

    getService(serviceName) {
        return this.config.services[serviceName];
    }

    getSupportedApps() {
        return this.config.apps;
    }

}

export default new AppManager()
