(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('polpware-fe-utilities', ['exports'], factory) :
    (factory((global['polpware-fe-utilities'] = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Generates a guid.
     * @return {?}
     */
    function guid() {
        /** @type {?} */
        var d = new Date().getTime();
        /** @type {?} */
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            /** @type {?} */
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    }
    /**
     * Generates a random number between the given range
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Encodes a key-value pair, where a value can be an array.
     * @param {?} key
     * @param {?} value
     * @param {?} str
     * @return {?}
     */
    function urlEncodePair(key, value, str) {
        if (value instanceof Array) {
            value.forEach(function (item) {
                str.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(item));
            });
        }
        else {
            str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    /**
     * Encodes an object in www form.
     * @param {?} data
     * @return {?}
     */
    function urlEncode(data) {
        /** @type {?} */
        var str = [];
        for (var p in data) {
            if (data.hasOwnProperty(p)) {
                urlEncodePair(p, data[p], str);
            }
        }
        return str.join('&').replace(/%20/g, '+');
    }
    /**
     * @param {?} name
     * @param {?} url
     * @return {?}
     */
    function getParamByName(name, url) {
        name = name.replace(/[\[\]]/g, '\\$&');
        /** @type {?} */
        var regex = new RegExp('[?#&]' + name + '(=([^&#]*)|&|#|$)');
        /** @type {?} */
        var results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    /**
     * @param {?} name
     * @param {?=} url
     * @return {?}
     */
    function getQueryParamByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        return getParamByName(name, url);
    }
    /**
     * @param {?} name
     * @param {?=} url
     * @return {?}
     */
    function getHashParamByName(name, url) {
        if (!url) {
            url = window.location.hash;
        }
        return getParamByName(name, url);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Pushs an array or a single value into the thisArg;
     * @template T
     * @param {?} thisArg
     * @param {?} src
     * @return {?}
     */
    function pushArray(thisArg, src) {
        if (!(src instanceof Array)) {
            thisArg.push(src);
            return;
        }
        src.forEach(function (item) {
            thisArg.push(item);
        });
    }
    /**
     * Turns the values in an object into an array
     * @param {?} o
     * @return {?}
     */
    function makeArray(o) {
        /** @type {?} */
        var ret = [];
        for (var n in o) {
            if (o.hasOwnProperty(n)) {
                ret.push(o[n]);
            }
        }
        return ret;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Replaces the placeholders a given format with the given parameters.
     * @param {?} format
     * @param {?} params
     * @return {?}
     */
    function replace(format, params) {
        /*jslint unparam: true */
        return format.replace(/\{([a-zA-Z]+)\}/g, function (s, key) {
            return (typeof params[key] === 'undefined') ? '' : params[key];
        });
    }
    /**
     * Transforms the given string into one where
     * some characters have been properly replaced with
     * their escape versions.
     * @param {?} data
     * @return {?}
     */
    function applyEscape(data) {
        data = data
            .replace(/[\\]/g, '\\\\')
            .replace(/[\"]/g, '\\\"')
            .replace(/[\/]/g, '\\/')
            .replace(/[\b]/g, '\\b')
            .replace(/[\f]/g, '\\f')
            .replace(/[\n]/g, '\\n')
            .replace(/[\r]/g, '\\r')
            .replace(/[\t]/g, '\\t');
        return data;
    }
    /**
     * Undo the work by applyEscape. It replaces the escape
     * characters with their unescaped ones.
     * @param {?} data
     * @return {?}
     */
    function reverseEscape(data) {
        data = data
            .replace(/\\\\/g, '\\')
            .replace(/\\\"/g, '\"')
            .replace(/\\\//g, '\/')
            .replace(/\\\b/g, '\b')
            .replace(/\\\f/g, '\f')
            .replace(/\\\n/g, '\n')
            .replace(/\\\r/g, '\r')
            .replace(/\\\t/g, '\t');
        return data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template T, U
     * @param {?} firstSet
     * @param {?} secondSet
     * @param {?} predicate
     * @return {?}
     */
    function diff(firstSet, secondSet, predicate) {
        return firstSet.filter(function (x) {
            return !secondSet.some(function (y) {
                return predicate(x, y);
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} x
     * @return {?}
     */
    function isBoolean(x) {
        return typeof x === 'boolean';
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isNumber(x) {
        return typeof x === 'number';
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isString(x) {
        return typeof x === 'string';
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isSymbol(x) {
        return typeof x === 'symbol';
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isNull(x) {
        return x === null;
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isUndefined(x) {
        return x === undefined;
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isArray(x) {
        return x instanceof Array;
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isObject(x) {
        return typeof x === 'object';
    }
    /**
     * @param {?} x
     * @return {?}
     */
    function isFunction(x) {
        return typeof x === 'function';
    }
    /** @type {?} */
    var tyBool = { name: 'Boolean', val: false, pred: isBoolean };
    /** @type {?} */
    var tyNull = { name: 'Null', val: null, pred: isNull };
    /** @type {?} */
    var tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
    /** @type {?} */
    var tyNumber = { name: 'Number', val: 0, pred: isNumber };
    /** @type {?} */
    var tyString = { name: 'String', val: '', pred: isString };
    /** @type {?} */
    var tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
    /** @type {?} */
    var tyObject = { name: 'Object', val: function () { return {}; }, pred: isObject };
    /** @type {?} */
    var tyArray = { name: 'Array', val: function () { return []; }, pred: isArray };
    /** @type {?} */
    var tyFunction = { name: 'Function', val: function () { }, pred: isFunction };
    /** *
     *  Predefined types and their properties.
      @type {?} */
    var preDefinedTypes = {
        tyBool: tyBool,
        tyNull: tyNull,
        tyUndefined: tyUndefined,
        tyNumber: tyNumber,
        tyString: tyString,
        tySymbol: tySymbol,
        tyObject: tyObject,
        tyArray: tyArray,
        tyFunction: tyFunction
    };
    /**
     * Returns the default value for a given type.
     * @param {?} ty
     * @return {?}
     */
    function defaultValue(ty) {
        /** @type {?} */
        var val = ty.val;
        if (ty !== tyFunction && typeof val === 'function') {
            val = val();
        }
        return val;
    }
    /**
     * Type checks if a given value is type of the given ty
     * @param {?} value
     * @param {?} ty
     * @return {?}
     */
    function ok(value, ty) {
        return ty.pred(value);
    }
    /**
     * Returns the type for the given value.
     * @param {?} value
     * @return {?}
     */
    function getType(value) {
        for (var prop in preDefinedTypes) {
            if (ok(value, preDefinedTypes[prop])) {
                return preDefinedTypes[prop];
            }
        }
        return null;
    }
    /**
     * @param {?} value
     * @param {?} ty
     * @return {?}
     */
    function assert(value, ty) {
        if (ok(value, ty)) {
            return;
        }
        throw new Error('type check error: exptected type is ' +
            ty + ' but given type is ' + typeof value);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Computes the hash code for a given value.
     * This method takes into account the type of the given
     * value when generating its hash code.
     * @param {?} value
     * @return {?}
     */
    function hashCode(value) {
        /** @type {?} */
        var hash = 0;
        if (ok(value, tyBool)) {
            value = value ? 1 : 0;
        }
        else if (ok(value, tyNumber)) {
            if (value === 0) {
                return 0;
            }
        }
        if (!value) {
            return 0;
        }
        value = value.toString();
        if (value.length === 0) {
            return hash;
        }
        /*jslint plusplus: true */
        for (var i = 0, len = value.length; i < len; i++) {
            /** @type {?} */
            var chr = value.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
    /**
     * Computes the hash code for a member of an object.
     * @param {?} name
     * @param {?} value
     * @param {?} configuration
     * @return {?}
     */
    function hashPrimitiveMember(name, value, configuration) {
        /** @type {?} */
        var code = hashCode(value);
        if (configuration) {
            /** @type {?} */
            var bits = configuration[name];
            if (bits) {
                return code << configuration[name];
            }
        }
        return code;
    }
    /**
     * Computes the hash code for a member of an object, based on
     * the given member member, the value to be hashed, and the configuration
     * about how each member contributes to the enire hash code of the
     * object.
     * @param {?} name
     * @param {?} value
     * @param {?} configuration
     * @return {?}
     */
    function hashMember(name, value, configuration) {
        if (ok(value, tyArray)) {
            /** @type {?} */
            var code = 0;
            /*jslint plusplus: true */
            for (var i = 0; i < value.length; i++) {
                code = code + hashPrimitiveMember(name, value[i], configuration);
            }
            return code;
        }
        return hashPrimitiveMember(name, value, configuration);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function safeParseString(value) {
        if (!value) {
            return '';
        }
        return value.toString();
    }
    /**
     * Parses a given value into an integer.
     * @param {?} value
     * @return {?}
     */
    function safeParseInt(value) {
        if (!value) {
            return 0;
        }
        if (ok(value, tyString)) {
            return parseInt(value, 10);
        }
        if (ok(value, tyNumber)) {
            return value;
        }
        return 0;
    }
    /**
     * Parses a given value into a float number.
     * @param {?} value
     * @return {?}
     */
    function safeParseFloat(value) {
        if (!value) {
            return 0.00;
        }
        if (ok(value, tyString)) {
            return parseFloat(value);
        }
        if (ok(value, tyNumber)) {
            return value;
        }
        return 0.00;
    }
    /**
     * Parses a given value into a bool value.
     * @param {?} value
     * @return {?}
     */
    function safeParseBool(value) {
        if (!value) {
            return false;
        }
        if (ok(value, tyBool)) {
            return value;
        }
        if (ok(value, tyString)) {
            return value.toLowerCase() === 'true';
        }
        if (ok(value, tyNumber)) {
            return value > 0;
        }
        return false;
    }
    /**
     * Returns if a given value can be safely converted into the given type.
     * @param {?} value
     * @param {?} ty
     * @return {?}
     */
    function convertible(value, ty) {
        if (ok(value, ty)) {
            return true;
        }
        if (isNull(value) || isUndefined(value)) {
            return false;
        }
        if (ty === tyNumber && isNaN(value)) {
            return false;
        }
        // TODO: refine
        return true;
    }
    /**
     * Safely converts the given value into a value of the given type.
     * @param {?} value
     * @param {?} ty
     * @return {?}
     */
    function convert(value, ty) {
        if (ty === tyNumber) {
            return safeParseFloat(value);
        }
        if (ty === tyBool) {
            return safeParseBool(value);
        }
        if (ty === tyString) {
            return value.toString();
        }
        throw new Error('Cannot convert the given value to the given type');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //
    // Author:: Tom Tang <principleware@gmail.com>
    // Copyright:: Copyright (c) 2017, Tom Tang
    //
    // Permission is hereby granted, free of charge, to any person obtaining
    // a copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to
    // permit persons to whom the Software is furnished to do so, subject to
    // the following conditions:
    //
    // The above copyright notice and this permission notice shall be
    // included in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    // EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    // NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    // LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    // OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    //
    // Except as contained in this notice, the name(s) of the above copyright
    // holders shall not be used in advertising or otherwise to promote the
    // sale, use or other dealings in this Software without prior written
    // authorization.
    /**
     * @param {?} fn
     * @return {?}
     */
    function asap(fn) {
        setTimeout(fn, 1);
    }
    /**
     * @param {?} fn
     * @param {?} thisArg
     * @return {?}
     */
    function bind(fn, thisArg) {
        return function () {
            fn.apply(thisArg, arguments);
        };
    }
    var ɵ0 = function (value) { return Object.prototype.toString.call(value) === "[object Array]"; };
    /** @type {?} */
    var isArray$1 = Array.isArray || ɵ0;
    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     * @param {?} fn
     * @param {?} onFulfilled
     * @param {?} onRejected
     * @return {?}
     */
    function doResolve(fn, onFulfilled, onRejected) {
        /** @type {?} */
        var done = false;
        try {
            fn(function (value) {
                if (done) {
                    return;
                }
                done = true;
                onFulfilled(value);
            }, function (reason) {
                if (done) {
                    return;
                }
                done = true;
                onRejected(reason);
            });
        }
        catch (ex) {
            if (done) {
                return;
            }
            done = true;
            onRejected(ex);
        }
    }
    /**
     * @param {?} deferred
     * @return {?}
     */
    function handle(deferred) {
        /** @type {?} */
        var me = this;
        if (this._state === null) {
            this._deferreds.push(deferred);
            return;
        }
        asap(function () {
            /** @type {?} */
            var cb;
            /** @type {?} */
            var ret;
            cb = me._state ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
                (me._state ? deferred.resolve : deferred.reject)(me._value);
                return;
            }
            try {
                ret = cb(me._value);
            }
            catch (e) {
                deferred.reject(e);
                return;
            }
            deferred.resolve(ret);
        });
    }
    /**
     * @return {?}
     */
    function finale() {
        /** @type {?} */
        var i;
        /** @type {?} */
        var len;
        /*jslint plusplus:true */
        for (i = 0, len = this._deferreds.length; i < len; i++) {
            handle.call(this, this._deferreds[i]);
        }
        this._deferreds = null;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    function reject(newValue) {
        this._state = false;
        this._value = newValue;
        finale.call(this);
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    function resolve(newValue) {
        try {
            //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === this) {
                throw new TypeError('A promise cannot be resolved with itself.');
            }
            if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                /** @type {?} */
                var then = newValue.then;
                if (typeof then === 'function') {
                    doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                    return;
                }
            }
            this._state = true;
            this._value = newValue;
            finale.call(this);
        }
        catch (e) {
            reject.call(this, e);
        }
    }
    /**
     * Defines a dummy promise, which simulates the behavior of a normal Promise
     * but is suitable used in synchronous call.
     * This resulted object is also a jQuery deferred object, therefore,
     * it will be resolved by the jQuery deferred object if it is a resolved value in
     * the jQuery deferred object.
     * @template T
     * @param {?} fn
     * @return {?}
     */
    function DummyPromise(fn) {
        if (typeof this !== 'object') {
            throw new TypeError('Promises must be constructed via new');
        }
        if (typeof fn !== 'function') {
            throw new TypeError('not a function');
        }
        this._state = null;
        this._value = null;
        this._deferreds = [];
        doResolve(fn, bind(resolve, this), bind(reject, this));
    }
    /**
     * @param {?} onFulfilled
     * @param {?} onRejected
     * @param {?} resolve
     * @param {?} reject
     * @return {?}
     */
    function Handler(onFulfilled, onRejected, resolve, reject) {
        this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
        this.onRejected = typeof onRejected === 'function' ? onRejected : null;
        this.resolve = resolve;
        this.reject = reject;
    }
    DummyPromise.prototype['catch'] = function (onRejected) {
        return this.then(null, onRejected);
    };
    DummyPromise.prototype.then = function (onFulfilled, onRejected) {
        /** @type {?} */
        var me = this;
        return new DummyPromise(function (resolve, reject) {
            handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
        });
    };
    DummyPromise.prototype.all = function (arrayArg) {
        /** @type {?} */
        var args = Array.prototype.slice.call(arguments.length === 1 && isArray$1(arrayArg) ? arrayArg : arguments);
        return new DummyPromise(function (resolve, reject) {
            if (args.length === 0) {
                return resolve([]);
            }
            /** @type {?} */
            var remaining = args.length;
            /** @type {?} */
            var i;
            /**
             * @param {?} i
             * @param {?} val
             * @return {?}
             */
            function res(i, val) {
                try {
                    if (val && (typeof val === 'object' || typeof val === 'function')) {
                        /** @type {?} */
                        var then = val.then;
                        if (typeof then === 'function') {
                            then.call(val, function (val) { res(i, val); }, reject);
                            return;
                        }
                    }
                    args[i] = val;
                    /*jslint plusplus: true */
                    if (--remaining === 0) {
                        resolve(args);
                    }
                }
                catch (ex) {
                    reject(ex);
                }
            }
            /*jslint plusplus: true */ for (i = 0; i < args.length; i++) {
                res(i, args[i]);
            }
        });
    };
    DummyPromise.prototype.resolve = function (value) {
        if (value && typeof value === 'object' && value.constructor === DummyPromise) {
            return value;
        }
        return new DummyPromise(function (resolve) {
            resolve(value);
        });
    };
    DummyPromise.prototype.reject = function (value) {
        /*jslint unparam: true */
        return new DummyPromise(function (resolve, reject) {
            reject(value);
        });
    };
    DummyPromise.prototype.race = function (values) {
        return new DummyPromise(function (resolve, reject) {
            /** @type {?} */
            var i;
            /** @type {?} */
            var len;
            /*jslint plusplus: true */
            for (i = 0, len = values.length; i < len; i++) {
                values[i].then(resolve, reject);
            }
        });
    };
    DummyPromise.prototype.always = function (onFulfilled) {
        return this.then(onFulfilled, onFulfilled);
    };
    DummyPromise.prototype.done = function (onFulfilled) {
        return this.then(onFulfilled);
    };
    DummyPromise.prototype.fail = function (onRejected) {
        return this.then(null, onRejected);
    };
    DummyPromise.prototype.promise = function () {
        return this;
    };
    DummyPromise.prototype.progress = function () {
        return this;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Lifts a single value or a function into a Promise-like object.
     * Provides a method of wrapping a single value or a function  into a Promise,
     * in order that the following operation
     * may conform to the standard Promise operation.
     * In some scenario, we may first attempt to get a value from cache.
     * Motivation.
     * In this case, we need to return a value. However, if the value is
     * not available in the cache, we may have to go ahead to load it
     * asynchronously. Loading a value asynchronously usually returns
     * a Promise. To untify the return from two cases, we
     * escalate a single value into a Promise.
     * @template T
     * @param {?} value
     * @param {?} thisArg
     * @return {?}
     */
    function lift(value, thisArg) {
        /*jslint unparam: true */
        return new DummyPromise(function (resolve, reject) {
            if (isFunction(value)) {
                /** @type {?} */
                var restArgs = [];
                /*jslint plusplus: true */
                for (var i = 2; i < arguments.length; i++) {
                    restArgs.push(arguments[i]);
                }
                /** @type {?} */
                var ret = value.apply(thisArg || null, restArgs);
                resolve(ret);
            }
            else {
                resolve(value);
            }
        });
    }
    /**
     * Lifts a value into an rejected state.
     * @template T
     * @param {?} value
     * @return {?}
     */
    function liftIntoReject(value) {
        return new DummyPromise(function (resolve, reject) {
            /*jslint unparam: true */
            reject(value);
        });
    }
    /**
     * Converts a given promise into another promise which ensures that
     * the given guard evalutes to be true from the state of the given promise.
     * @template T
     * @param {?} promise
     * @param {?} guard
     * @return {?}
     */
    function liftWithGuard(promise, guard) {
        return promise.then(function (data) {
            return new DummyPromise(function (resolve, reject) {
                if (guard(data)) {
                    resolve(data);
                }
                else {
                    reject(data);
                }
            });
        });
    }
    /**
     * Settles a promise.
     * @template T
     * @param {?} promise
     * @return {?}
     */
    function settle(promise) {
        return new DummyPromise(function (resolve) {
            promise.then(function (value) {
                resolve({
                    state: 'fulfilled',
                    data: value
                });
            }, function () {
                resolve({
                    state: 'rejected'
                });
            });
        });
    }
    /**
     * Converts the given promise into a promise which does not reject anything.
     * @template T
     * @param {?} promise
     * @param {?} guard
     * @return {?}
     */
    function liftToPredicate(promise, guard) {
        return new DummyPromise(function (resolve, reject) {
            /*jslint unparam: true */
            promise.then(function (data) {
                resolve(guard(data));
            }, function () {
                resolve(false);
            });
        });
    }
    /**
     * Transforms a given promise with additonal pipeline processing.
     * Specifically, in this method, compared to the given promise, the return
     * promise contains validating and adpating stages.
     * @template T, U
     * @param {?} readerPromise
     * @param {?} settings
     * @return {?}
     */
    function readerPipeline(readerPromise, settings) {
        return readerPromise
            .then(function (data) {
            if (settings.validator) {
                if (!settings.validator(data)) {
                    throw new Error('Data is not valid: ' + data);
                }
            }
            return data;
        })
            .then(function (data) {
            return settings.adaptor(data);
        });
    }
    /**
     * Transforms a given promise into one promise with our own implementation.
     * @template T
     * @param {?} promise
     * @return {?}
     */
    function transform(promise) {
        return new DummyPromise(function (resolve, reject) {
            promise.then(resolve, reject);
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Extends a given promise into a deferred object of jQuery.
     * With this extension, we are able to chain together jQuery deferred
     * objects (which are also promise objects.)
     * @param {?} promise
     * @return {?}
     */
    function tojQueryDeferred(promise) {
        if (!promise.always) {
            promise.always = function (onFulfilled) {
                return this.then(onFulfilled, onFulfilled);
            };
        }
        if (!promise.done) {
            promise.done = function (onFulfilled) {
                return this.then(onFulfilled);
            };
        }
        if (!promise.fail) {
            promise.fail = function (onRejected) {
                return this.then(null, onRejected);
            };
        }
        if (!promise.progress) {
            promise.progress = function () {
                return this;
            };
        }
        if (!promise.promise) {
            promise.promise = function () {
                return this;
            };
        }
        return promise;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.guid = guid;
    exports.getRandomInt = getRandomInt;
    exports.urlEncodePair = urlEncodePair;
    exports.urlEncode = urlEncode;
    exports.getParamByName = getParamByName;
    exports.getQueryParamByName = getQueryParamByName;
    exports.getHashParamByName = getHashParamByName;
    exports.pushArray = pushArray;
    exports.makeArray = makeArray;
    exports.replace = replace;
    exports.applyEscape = applyEscape;
    exports.reverseEscape = reverseEscape;
    exports.diff = diff;
    exports.hashCode = hashCode;
    exports.hashMember = hashMember;
    exports.safeParseString = safeParseString;
    exports.safeParseInt = safeParseInt;
    exports.safeParseFloat = safeParseFloat;
    exports.safeParseBool = safeParseBool;
    exports.convertible = convertible;
    exports.convert = convert;
    exports.isBoolean = isBoolean;
    exports.isNumber = isNumber;
    exports.isString = isString;
    exports.isSymbol = isSymbol;
    exports.isNull = isNull;
    exports.isUndefined = isUndefined;
    exports.isArray = isArray;
    exports.isObject = isObject;
    exports.isFunction = isFunction;
    exports.tyBool = tyBool;
    exports.tyNull = tyNull;
    exports.tyUndefined = tyUndefined;
    exports.tyNumber = tyNumber;
    exports.tyString = tyString;
    exports.tySymbol = tySymbol;
    exports.tyObject = tyObject;
    exports.tyArray = tyArray;
    exports.tyFunction = tyFunction;
    exports.defaultValue = defaultValue;
    exports.ok = ok;
    exports.getType = getType;
    exports.assert = assert;
    exports.lift = lift;
    exports.liftIntoReject = liftIntoReject;
    exports.liftWithGuard = liftWithGuard;
    exports.settle = settle;
    exports.liftToPredicate = liftToPredicate;
    exports.readerPipeline = readerPipeline;
    exports.transform = transform;
    exports.tojQueryDeferred = tojQueryDeferred;
    exports.DummyPromise = DummyPromise;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtZmUtdXRpbGl0aWVzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL21hdGgudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy91cmwudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9hcnIudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9zdHIudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9zZXQudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90eXBpbmcvdHlwZS1jaGVja2VyLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvdG9vbHMvaGFzaC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3R5cGluZy90eXBlLWNhc3QudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy9wcm9taXNlL3Byb21pc2UtbGlrZS50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Byb21pc2UvbW9uYWRpYy1vcGVyYXRpb25zLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvcHJvbWlzZS9pbnRlci1vcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR2VuZXJhdGVzIGEgZ3VpZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkKCkge1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICBjb25zdCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XHJcbiAgICAgICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDcgfCAweDgpKS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIHRoZSBnaXZlbiByYW5nZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuIiwiLyoqXHJcbiAqIEVuY29kZXMgYSBrZXktdmFsdWUgcGFpciwgd2hlcmUgYSB2YWx1ZSBjYW4gYmUgYW4gYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXJsRW5jb2RlUGFpcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc3RyOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnW109JyArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmNvZGVzIGFuIG9iamVjdCBpbiB3d3cgZm9ybS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmxFbmNvZGUoZGF0YTogT2JqZWN0KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHN0cjogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgZm9yIChsZXQgcCBpbiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgdXJsRW5jb2RlUGFpcihwLCBkYXRhW3BdLCBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1CeU5hbWUobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyMmXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbUJ5TmFtZShuYW1lOiBzdHJpbmcsIHVybD86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRQYXJhbUJ5TmFtZShuYW1lLCB1cmwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaFBhcmFtQnlOYW1lKG5hbWU6IHN0cmluZywgdXJsPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldFBhcmFtQnlOYW1lKG5hbWUsIHVybCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFB1c2hzIGFuIGFycmF5IG9yIGEgc2luZ2xlIHZhbHVlIGludG8gdGhlIHRoaXNBcmc7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHVzaEFycmF5PFQ+KHRoaXNBcmc6IEFycmF5PFQ+LCBzcmM6IEFycmF5PFQ+IHwgVCk6IHZvaWQge1xyXG4gICAgaWYgKCEoc3JjIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgdGhpc0FyZy5wdXNoKHNyYyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNyYy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICB0aGlzQXJnLnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFR1cm5zIHRoZSB2YWx1ZXMgaW4gYW4gb2JqZWN0IGludG8gYW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXJyYXkobzogT2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGZvciAobGV0IG4gaW4gbykge1xyXG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KG4pKSB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKG9bbl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJlcGxhY2VzIHRoZSBwbGFjZWhvbGRlcnMgYSBnaXZlbiBmb3JtYXQgd2l0aCB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGZvcm1hdDogc3RyaW5nLCBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xyXG4gICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC9cXHsoW2EtekEtWl0rKVxcfS9nLCBmdW5jdGlvbihzLCBrZXkpIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpID8gJycgOiBwYXJhbXNba2V5XTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gb25lIHdoZXJlXHJcbiAqIHNvbWUgY2hhcmFjdGVycyBoYXZlIGJlZW4gcHJvcGVybHkgcmVwbGFjZWQgd2l0aFxyXG4gKiB0aGVpciBlc2NhcGUgdmVyc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFc2NhcGUoZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGRhdGEgPSBkYXRhXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXFxcXS9nLCAnXFxcXFxcXFwnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxcIl0vZywgJ1xcXFxcXFwiJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcL10vZywgJ1xcXFwvJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcYl0vZywgJ1xcXFxiJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcZl0vZywgJ1xcXFxmJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcbl0vZywgJ1xcXFxuJylcclxuICAgICAgICAucmVwbGFjZSgvW1xccl0vZywgJ1xcXFxyJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcdF0vZywgJ1xcXFx0Jyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVuZG8gdGhlIHdvcmsgYnkgYXBwbHlFc2NhcGUuIEl0IHJlcGxhY2VzIHRoZSBlc2NhcGVcclxuICogY2hhcmFjdGVycyB3aXRoIHRoZWlyIHVuZXNjYXBlZCBvbmVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VFc2NhcGUoZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGRhdGEgPSBkYXRhXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcXCIvZywgJ1xcXCInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFwvL2csICdcXC8nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxiL2csICdcXGInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxmL2csICdcXGYnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxuL2csICdcXG4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxyL2csICdcXHInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFx0L2csICdcXHQnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiIsIi8vIGZpcnN0U2V0IC0gc2Vjb25kU2V0IChhbnkgZWxlbWVudCBub3QgaW4gc2Vjb25kU2V0KVxyXG5leHBvcnQgZnVuY3Rpb24gZGlmZjxULCBVPihmaXJzdFNldDogQXJyYXk8VD4sXHJcbiAgICBzZWNvbmRTZXQ6IEFycmF5PFU+LFxyXG4gICAgcHJlZGljYXRlOiAoZmlyc3RFbGVtOiBULCBzZWNvbmRFbGVtOiBVKSA9PiBib29sZWFuKTogQXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIGZpcnN0U2V0LmZpbHRlcigoeDogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhc2Vjb25kU2V0LnNvbWUoKHk6IFUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZWRpY2F0ZSh4LCB5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCIvKlxyXG5CYXNpY1R5cGVzIDo9IFxyXG4gICAgYm9vbGVhbiBcclxuICB8IG51bWJlciBcclxuICB8IHN0cmluZyBcclxuICB8IHN5bWJvbFxyXG4gIHwgbnVsbFxyXG4gIHwgdW5kZWZpbmVkXHJcbiAgfCBhcnJheSBcclxuICB8IG9iamVjdFxyXG4gIHwgZnVuY3Rpb25cclxuKi9cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHg6IGFueSk6IHggaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdib29sZWFuJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHg6IGFueSk6IHggaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh4OiBhbnkpOiB4IGlzIHN0cmluZyB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeDogYW55KTogeCBpcyBzeW1ib2wge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3ltYm9sJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh4OiBhbnkpOiB4IGlzIG51bGwge1xyXG4gICAgcmV0dXJuIHggPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh4OiBhbnkpOiB4IGlzIHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh4OiBhbnkpOiB4IGlzIEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHggaW5zdGFuY2VvZiBBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHg6IGFueSk6IHggaXMgT2JqZWN0IHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHg6IGFueSk6IHggaXMgRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUeXBlRGVmIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHZhbDogYW55LFxyXG4gICAgcHJlZDogKGFueSkgPT4gYm9vbGVhblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5Qm9vbDogSVR5cGVEZWYgPSB7IG5hbWU6ICdCb29sZWFuJywgdmFsOiBmYWxzZSwgcHJlZDogaXNCb29sZWFuIH07XHJcbmV4cG9ydCBjb25zdCB0eU51bGw6IElUeXBlRGVmID0geyBuYW1lOiAnTnVsbCcsIHZhbDogbnVsbCwgcHJlZDogaXNOdWxsIH07XHJcbmV4cG9ydCBjb25zdCB0eVVuZGVmaW5lZDogSVR5cGVEZWYgPSB7IG5hbWU6ICdVbmRlZmluZWQnLCB2YWw6IHVuZGVmaW5lZCwgcHJlZDogaXNVbmRlZmluZWQgfTtcclxuZXhwb3J0IGNvbnN0IHR5TnVtYmVyOiBJVHlwZURlZiA9IHsgbmFtZTogJ051bWJlcicsIHZhbDogMCwgcHJlZDogaXNOdW1iZXIgfTtcclxuZXhwb3J0IGNvbnN0IHR5U3RyaW5nOiBJVHlwZURlZiA9IHsgbmFtZTogJ1N0cmluZycsIHZhbDogJycsIHByZWQ6IGlzU3RyaW5nIH07XHJcbmV4cG9ydCBjb25zdCB0eVN5bWJvbDogSVR5cGVEZWYgPSB7IG5hbWU6ICdTeW1ib2wnLCB2YWw6IG51bGwsIHByZWQ6IGlzU3ltYm9sIH07XHJcbmV4cG9ydCBjb25zdCB0eU9iamVjdDogSVR5cGVEZWYgPSB7IG5hbWU6ICdPYmplY3QnLCB2YWw6IGZ1bmN0aW9uKCkgeyByZXR1cm4ge307IH0sIHByZWQ6IGlzT2JqZWN0IH07XHJcbmV4cG9ydCBjb25zdCB0eUFycmF5OiBJVHlwZURlZiA9IHsgbmFtZTogJ0FycmF5JywgdmFsOiBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9LCBwcmVkOiBpc0FycmF5IH07XHJcbmV4cG9ydCBjb25zdCB0eUZ1bmN0aW9uOiBJVHlwZURlZiA9IHsgbmFtZTogJ0Z1bmN0aW9uJywgdmFsOiBmdW5jdGlvbigpIHsgfSwgcHJlZDogaXNGdW5jdGlvbiB9O1xyXG5cclxuLyoqXHJcbiAqICBQcmVkZWZpbmVkIHR5cGVzIGFuZCB0aGVpciBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuY29uc3QgcHJlRGVmaW5lZFR5cGVzOiB7IFtrZXk6IHN0cmluZ106IElUeXBlRGVmIH0gPSB7XHJcbiAgICB0eUJvb2w6IHR5Qm9vbCxcclxuICAgIHR5TnVsbDogdHlOdWxsLFxyXG4gICAgdHlVbmRlZmluZWQ6IHR5VW5kZWZpbmVkLFxyXG4gICAgdHlOdW1iZXI6IHR5TnVtYmVyLFxyXG4gICAgdHlTdHJpbmc6IHR5U3RyaW5nLFxyXG4gICAgdHlTeW1ib2w6IHR5U3ltYm9sLFxyXG4gICAgdHlPYmplY3Q6IHR5T2JqZWN0LFxyXG4gICAgdHlBcnJheTogdHlBcnJheSxcclxuICAgIHR5RnVuY3Rpb246IHR5RnVuY3Rpb25cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGEgZ2l2ZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWUodHk6IElUeXBlRGVmKTogYW55IHtcclxuICAgIGxldCB2YWwgPSB0eS52YWw7XHJcbiAgICBpZiAodHkgIT09IHR5RnVuY3Rpb24gJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhbCA9IHZhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFR5cGUgY2hlY2tzIGlmIGEgZ2l2ZW4gdmFsdWUgaXMgdHlwZSBvZiB0aGUgZ2l2ZW4gdHlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvayh2YWx1ZTogYW55LCB0eTogSVR5cGVEZWYpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eS5wcmVkKHZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHR5cGUgZm9yIHRoZSBnaXZlbiB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlOiBhbnkpOiBJVHlwZURlZiB7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHByZURlZmluZWRUeXBlcykge1xyXG4gICAgICAgIGlmIChvayh2YWx1ZSwgcHJlRGVmaW5lZFR5cGVzW3Byb3BdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlRGVmaW5lZFR5cGVzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KHZhbHVlOiBhbnksIHR5OiBJVHlwZURlZik6IHZvaWQge1xyXG4gICAgaWYgKG9rKHZhbHVlLCB0eSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3R5cGUgY2hlY2sgZXJyb3I6IGV4cHRlY3RlZCB0eXBlIGlzICcgK1xyXG4gICAgICAgIHR5ICsgJyBidXQgZ2l2ZW4gdHlwZSBpcyAnICsgdHlwZW9mIHZhbHVlKTtcclxufVxyXG4iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFByb3ZpZGVzIHV0aWxpdGllcyBmb3IgY29tcHV0aW5nIGhhc2ggdmFsdWVzXG4gKi9cblxuaW1wb3J0ICogYXMgdHlwZUNoZWNrZXIgZnJvbSAnLi4vdHlwaW5nL3R5cGUtY2hlY2tlcic7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhhc2ggY29kZSBmb3IgYSBnaXZlbiB2YWx1ZS5cbiAqIFRoaXMgbWV0aG9kIHRha2VzIGludG8gYWNjb3VudCB0aGUgdHlwZSBvZiB0aGUgZ2l2ZW5cbiAqIHZhbHVlIHdoZW4gZ2VuZXJhdGluZyBpdHMgaGFzaCBjb2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaENvZGUodmFsdWU6IGFueSk6IG51bWJlciB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlCb29sKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID8gMSA6IDA7XG4gICAgfSBlbHNlIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgIH1cbiAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBjaHIgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBoYXNoIGNvZGUgZm9yIGEgbWVtYmVyIG9mIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaGFzaFByaW1pdGl2ZU1lbWJlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGNvbmZpZ3VyYXRpb246IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pIHtcbiAgICBjb25zdCBjb2RlID0gaGFzaENvZGUodmFsdWUpO1xuICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBjb25maWd1cmF0aW9uW25hbWVdO1xuICAgICAgICBpZiAoYml0cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGUgPDwgY29uZmlndXJhdGlvbltuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29kZTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGFzaCBjb2RlIGZvciBhIG1lbWJlciBvZiBhbiBvYmplY3QsIGJhc2VkIG9uXG4gKiB0aGUgZ2l2ZW4gbWVtYmVyIG1lbWJlciwgdGhlIHZhbHVlIHRvIGJlIGhhc2hlZCwgYW5kIHRoZSBjb25maWd1cmF0aW9uXG4gKiBhYm91dCBob3cgZWFjaCBtZW1iZXIgY29udHJpYnV0ZXMgdG8gdGhlIGVuaXJlIGhhc2ggY29kZSBvZiB0aGVcbiAqIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2hNZW1iZXIobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBjb25maWd1cmF0aW9uOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUFycmF5KSkge1xuICAgICAgICBsZXQgY29kZSA9IDA7XG4gICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlICsgaGFzaFByaW1pdGl2ZU1lbWJlcihuYW1lLCB2YWx1ZVtpXSwgY29uZmlndXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWUsIHZhbHVlLCBjb25maWd1cmF0aW9uKTtcbn1cbiIsImltcG9ydCAqIGFzIHR5cGVDaGVja2VyIGZyb20gJy4vdHlwZS1jaGVja2VyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VTdHJpbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgZ2l2ZW4gdmFsdWUgaW50byBhbiBpbnRlZ2VyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUludCh2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgZ2l2ZW4gdmFsdWUgaW50byBhIGZsb2F0IG51bWJlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VGbG9hdCh2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gMC4wMDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMC4wMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIGdpdmVuIHZhbHVlIGludG8gYSBib29sIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUJvb2wodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlCb29sKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgaWYgYSBnaXZlbiB2YWx1ZSBjYW4gYmUgc2FmZWx5IGNvbnZlcnRlZCBpbnRvIHRoZSBnaXZlbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRpYmxlKHZhbHVlOiBhbnksIHR5OiB0eXBlQ2hlY2tlci5JVHlwZURlZik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZUNoZWNrZXIuaXNOdWxsKHZhbHVlKSB8fCB0eXBlQ2hlY2tlci5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eU51bWJlciAmJiBpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogcmVmaW5lXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhZmVseSBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgaW50byBhIHZhbHVlIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnQodmFsdWU6IGFueSwgdHk6IHR5cGVDaGVja2VyLklUeXBlRGVmKTogYW55IHtcclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gc2FmZVBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eUJvb2wpIHtcclxuICAgICAgICByZXR1cm4gc2FmZVBhcnNlQm9vbCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5U3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIGdpdmVuIHR5cGUnKTtcclxufVxyXG4iLCIvLyBcbi8vIEF1dGhvcjo6IFRvbSBUYW5nIDxwcmluY2lwbGV3YXJlQGdtYWlsLmNvbT5cbi8vIENvcHlyaWdodDo6IENvcHlyaWdodCAoYykgMjAxNywgVG9tIFRhbmdcbi8vIFxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG4vLyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4vLyBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbi8vIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vIFxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbi8vIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy8gXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuLy8gRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuLy8gTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuLy8gTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuLy8gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vIFxuLy8gRXhjZXB0IGFzIGNvbnRhaW5lZCBpbiB0aGlzIG5vdGljZSwgdGhlIG5hbWUocykgb2YgdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gaG9sZGVycyBzaGFsbCBub3QgYmUgdXNlZCBpbiBhZHZlcnRpc2luZyBvciBvdGhlcndpc2UgdG8gcHJvbW90ZSB0aGVcbi8vIHNhbGUsIHVzZSBvciBvdGhlciBkZWFsaW5ncyBpbiB0aGlzIFNvZnR3YXJlIHdpdGhvdXQgcHJpb3Igd3JpdHRlblxuLy8gYXV0aG9yaXphdGlvbi5cblxuZnVuY3Rpb24gYXNhcChmbikge1xuICAgIHNldFRpbWVvdXQoZm4sIDEpO1xufVxuXG5mdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiOyB9O1xuXG4vKipcbiAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG4gKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cbiAqXG4gKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG4gKi9cbmZ1bmN0aW9uIGRvUmVzb2x2ZShmbiwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGZuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgb25GdWxmaWxsZWQodmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBvblJlamVjdGVkKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIG9uUmVqZWN0ZWQoZXgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlKGRlZmVycmVkKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjYiwgcmV0O1xuICAgICAgICBjYiA9IG1lLl9zdGF0ZSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICAgICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAgICAgICAobWUuX3N0YXRlID8gZGVmZXJyZWQucmVzb2x2ZSA6IGRlZmVycmVkLnJlamVjdCkobWUuX3ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0ID0gY2IobWUuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUocmV0KTtcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBmaW5hbGUoKSB7XG4gICAgdmFyIGksIGxlbjtcbiAgICAvKmpzbGludCBwbHVzcGx1czp0cnVlICovXG4gICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGhhbmRsZS5jYWxsKHRoaXMsIHRoaXMuX2RlZmVycmVkc1tpXSk7XG4gICAgfVxuICAgIHRoaXMuX2RlZmVycmVkcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChuZXdWYWx1ZSkge1xuICAgIHRoaXMuX3N0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShuZXdWYWx1ZSkge1xuICAgIHRyeSB7IC8vUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICB2YXIgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIGJpbmQocmVzb2x2ZSwgdGhpcyksIGJpbmQocmVqZWN0LCB0aGlzKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgZmluYWxlLmNhbGwodGhpcyk7XG4gICAgfSBjYXRjaCAoZSkgeyByZWplY3QuY2FsbCh0aGlzLCBlKTsgfVxufVxuXG4vKipcbiAqIERlZmluZXMgYSBkdW1teSBwcm9taXNlLCB3aGljaCBzaW11bGF0ZXMgdGhlIGJlaGF2aW9yIG9mIGEgbm9ybWFsIFByb21pc2VcbiAqIGJ1dCBpcyBzdWl0YWJsZSB1c2VkIGluIHN5bmNocm9ub3VzIGNhbGwuXG4gKiBUaGlzIHJlc3VsdGVkIG9iamVjdCBpcyBhbHNvIGEgalF1ZXJ5IGRlZmVycmVkIG9iamVjdCwgdGhlcmVmb3JlLFxuICogaXQgd2lsbCBiZSByZXNvbHZlZCBieSB0aGUgalF1ZXJ5IGRlZmVycmVkIG9iamVjdCBpZiBpdCBpcyBhIHJlc29sdmVkIHZhbHVlIGluXG4gKiB0aGUgalF1ZXJ5IGRlZmVycmVkIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIER1bW15UHJvbWlzZTxUPihmbjogKHJlc29sdmU6ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPykgPT4gdm9pZCkgPT4gdm9pZCkge1xuICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUgPSBudWxsO1xuICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcblxuICAgIGRvUmVzb2x2ZShmbiwgYmluZChyZXNvbHZlLCB0aGlzKSwgYmluZChyZWplY3QsIHRoaXMpKTtcbn1cblxuXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbn1cblxuXG5EdW1teVByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaGFuZGxlLmNhbGwobWUsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCByZXNvbHZlLCByZWplY3QpKTtcbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oYXJyYXlBcmcpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShhcnJheUFyZykgPyBhcnJheUFyZyA6IGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoLCBpO1xuICAgICAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbCwgZnVuY3Rpb24odmFsKSB7IHJlcyhpLCB2YWwpOyB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSB2YWw7XG5cbiAgICAgICAgICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xuICAgICAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqLyAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IER1bW15UHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlamVjdCh2YWx1ZSk7XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnJhY2UgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGksIGxlbjtcbiAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0udGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmFsd2F5cyA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCwgb25GdWxmaWxsZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuIiwiLy8gXHJcbi8vIEF1dGhvcjo6IFRvbSBUYW5nIDxwcmluY2lwbGV3YXJlQGdtYWlsLmNvbT5cclxuLy8gQ29weXJpZ2h0OjogQ29weXJpZ2h0IChjKSAyMDE3LCBUb20gVGFuZ1xyXG4vLyBcclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXHJcbi8vIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cclxuLy8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXHJcbi8vIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy8gXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXHJcbi8vIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vLyBcclxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcclxuLy8gRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXHJcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcbi8vIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcclxuLy8gTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxyXG4vLyBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cclxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbi8vIFxyXG4vLyBFeGNlcHQgYXMgY29udGFpbmVkIGluIHRoaXMgbm90aWNlLCB0aGUgbmFtZShzKSBvZiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vIGhvbGRlcnMgc2hhbGwgbm90IGJlIHVzZWQgaW4gYWR2ZXJ0aXNpbmcgb3Igb3RoZXJ3aXNlIHRvIHByb21vdGUgdGhlXHJcbi8vIHNhbGUsIHVzZSBvciBvdGhlciBkZWFsaW5ncyBpbiB0aGlzIFNvZnR3YXJlIHdpdGhvdXQgcHJpb3Igd3JpdHRlblxyXG4vLyBhdXRob3JpemF0aW9uLlxyXG5cclxuXHJcbmltcG9ydCB7IER1bW15UHJvbWlzZSB9IGZyb20gJy4vcHJvbWlzZS1saWtlJztcclxuaW1wb3J0ICogYXMgdHlwZUNoZWNrZXIgZnJvbSAnLi4vdHlwaW5nL3R5cGUtY2hlY2tlcic7XHJcblxyXG4vKipcclxuICogTGlmdHMgYSBzaW5nbGUgdmFsdWUgb3IgYSBmdW5jdGlvbiBpbnRvIGEgUHJvbWlzZS1saWtlIG9iamVjdC5cclxuICogUHJvdmlkZXMgYSBtZXRob2Qgb2Ygd3JhcHBpbmcgYSBzaW5nbGUgdmFsdWUgb3IgYSBmdW5jdGlvbiAgaW50byBhIFByb21pc2UsXHJcbiAqIGluIG9yZGVyIHRoYXQgdGhlIGZvbGxvd2luZyBvcGVyYXRpb24gXHJcbiAqIG1heSBjb25mb3JtIHRvIHRoZSBzdGFuZGFyZCBQcm9taXNlIG9wZXJhdGlvbi5cclxuICogSW4gc29tZSBzY2VuYXJpbywgd2UgbWF5IGZpcnN0IGF0dGVtcHQgdG8gZ2V0IGEgdmFsdWUgZnJvbSBjYWNoZS5cclxuICogTW90aXZhdGlvbi5cclxuICogSW4gdGhpcyBjYXNlLCB3ZSBuZWVkIHRvIHJldHVybiBhIHZhbHVlLiBIb3dldmVyLCBpZiB0aGUgdmFsdWUgaXNcclxuICogbm90IGF2YWlsYWJsZSBpbiB0aGUgY2FjaGUsIHdlIG1heSBoYXZlIHRvIGdvIGFoZWFkIHRvIGxvYWQgaXRcclxuICogYXN5bmNocm9ub3VzbHkuIExvYWRpbmcgYSB2YWx1ZSBhc3luY2hyb25vdXNseSB1c3VhbGx5IHJldHVybnNcclxuICogYSBQcm9taXNlLiBUbyB1bnRpZnkgdGhlIHJldHVybiBmcm9tIHR3byBjYXNlcywgd2VcclxuICogZXNjYWxhdGUgYSBzaW5nbGUgdmFsdWUgaW50byBhIFByb21pc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdDxUPih2YWx1ZTogVCwgdGhpc0FyZzogT2JqZWN0KTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgaWYgKHR5cGVDaGVja2VyLmlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3RBcmdzID0gW107XHJcbiAgICAgICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0QXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gdmFsdWUuYXBwbHkodGhpc0FyZyB8fCBudWxsLCByZXN0QXJncyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpZnRzIGEgdmFsdWUgaW50byBhbiByZWplY3RlZCBzdGF0ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0SW50b1JlamVjdDxUPih2YWx1ZTogVCk6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgICAgICByZWplY3QodmFsdWUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGdpdmVuIHByb21pc2UgaW50byBhbm90aGVyIHByb21pc2Ugd2hpY2ggZW5zdXJlcyB0aGF0XHJcbiAqIHRoZSBnaXZlbiBndWFyZCBldmFsdXRlcyB0byBiZSB0cnVlIGZyb20gdGhlIHN0YXRlIG9mIHRoZSBnaXZlbiBwcm9taXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnRXaXRoR3VhcmQ8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4sIGd1YXJkOiAoeDogVCkgPT4gYm9vbGVhbik6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZ3VhcmQoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0dGxlcyBhIHByb21pc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGxlPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+KTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAnZnVsZmlsbGVkJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAncmVqZWN0ZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gcHJvbWlzZSBpbnRvIGEgcHJvbWlzZSB3aGljaCBkb2VzIG5vdCByZWplY3QgYW55dGhpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdFRvUHJlZGljYXRlPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+LCBndWFyZDogKHg6IFQpID0+IGJvb2xlYW4pOiBQcm9taXNlTGlrZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShndWFyZChkYXRhKSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQaXBlbGluZVNldHRpbmdzPFU+IHtcclxuICAgIHZhbGlkYXRvcj86ICh4KSA9PiBib29sZWFuLFxyXG4gICAgYWRhcHRvcjogKHgpID0+IFVcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYSBnaXZlbiBwcm9taXNlIHdpdGggYWRkaXRvbmFsIHBpcGVsaW5lIHByb2Nlc3NpbmcuXHJcbiAqIFNwZWNpZmljYWxseSwgaW4gdGhpcyBtZXRob2QsIGNvbXBhcmVkIHRvIHRoZSBnaXZlbiBwcm9taXNlLCB0aGUgcmV0dXJuXHJcbiAqIHByb21pc2UgY29udGFpbnMgdmFsaWRhdGluZyBhbmQgYWRwYXRpbmcgc3RhZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRlclBpcGVsaW5lPFQsIFU+KHJlYWRlclByb21pc2U6IFByb21pc2VMaWtlPFQ+LCBzZXR0aW5nczogSVBpcGVsaW5lU2V0dGluZ3M8VT4pIHtcclxuICAgIHJldHVybiByZWFkZXJQcm9taXNlXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzLnZhbGlkYXRvcihkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBpcyBub3QgdmFsaWQ6ICcgKyBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLmFkYXB0b3IoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIGEgZ2l2ZW4gcHJvbWlzZSBpbnRvIG9uZSBwcm9taXNlIHdpdGggb3VyIG93biBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm08VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4pOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUHJvdmlkZXMgdXRpbGl0aWVzIGZvciBtYWtpbmcgaW50ZXJvcGVyYWJsZSB0aGUgcHJvbWlzZS1saWtlIG9iamVjdHNcbiAqIGZyb20gZGlmZmVyZW50IG1vZHVsZXMuXG4gKi9cbi8qKlxuICogRXh0ZW5kcyBhIGdpdmVuIHByb21pc2UgaW50byBhIGRlZmVycmVkIG9iamVjdCBvZiBqUXVlcnkuXG4gKiBXaXRoIHRoaXMgZXh0ZW5zaW9uLCB3ZSBhcmUgYWJsZSB0byBjaGFpbiB0b2dldGhlciBqUXVlcnkgZGVmZXJyZWRcbiAqIG9iamVjdHMgKHdoaWNoIGFyZSBhbHNvIHByb21pc2Ugb2JqZWN0cy4pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2pRdWVyeURlZmVycmVkKHByb21pc2UpIHtcbiAgICBpZiAoIXByb21pc2UuYWx3YXlzKSB7XG4gICAgICAgIHByb21pc2UuYWx3YXlzID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQsIG9uRnVsZmlsbGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLmRvbmUpIHtcbiAgICAgICAgcHJvbWlzZS5kb25lID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UuZmFpbCkge1xuICAgICAgICBwcm9taXNlLmZhaWwgPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UucHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvbWlzZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5wcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UucHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuIl0sIm5hbWVzIjpbInR5cGVDaGVja2VyLm9rIiwidHlwZUNoZWNrZXIudHlCb29sIiwidHlwZUNoZWNrZXIudHlOdW1iZXIiLCJ0eXBlQ2hlY2tlci50eUFycmF5IiwidHlwZUNoZWNrZXIudHlTdHJpbmciLCJ0eXBlQ2hlY2tlci5pc051bGwiLCJ0eXBlQ2hlY2tlci5pc1VuZGVmaW5lZCIsImlzQXJyYXkiLCJ0eXBlQ2hlY2tlci5pc0Z1bmN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBOztRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQzdCLElBQU0sSUFBSSxHQUFHLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDOztZQUMzRSxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6RCxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBS0QsMEJBQTZCLEdBQUcsRUFBRSxHQUFHO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUM1RDs7Ozs7Ozs7Ozs7OztBQ2ZELDJCQUE4QixHQUFXLEVBQUUsS0FBVSxFQUFFLEdBQWtCO1FBQ3JFLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtZQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLFVB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