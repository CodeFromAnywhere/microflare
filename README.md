The concept demonstrated here shows an ESM module being used statically as well as from the worker.

Having an openapi is crucial for this to be interpretable by machines.

The hassle of setting this up is relatively large, and should be able to be much smaller. In the end, it's all about this line of code:

```
export const add = (a, b) => a + b;
```

Can we make making static OpenAPIs easier?

TODO:

- worker entrypoint can be generated
- openapi can be generated based on code
- html can be generated based on openapi

[The dream](com.actionschema.calculator.ts) is to have an inverse domain typescript file for every domain be hosted as what we see here, registered in an API search engine. There's really not much more to it!
