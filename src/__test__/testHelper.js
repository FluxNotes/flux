import {ConfigManagerInstance} from '../config/ConfigManager';
import fs from 'fs';
const JSON5 = require('json5');
const data = new String(fs.readFileSync('./public/config.js'));
const config = JSON5.parse(data.substring(data.indexOf("{")-1));
ConfigManagerInstance.addConfiguration(config);
