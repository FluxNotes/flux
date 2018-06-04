valueSetDownloader will download all value sets specified in provided JSON ELM(generated from CQL) file and save it in `vsac_cache/valueset-db.json` to be used by CQLExecutionEngine.
```
node valueSetDownloader.js <path to JSON ELM file> [vsacUserName] [vsacPassword]
```

Downloading value set definitions from VSAC requires a valid UMLS account. Alternately, the UMLS username and password can be provided via UMLS_USER_NAME and UMLS_PASSWORD environment variables.

