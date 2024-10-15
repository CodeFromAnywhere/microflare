The concept demonstrated here shows an ESM module being used statically as well as from the worker.

Having an openapi is crucial for this to be interpretable by machines.

The hassle of setting this up is relatively large, and should be able to be much smaller. In the end, it's all about this line of code:

```
export const add = (a, b) => a + b;
```

Can we make making static OpenAPIs easier?

TODO:

- [filename].js and [filename].d.ts can be generated
- worker entrypoint can be generated
- openapi can be generated based on code
- html can be generated based on openapi

[The dream](com.actionschema.calculator.ts) is to have an inverse domain typescript file for every domain be hosted as what we see here, registered in an API search engine. There's really not much more to it!

Cherry on the cake: being able to access this like this from any other worker:

```ts
com.actionschema.calculator.add(1, 2);
```

All we need is a `.d.ts` resolver that knows to look at https://calculator.actionschema.com/types.d.ts:
