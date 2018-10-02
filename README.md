
# just-try

## Requirements

* Node >= 6.0.0

## Usage

### Function `tryCatch`

```javascript
var tryCatch = require('just-try');
var valorerr = tryCatch(act, onerror, onsuccess); // return value of onerror or onsuccess
dosomething(valorerr);
```

### Function `tryCatch.tuple`

```javascript
var tuple = require('just-try').tuple;
var errandval = tuple(act); // an array of [error, value]
dosomething(errandval);
```
