
((module) => {
	'use strict';

	var Tuple = require('./tuple.js');

	const RETURN = (x) => x;

	var _getfunc = (fn, ...fnlist) =>
		typeof fn === 'function' ? fn : _getfunc(...fnlist);

	var _tryCatch = (act, onerror, onsuccess) => {
		try {
			return onsuccess(act());
		} catch (error) {
			return onerror(error);
		}
	};

	var main = module.exports = (act = RETURN, onerror = RETURN, onsuccess = RETURN) => _tryCatch(act, onerror, onsuccess);

	Object.setPrototypeOf(main, {
		tuple(act) {
			var result = new Tuple(null, null);
			_tryCatch(act, (error) => result.error = error, (value) => result.value = value);
			return result;
		},
		__proto__() {}
	});

})(module);
