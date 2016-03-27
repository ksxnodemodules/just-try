
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

	var tryCatch = (...fnlist) =>
		_tryCatch(...fnlist.map((fn) => _getfunc(fn, RETURN)));

	var main = module.exports = (act, onsuccess, onerror) => tryCatch(act, onsuccess, onerror);

	Object.setPrototypeOf(main, {
		tuple(act) {
			var result = new Tuple(null, null);
			main(act, (error) => result.error = error, (value) => result.value = value);
			return result;
		},
		__proto__() {}
	});

})(module);
