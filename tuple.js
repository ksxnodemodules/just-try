((module) => {
  'use strict';
  const ERROR = 0;
  const VALUE = 1;

  class TryCatchTuple extends Array {
    get error() {
      return this[ERROR];
    }

    set error(error) {
      this[ERROR] = error;
    }

    get value() {
      return this[VALUE];
    }

    set value(value) {
      this[VALUE] = value;
    }

    static get ERROR() {
      return ERROR;
    }

    static get VALUE() {
      return VALUE;
    }
  }

  module.exports = class extends TryCatchTuple {};
})(module);
