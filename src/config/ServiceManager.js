import { ConfigManagerInstance } from './ConfigManager';
import StaticOutcomesService from '../mcode-pilot/services/outcomes/StaticOutcomesService';
import CLQOutcomesService from '../mcode-pilot/services/outcomes/CLQOutcomesService';

const SERVICES = {
    'StaticOutcomesService': StaticOutcomesService,
    'CLQOutcomesService': CLQOutcomesService
};

export default class ServiceManager {
    constructor() {
        this.services = ConfigManagerInstance.get('services', {});
        const keys = Object.keys(this.services);
        for (const key of keys) {
            const serviceConfig = this.services[key];
            if (typeof serviceConfig === 'string') {
                const type = SERVICES[serviceConfig];
                this.services[key] = new type();
            } else if (serviceConfig && serviceConfig.name) {
                const type = SERVICES[serviceConfig.name];
                this.services[key] = new type(serviceConfig);
            }
        }
    }

    getService(name) {
        return this.services[name];
    }
}
