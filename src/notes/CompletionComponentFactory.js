import ContextListOptions from '../context/ContextListOptions';
import ContextGetHelp from '../context/ContextGetHelp';
import ContextCalendar from '../context/ContextCalendar';

export default class CompletionComponentFactory {
    static createInstance(completionComponentName) {
        // Can't do an instance of with a switch
        switch (completionComponentName) {
            case "number":
                console.error(`We don't currently support a completion component for ${completionComponentName}-subtypes; trying to get a completionComponent for ${completionComponentName}`);
                return null;
            case "date":
                return ContextCalendar;
            case "multi-choice":
            case "choice":
                return ContextListOptions;
            case "menu":
                return ContextGetHelp;
            default:
                console.error(`We don't currently support a completion component for ${completionComponentName}-subtypes; trying to get a completionComponent for ${completionComponentName}`);
                return null;
        }
    }
}