import {
    ConfigManagerInstance
} from './ConfigManager';
import StaticOutcomesService from '../mcode-pilot/services/outcomes/StaticOutcomesService';


const SERVICES = {
    'StaticOutcomesService' :  StaticOutcomesService
};

export default class ServiceManager {

    constructor() {
        this.services = ConfigManagerInstance.get('services', {});
        const keys = Object.keys(this.services);
        for (const key of keys) {
            let serviceConfig = this.services[key];
            if (typeof serviceConfig == 'string') {
                let type = SERVICES[serviceConfig]; 
                this.services[key] = new type();
            } else if (serviceConfig && serviceConfig.name) {
                let type = SERVICES[serviceConfig.name];
                this.services[key] = new type(serviceConfig);
            }
        }
    }

    getService(name) {
        return this.services[name];
    }
}
