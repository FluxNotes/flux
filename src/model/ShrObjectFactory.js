export default class ShrObjectFactory {
    createInstance(entryType) {
        const classSpec = this._entryTypeToClassSpec(entryType);
    }

    _entryTypeToClassSpec(entryType) {
        //http://standardhealthrecord.org/demographics/PersonOfRecord
        if (entryType.startsWith("http://standardhealthrecord.org/")) {
            let path = entryType.substring("http://standardhealthrecord.org/".length);
            let slashPos = path.indexOf("/");
            let namespace = path.substring(0, slashPos);
            let className = path.substring(slashPos+1);
            return { "namespace": namespace, "class":className };
        }
        throw new Error("unexpected path in entryType: " + entryType);
    }
}