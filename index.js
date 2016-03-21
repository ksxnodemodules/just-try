
((module) => {
	'use strict';

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

	module.exports = (act, onsuccess, onerror) => tryCatch(act, onsuccess, onerror);

})(module);
