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
            return secondSet.some(function (y) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtZmUtdXRpbGl0aWVzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL21hdGgudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy91cmwudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9hcnIudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9zdHIudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9zZXQudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90eXBpbmcvdHlwZS1jaGVja2VyLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvdG9vbHMvaGFzaC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3R5cGluZy90eXBlLWNhc3QudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy9wcm9taXNlL3Byb21pc2UtbGlrZS50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Byb21pc2UvbW9uYWRpYy1vcGVyYXRpb25zLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvcHJvbWlzZS9pbnRlci1vcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR2VuZXJhdGVzIGEgZ3VpZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkKCkge1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICBjb25zdCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XHJcbiAgICAgICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDcgfCAweDgpKS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIHRoZSBnaXZlbiByYW5nZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuIiwiLyoqXHJcbiAqIEVuY29kZXMgYSBrZXktdmFsdWUgcGFpciwgd2hlcmUgYSB2YWx1ZSBjYW4gYmUgYW4gYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXJsRW5jb2RlUGFpcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc3RyOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnW109JyArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmNvZGVzIGFuIG9iamVjdCBpbiB3d3cgZm9ybS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmxFbmNvZGUoZGF0YTogT2JqZWN0KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHN0cjogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgZm9yIChsZXQgcCBpbiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgdXJsRW5jb2RlUGFpcihwLCBkYXRhW3BdLCBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1CeU5hbWUobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyMmXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbUJ5TmFtZShuYW1lOiBzdHJpbmcsIHVybD86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRQYXJhbUJ5TmFtZShuYW1lLCB1cmwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaFBhcmFtQnlOYW1lKG5hbWU6IHN0cmluZywgdXJsPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldFBhcmFtQnlOYW1lKG5hbWUsIHVybCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFB1c2hzIGFuIGFycmF5IG9yIGEgc2luZ2xlIHZhbHVlIGludG8gdGhlIHRoaXNBcmc7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHVzaEFycmF5PFQ+KHRoaXNBcmc6IEFycmF5PFQ+LCBzcmM6IEFycmF5PFQ+IHwgVCk6IHZvaWQge1xyXG4gICAgaWYgKCEoc3JjIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgdGhpc0FyZy5wdXNoKHNyYyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNyYy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICB0aGlzQXJnLnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFR1cm5zIHRoZSB2YWx1ZXMgaW4gYW4gb2JqZWN0IGludG8gYW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXJyYXkobzogT2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGZvciAobGV0IG4gaW4gbykge1xyXG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KG4pKSB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKG9bbl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJlcGxhY2VzIHRoZSBwbGFjZWhvbGRlcnMgYSBnaXZlbiBmb3JtYXQgd2l0aCB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGZvcm1hdDogc3RyaW5nLCBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xyXG4gICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC9cXHsoW2EtekEtWl0rKVxcfS9nLCBmdW5jdGlvbihzLCBrZXkpIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpID8gJycgOiBwYXJhbXNba2V5XTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gb25lIHdoZXJlXHJcbiAqIHNvbWUgY2hhcmFjdGVycyBoYXZlIGJlZW4gcHJvcGVybHkgcmVwbGFjZWQgd2l0aFxyXG4gKiB0aGVpciBlc2NhcGUgdmVyc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFc2NhcGUoZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGRhdGEgPSBkYXRhXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXFxcXS9nLCAnXFxcXFxcXFwnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxcIl0vZywgJ1xcXFxcXFwiJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcL10vZywgJ1xcXFwvJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcYl0vZywgJ1xcXFxiJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcZl0vZywgJ1xcXFxmJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcbl0vZywgJ1xcXFxuJylcclxuICAgICAgICAucmVwbGFjZSgvW1xccl0vZywgJ1xcXFxyJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcdF0vZywgJ1xcXFx0Jyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVuZG8gdGhlIHdvcmsgYnkgYXBwbHlFc2NhcGUuIEl0IHJlcGxhY2VzIHRoZSBlc2NhcGVcclxuICogY2hhcmFjdGVycyB3aXRoIHRoZWlyIHVuZXNjYXBlZCBvbmVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VFc2NhcGUoZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGRhdGEgPSBkYXRhXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcXCIvZywgJ1xcXCInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFwvL2csICdcXC8nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxiL2csICdcXGInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxmL2csICdcXGYnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxuL2csICdcXG4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxyL2csICdcXHInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFx0L2csICdcXHQnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiIsIi8vIGZpcnN0U2V0IC0gc2Vjb25kU2V0IChhbnkgZWxlbWVudCBub3QgaW4gc2Vjb25kU2V0KVxyXG5leHBvcnQgZnVuY3Rpb24gZGlmZjxULCBVPihmaXJzdFNldDogQXJyYXk8VD4sXHJcbiAgICBzZWNvbmRTZXQ6IEFycmF5PFU+LFxyXG4gICAgcHJlZGljYXRlOiAoZmlyc3RFbGVtOiBULCBzZWNvbmRFbGVtOiBVKSA9PiBib29sZWFuKTogQXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIGZpcnN0U2V0LmZpbHRlcigoeDogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzZWNvbmRTZXQuc29tZSgoeTogVSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlZGljYXRlKHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsIi8qXHJcbkJhc2ljVHlwZXMgOj0gXHJcbiAgICBib29sZWFuIFxyXG4gIHwgbnVtYmVyIFxyXG4gIHwgc3RyaW5nIFxyXG4gIHwgc3ltYm9sXHJcbiAgfCBudWxsXHJcbiAgfCB1bmRlZmluZWRcclxuICB8IGFycmF5IFxyXG4gIHwgb2JqZWN0XHJcbiAgfCBmdW5jdGlvblxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oeDogYW55KTogeCBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeDogYW55KTogeCBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHg6IGFueSk6IHggaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N5bWJvbCh4OiBhbnkpOiB4IGlzIHN5bWJvbCB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdzeW1ib2wnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHg6IGFueSk6IHggaXMgbnVsbCB7XHJcbiAgICByZXR1cm4geCA9PT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHg6IGFueSk6IHggaXMgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHg6IGFueSk6IHggaXMgQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4geCBpbnN0YW5jZW9mIEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoeDogYW55KTogeCBpcyBPYmplY3Qge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeDogYW55KTogeCBpcyBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVR5cGVEZWYge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdmFsOiBhbnksXHJcbiAgICBwcmVkOiAoYW55KSA9PiBib29sZWFuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHlCb29sOiBJVHlwZURlZiA9IHsgbmFtZTogJ0Jvb2xlYW4nLCB2YWw6IGZhbHNlLCBwcmVkOiBpc0Jvb2xlYW4gfTtcclxuZXhwb3J0IGNvbnN0IHR5TnVsbDogSVR5cGVEZWYgPSB7IG5hbWU6ICdOdWxsJywgdmFsOiBudWxsLCBwcmVkOiBpc051bGwgfTtcclxuZXhwb3J0IGNvbnN0IHR5VW5kZWZpbmVkOiBJVHlwZURlZiA9IHsgbmFtZTogJ1VuZGVmaW5lZCcsIHZhbDogdW5kZWZpbmVkLCBwcmVkOiBpc1VuZGVmaW5lZCB9O1xyXG5leHBvcnQgY29uc3QgdHlOdW1iZXI6IElUeXBlRGVmID0geyBuYW1lOiAnTnVtYmVyJywgdmFsOiAwLCBwcmVkOiBpc051bWJlciB9O1xyXG5leHBvcnQgY29uc3QgdHlTdHJpbmc6IElUeXBlRGVmID0geyBuYW1lOiAnU3RyaW5nJywgdmFsOiAnJywgcHJlZDogaXNTdHJpbmcgfTtcclxuZXhwb3J0IGNvbnN0IHR5U3ltYm9sOiBJVHlwZURlZiA9IHsgbmFtZTogJ1N5bWJvbCcsIHZhbDogbnVsbCwgcHJlZDogaXNTeW1ib2wgfTtcclxuZXhwb3J0IGNvbnN0IHR5T2JqZWN0OiBJVHlwZURlZiA9IHsgbmFtZTogJ09iamVjdCcsIHZhbDogZnVuY3Rpb24oKSB7IHJldHVybiB7fTsgfSwgcHJlZDogaXNPYmplY3QgfTtcclxuZXhwb3J0IGNvbnN0IHR5QXJyYXk6IElUeXBlRGVmID0geyBuYW1lOiAnQXJyYXknLCB2YWw6IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH0sIHByZWQ6IGlzQXJyYXkgfTtcclxuZXhwb3J0IGNvbnN0IHR5RnVuY3Rpb246IElUeXBlRGVmID0geyBuYW1lOiAnRnVuY3Rpb24nLCB2YWw6IGZ1bmN0aW9uKCkgeyB9LCBwcmVkOiBpc0Z1bmN0aW9uIH07XHJcblxyXG4vKipcclxuICogIFByZWRlZmluZWQgdHlwZXMgYW5kIHRoZWlyIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5jb25zdCBwcmVEZWZpbmVkVHlwZXM6IHsgW2tleTogc3RyaW5nXTogSVR5cGVEZWYgfSA9IHtcclxuICAgIHR5Qm9vbDogdHlCb29sLFxyXG4gICAgdHlOdWxsOiB0eU51bGwsXHJcbiAgICB0eVVuZGVmaW5lZDogdHlVbmRlZmluZWQsXHJcbiAgICB0eU51bWJlcjogdHlOdW1iZXIsXHJcbiAgICB0eVN0cmluZzogdHlTdHJpbmcsXHJcbiAgICB0eVN5bWJvbDogdHlTeW1ib2wsXHJcbiAgICB0eU9iamVjdDogdHlPYmplY3QsXHJcbiAgICB0eUFycmF5OiB0eUFycmF5LFxyXG4gICAgdHlGdW5jdGlvbjogdHlGdW5jdGlvblxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgYSBnaXZlbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZSh0eTogSVR5cGVEZWYpOiBhbnkge1xyXG4gICAgbGV0IHZhbCA9IHR5LnZhbDtcclxuICAgIGlmICh0eSAhPT0gdHlGdW5jdGlvbiAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdmFsID0gdmFsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG4vKipcclxuICogVHlwZSBjaGVja3MgaWYgYSBnaXZlbiB2YWx1ZSBpcyB0eXBlIG9mIHRoZSBnaXZlbiB0eVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9rKHZhbHVlOiBhbnksIHR5OiBJVHlwZURlZik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5LnByZWQodmFsdWUpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgdHlwZSBmb3IgdGhlIGdpdmVuIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsdWU6IGFueSk6IElUeXBlRGVmIHtcclxuICAgIGZvciAobGV0IHByb3AgaW4gcHJlRGVmaW5lZFR5cGVzKSB7XHJcbiAgICAgICAgaWYgKG9rKHZhbHVlLCBwcmVEZWZpbmVkVHlwZXNbcHJvcF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVEZWZpbmVkVHlwZXNbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQodmFsdWU6IGFueSwgdHk6IElUeXBlRGVmKTogdm9pZCB7XHJcbiAgICBpZiAob2sodmFsdWUsIHR5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcigndHlwZSBjaGVjayBlcnJvcjogZXhwdGVjdGVkIHR5cGUgaXMgJyArXHJcbiAgICAgICAgdHkgKyAnIGJ1dCBnaXZlbiB0eXBlIGlzICcgKyB0eXBlb2YgdmFsdWUpO1xyXG59XHJcbiIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUHJvdmlkZXMgdXRpbGl0aWVzIGZvciBjb21wdXRpbmcgaGFzaCB2YWx1ZXNcbiAqL1xuXG5pbXBvcnQgKiBhcyB0eXBlQ2hlY2tlciBmcm9tICcuLi90eXBpbmcvdHlwZS1jaGVja2VyJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGFzaCBjb2RlIGZvciBhIGdpdmVuIHZhbHVlLlxuICogVGhpcyBtZXRob2QgdGFrZXMgaW50byBhY2NvdW50IHRoZSB0eXBlIG9mIHRoZSBnaXZlblxuICogdmFsdWUgd2hlbiBnZW5lcmF0aW5nIGl0cyBoYXNoIGNvZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZSh2YWx1ZTogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUJvb2wpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPyAxIDogMDtcbiAgICB9IGVsc2UgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNociA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhhc2ggY29kZSBmb3IgYSBtZW1iZXIgb2YgYW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgY29uZmlndXJhdGlvbjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IGNvZGUgPSBoYXNoQ29kZSh2YWx1ZSk7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uc3QgYml0cyA9IGNvbmZpZ3VyYXRpb25bbmFtZV07XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZSA8PCBjb25maWd1cmF0aW9uW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2RlO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBoYXNoIGNvZGUgZm9yIGEgbWVtYmVyIG9mIGFuIG9iamVjdCwgYmFzZWQgb25cbiAqIHRoZSBnaXZlbiBtZW1iZXIgbWVtYmVyLCB0aGUgdmFsdWUgdG8gYmUgaGFzaGVkLCBhbmQgdGhlIGNvbmZpZ3VyYXRpb25cbiAqIGFib3V0IGhvdyBlYWNoIG1lbWJlciBjb250cmlidXRlcyB0byB0aGUgZW5pcmUgaGFzaCBjb2RlIG9mIHRoZVxuICogb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaE1lbWJlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGNvbmZpZ3VyYXRpb246IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pIHtcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5QXJyYXkpKSB7XG4gICAgICAgIGxldCBjb2RlID0gMDtcbiAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IGNvZGUgKyBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWUsIHZhbHVlW2ldLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2hQcmltaXRpdmVNZW1iZXIobmFtZSwgdmFsdWUsIGNvbmZpZ3VyYXRpb24pO1xufVxuIiwiaW1wb3J0ICogYXMgdHlwZUNoZWNrZXIgZnJvbSAnLi90eXBlLWNoZWNrZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZVN0cmluZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGFuIGludGVnZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlSW50KHZhbHVlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGEgZmxvYXQgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUZsb2F0KHZhbHVlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAwLjAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAwLjAwO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgZ2l2ZW4gdmFsdWUgaW50byBhIGJvb2wgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlQm9vbCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUJvb2wpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBpZiBhIGdpdmVuIHZhbHVlIGNhbiBiZSBzYWZlbHkgY29udmVydGVkIGludG8gdGhlIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGlibGUodmFsdWU6IGFueSwgdHk6IHR5cGVDaGVja2VyLklUeXBlRGVmKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5KSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlQ2hlY2tlci5pc051bGwodmFsdWUpIHx8IHR5cGVDaGVja2VyLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5TnVtYmVyICYmIGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiByZWZpbmVcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogU2FmZWx5IGNvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBpbnRvIGEgdmFsdWUgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydCh2YWx1ZTogYW55LCB0eTogdHlwZUNoZWNrZXIuSVR5cGVEZWYpOiBhbnkge1xyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5Qm9vbCkge1xyXG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VCb29sKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgZ2l2ZW4gdHlwZScpO1xyXG59XHJcbiIsIi8vIFxuLy8gQXV0aG9yOjogVG9tIFRhbmcgPHByaW5jaXBsZXdhcmVAZ21haWwuY29tPlxuLy8gQ29weXJpZ2h0OjogQ29weXJpZ2h0IChjKSAyMDE3LCBUb20gVGFuZ1xuLy8gXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbi8vIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbi8vIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xuLy8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy8gXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vLyBcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4vLyBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4vLyBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG4vLyBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4vLyBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8gXG4vLyBFeGNlcHQgYXMgY29udGFpbmVkIGluIHRoaXMgbm90aWNlLCB0aGUgbmFtZShzKSBvZiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBob2xkZXJzIHNoYWxsIG5vdCBiZSB1c2VkIGluIGFkdmVydGlzaW5nIG9yIG90aGVyd2lzZSB0byBwcm9tb3RlIHRoZVxuLy8gc2FsZSwgdXNlIG9yIG90aGVyIGRlYWxpbmdzIGluIHRoaXMgU29mdHdhcmUgd2l0aG91dCBwcmlvciB3cml0dGVuXG4vLyBhdXRob3JpemF0aW9uLlxuXG5mdW5jdGlvbiBhc2FwKGZuKSB7XG4gICAgc2V0VGltZW91dChmbiwgMSk7XG59XG5cbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgQXJyYXldXCI7IH07XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZm4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBvbkZ1bGZpbGxlZCh2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIG9uUmVqZWN0ZWQocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgb25SZWplY3RlZChleCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGUoZGVmZXJyZWQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXNhcChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNiLCByZXQ7XG4gICAgICAgIGNiID0gbWUuX3N0YXRlID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuICAgICAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIChtZS5fc3RhdGUgPyBkZWZlcnJlZC5yZXNvbHZlIDogZGVmZXJyZWQucmVqZWN0KShtZS5fdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXQgPSBjYihtZS5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXQpO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZpbmFsZSgpIHtcbiAgICB2YXIgaSwgbGVuO1xuICAgIC8qanNsaW50IHBsdXNwbHVzOnRydWUgKi9cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaGFuZGxlLmNhbGwodGhpcywgdGhpcy5fZGVmZXJyZWRzW2ldKTtcbiAgICB9XG4gICAgdGhpcy5fZGVmZXJyZWRzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVqZWN0KG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpbmFsZS5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlKG5ld1ZhbHVlKSB7XG4gICAgdHJ5IHsgLy9Qcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlICYmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgYmluZChyZXNvbHZlLCB0aGlzKSwgYmluZChyZWplY3QsIHRoaXMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUuY2FsbCh0aGlzKTtcbiAgICB9IGNhdGNoIChlKSB7IHJlamVjdC5jYWxsKHRoaXMsIGUpOyB9XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIGR1bW15IHByb21pc2UsIHdoaWNoIHNpbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgYSBub3JtYWwgUHJvbWlzZVxuICogYnV0IGlzIHN1aXRhYmxlIHVzZWQgaW4gc3luY2hyb25vdXMgY2FsbC5cbiAqIFRoaXMgcmVzdWx0ZWQgb2JqZWN0IGlzIGFsc28gYSBqUXVlcnkgZGVmZXJyZWQgb2JqZWN0LCB0aGVyZWZvcmUsXG4gKiBpdCB3aWxsIGJlIHJlc29sdmVkIGJ5IHRoZSBqUXVlcnkgZGVmZXJyZWQgb2JqZWN0IGlmIGl0IGlzIGEgcmVzb2x2ZWQgdmFsdWUgaW5cbiAqIHRoZSBqUXVlcnkgZGVmZXJyZWQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gRHVtbXlQcm9taXNlPFQ+KGZuOiAocmVzb2x2ZTogKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb24/KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gICAgZG9SZXNvbHZlKGZuLCBiaW5kKHJlc29sdmUsIHRoaXMpLCBiaW5kKHJlamVjdCwgdGhpcykpO1xufVxuXG5cbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gICAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xufVxuXG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBoYW5kbGUuY2FsbChtZSwgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlc29sdmUsIHJlamVjdCkpO1xuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbihhcnJheUFyZykge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KGFycmF5QXJnKSA/IGFycmF5QXJnIDogYXJndW1lbnRzKTtcblxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGgsIGk7XG4gICAgICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwodmFsLCBmdW5jdGlvbih2YWwpIHsgcmVzKGksIHZhbCk7IH0sIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IHZhbDtcblxuICAgICAgICAgICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgICAgICAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gRHVtbXlQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KHZhbHVlKTtcbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucmFjZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaSwgbGVuO1xuICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuYWx3YXlzID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkLCBvbkZ1bGZpbGxlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG4iLCIvLyBcclxuLy8gQXV0aG9yOjogVG9tIFRhbmcgPHByaW5jaXBsZXdhcmVAZ21haWwuY29tPlxyXG4vLyBDb3B5cmlnaHQ6OiBDb3B5cmlnaHQgKGMpIDIwMTcsIFRvbSBUYW5nXHJcbi8vIFxyXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcclxuLy8gYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXHJcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xyXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXHJcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xyXG4vLyBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cclxuLy8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4vLyBcclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vIFxyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG4vLyBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcclxuLy8gTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxyXG4vLyBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXHJcbi8vIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxyXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuLy8gXHJcbi8vIEV4Y2VwdCBhcyBjb250YWluZWQgaW4gdGhpcyBub3RpY2UsIHRoZSBuYW1lKHMpIG9mIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gaG9sZGVycyBzaGFsbCBub3QgYmUgdXNlZCBpbiBhZHZlcnRpc2luZyBvciBvdGhlcndpc2UgdG8gcHJvbW90ZSB0aGVcclxuLy8gc2FsZSwgdXNlIG9yIG90aGVyIGRlYWxpbmdzIGluIHRoaXMgU29mdHdhcmUgd2l0aG91dCBwcmlvciB3cml0dGVuXHJcbi8vIGF1dGhvcml6YXRpb24uXHJcblxyXG5cclxuaW1wb3J0IHsgRHVtbXlQcm9taXNlIH0gZnJvbSAnLi9wcm9taXNlLWxpa2UnO1xyXG5pbXBvcnQgKiBhcyB0eXBlQ2hlY2tlciBmcm9tICcuLi90eXBpbmcvdHlwZS1jaGVja2VyJztcclxuXHJcbi8qKlxyXG4gKiBMaWZ0cyBhIHNpbmdsZSB2YWx1ZSBvciBhIGZ1bmN0aW9uIGludG8gYSBQcm9taXNlLWxpa2Ugb2JqZWN0LlxyXG4gKiBQcm92aWRlcyBhIG1ldGhvZCBvZiB3cmFwcGluZyBhIHNpbmdsZSB2YWx1ZSBvciBhIGZ1bmN0aW9uICBpbnRvIGEgUHJvbWlzZSxcclxuICogaW4gb3JkZXIgdGhhdCB0aGUgZm9sbG93aW5nIG9wZXJhdGlvbiBcclxuICogbWF5IGNvbmZvcm0gdG8gdGhlIHN0YW5kYXJkIFByb21pc2Ugb3BlcmF0aW9uLlxyXG4gKiBJbiBzb21lIHNjZW5hcmlvLCB3ZSBtYXkgZmlyc3QgYXR0ZW1wdCB0byBnZXQgYSB2YWx1ZSBmcm9tIGNhY2hlLlxyXG4gKiBNb3RpdmF0aW9uLlxyXG4gKiBJbiB0aGlzIGNhc2UsIHdlIG5lZWQgdG8gcmV0dXJuIGEgdmFsdWUuIEhvd2V2ZXIsIGlmIHRoZSB2YWx1ZSBpc1xyXG4gKiBub3QgYXZhaWxhYmxlIGluIHRoZSBjYWNoZSwgd2UgbWF5IGhhdmUgdG8gZ28gYWhlYWQgdG8gbG9hZCBpdFxyXG4gKiBhc3luY2hyb25vdXNseS4gTG9hZGluZyBhIHZhbHVlIGFzeW5jaHJvbm91c2x5IHVzdWFsbHkgcmV0dXJuc1xyXG4gKiBhIFByb21pc2UuIFRvIHVudGlmeSB0aGUgcmV0dXJuIGZyb20gdHdvIGNhc2VzLCB3ZVxyXG4gKiBlc2NhbGF0ZSBhIHNpbmdsZSB2YWx1ZSBpbnRvIGEgUHJvbWlzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0PFQ+KHZhbHVlOiBULCB0aGlzQXJnOiBPYmplY3QpOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBpZiAodHlwZUNoZWNrZXIuaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdEFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3RBcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXQgPSB2YWx1ZS5hcHBseSh0aGlzQXJnIHx8IG51bGwsIHJlc3RBcmdzKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogTGlmdHMgYSB2YWx1ZSBpbnRvIGFuIHJlamVjdGVkIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnRJbnRvUmVqZWN0PFQ+KHZhbHVlOiBUKTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgICAgIHJlamVjdCh2YWx1ZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgZ2l2ZW4gcHJvbWlzZSBpbnRvIGFub3RoZXIgcHJvbWlzZSB3aGljaCBlbnN1cmVzIHRoYXRcclxuICogdGhlIGdpdmVuIGd1YXJkIGV2YWx1dGVzIHRvIGJlIHRydWUgZnJvbSB0aGUgc3RhdGUgb2YgdGhlIGdpdmVuIHByb21pc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdFdpdGhHdWFyZDxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPiwgZ3VhcmQ6ICh4OiBUKSA9PiBib29sZWFuKTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChndWFyZChkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXR0bGVzIGEgcHJvbWlzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0bGU8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4pOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdmdWxmaWxsZWQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdyZWplY3RlZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBwcm9taXNlIGludG8gYSBwcm9taXNlIHdoaWNoIGRvZXMgbm90IHJlamVjdCBhbnl0aGluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0VG9QcmVkaWNhdGU8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4sIGd1YXJkOiAoeDogVCkgPT4gYm9vbGVhbik6IFByb21pc2VMaWtlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGd1YXJkKGRhdGEpKTtcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBpcGVsaW5lU2V0dGluZ3M8VT4ge1xyXG4gICAgdmFsaWRhdG9yPzogKHgpID0+IGJvb2xlYW4sXHJcbiAgICBhZGFwdG9yOiAoeCkgPT4gVVxyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhIGdpdmVuIHByb21pc2Ugd2l0aCBhZGRpdG9uYWwgcGlwZWxpbmUgcHJvY2Vzc2luZy5cclxuICogU3BlY2lmaWNhbGx5LCBpbiB0aGlzIG1ldGhvZCwgY29tcGFyZWQgdG8gdGhlIGdpdmVuIHByb21pc2UsIHRoZSByZXR1cm5cclxuICogcHJvbWlzZSBjb250YWlucyB2YWxpZGF0aW5nIGFuZCBhZHBhdGluZyBzdGFnZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVhZGVyUGlwZWxpbmU8VCwgVT4ocmVhZGVyUHJvbWlzZTogUHJvbWlzZUxpa2U8VD4sIHNldHRpbmdzOiBJUGlwZWxpbmVTZXR0aW5nczxVPikge1xyXG4gICAgcmV0dXJuIHJlYWRlclByb21pc2VcclxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3MudmFsaWRhdG9yKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGlzIG5vdCB2YWxpZDogJyArIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MuYWRhcHRvcihkYXRhKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYSBnaXZlbiBwcm9taXNlIGludG8gb25lIHByb21pc2Ugd2l0aCBvdXIgb3duIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPik6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBQcm92aWRlcyB1dGlsaXRpZXMgZm9yIG1ha2luZyBpbnRlcm9wZXJhYmxlIHRoZSBwcm9taXNlLWxpa2Ugb2JqZWN0c1xuICogZnJvbSBkaWZmZXJlbnQgbW9kdWxlcy5cbiAqL1xuLyoqXG4gKiBFeHRlbmRzIGEgZ2l2ZW4gcHJvbWlzZSBpbnRvIGEgZGVmZXJyZWQgb2JqZWN0IG9mIGpRdWVyeS5cbiAqIFdpdGggdGhpcyBleHRlbnNpb24sIHdlIGFyZSBhYmxlIHRvIGNoYWluIHRvZ2V0aGVyIGpRdWVyeSBkZWZlcnJlZFxuICogb2JqZWN0cyAod2hpY2ggYXJlIGFsc28gcHJvbWlzZSBvYmplY3RzLilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvalF1ZXJ5RGVmZXJyZWQocHJvbWlzZSkge1xuICAgIGlmICghcHJvbWlzZS5hbHdheXMpIHtcbiAgICAgICAgcHJvbWlzZS5hbHdheXMgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCwgb25GdWxmaWxsZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UuZG9uZSkge1xuICAgICAgICBwcm9taXNlLmRvbmUgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5mYWlsKSB7XG4gICAgICAgIHByb21pc2UuZmFpbCA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5wcm9ncmVzcykge1xuICAgICAgICBwcm9taXNlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLnByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZS5wcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG4iXSwibmFtZXMiOlsidHlwZUNoZWNrZXIub2siLCJ0eXBlQ2hlY2tlci50eUJvb2wiLCJ0eXBlQ2hlY2tlci50eU51bWJlciIsInR5cGVDaGVja2VyLnR5QXJyYXkiLCJ0eXBlQ2hlY2tlci50eVN0cmluZyIsInR5cGVDaGVja2VyLmlzTnVsbCIsInR5cGVDaGVja2VyLmlzVW5kZWZpbmVkIiwiaXNBcnJheSIsInR5cGVDaGVja2VyLmlzRnVuY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDN0IsSUFBTSxJQUFJLEdBQUcsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7O1lBQzNFLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pELENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7QUFLRCwwQkFBNkIsR0FBRyxFQUFFLEdBQUc7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQzVEOzs7Ozs7Ozs7Ozs7O0FDZkQsMkJBQThCLEdBQVcsRUFBRSxLQUFVLEVBQUUsR0FBa0I7UUFDckUsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFB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