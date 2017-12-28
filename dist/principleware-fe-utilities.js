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
var isArray = Array.isArray || function (value) { return Object.prototype.toString.call(value) === "[object Array]"; };
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
    var /** @type {?} */ done = false;
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
    var /** @type {?} */ me = this;
    if (this._state === null) {
        this._deferreds.push(deferred);
        return;
    }
    asap(function () {
        var /** @type {?} */ cb, /** @type {?} */ ret;
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
    var /** @type {?} */ i, /** @type {?} */ len;
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
        if (newValue === this) {
            throw new TypeError('A promise cannot be resolved with itself.');
        }
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
            var /** @type {?} */ then = newValue.then;
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
    const /** @type {?} */ me = this;
    return new DummyPromise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
    });
};
DummyPromise.prototype.all = function (arrayArg) {
    var /** @type {?} */ args = Array.prototype.slice.call(arguments.length === 1 && isArray(arrayArg) ? arrayArg : arguments);
    return new DummyPromise(function (resolve, reject) {
        if (args.length === 0) {
            return resolve([]);
        }
        var /** @type {?} */ remaining = args.length, /** @type {?} */ i;
        /**
         * @param {?} i
         * @param {?} val
         * @return {?}
         */
        function res(i, val) {
            try {
                if (val && (typeof val === 'object' || typeof val === 'function')) {
                    var /** @type {?} */ then = val.then;
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
        var /** @type {?} */ i, /** @type {?} */ len;
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
function isArray$1(x) {
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

const tyBool = { name: 'Boolean', val: false, pred: isBoolean };
const tyNull = { name: 'Null', val: null, pred: isNull };
const tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
const tyNumber = { name: 'Number', val: 0, pred: isNumber };
const tyString = { name: 'String', val: '', pred: isString };
const tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
const tyObject = { name: 'Object', val: function () { return {}; }, pred: isObject };
const tyArray = { name: 'Array', val: function () { return []; }, pred: isArray$1 };
const tyFunction = { name: 'Function', val: function () { }, pred: isFunction };
/**
 * @constant - Predefined types and their properties.
 */
const preDefinedTypes = {
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
    let /** @type {?} */ val = ty.val;
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
    for (let /** @type {?} */ prop in preDefinedTypes) {
        if (ok(value, preDefinedTypes[prop])) {
            return preDefinedTypes[prop];
        }
    }
    return null;
}
/**
 * \@function assert
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
 * Lifts a single value or a function into a Promise-like object.
Provides a method of wrapping a single value or a function  into a Promise,
in order that the following operation
may conform to the standard Promise operation.
In some scenario, we may first attempt to get a value from cache.
Motivation.
In this case, we need to return a value. However, if the value is
not available in the cache, we may have to go ahead to load it
asynchronously. Loading a value asynchronously usually returns
a Promise. To untify the return from two cases, we
escalate a single value into a Promise.
 * @template T
 * @param {?} value
 * @param {?} thisArg
 * @return {?}
 */
function lift(value, thisArg) {
    /*jslint unparam: true */
    return new DummyPromise(function (resolve, reject) {
        if (isFunction(value)) {
            const /** @type {?} */ restArgs = [];
            /*jslint plusplus: true */
            for (let /** @type {?} */ i = 2; i < arguments.length; i++) {
                restArgs.push(arguments[i]);
            }
            const /** @type {?} */ ret = value.apply(thisArg || null, restArgs);
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
the given guard evalutes to be true from the state of the given promise.
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
Specifically, in this method, compared to the given promise, the return
promise contains validating and adpating stages.
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
    const /** @type {?} */ ret = [];
    for (let /** @type {?} */ n in o) {
        if (o.hasOwnProperty(n)) {
            ret.push(o[n]);
        }
    }
    return ret;
}

/**
 * Generates a guid.
 * @return {?}
 */
function guid() {
    let /** @type {?} */ d = new Date().getTime();
    const /** @type {?} */ uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const /** @type {?} */ r = (d + Math.random() * 16) % 16 | 0;
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
some characters have been properly replaced with
their escape versions.
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
characters with their unescaped ones.
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
 * Encodes a key-value pair, where a value can be an array.
 * @param {?} key
 * @param {?} value
 * @param {?} str
 * @return {?}
 */
function urlEncodePair(key, value, str) {
    if (value instanceof Array) {
        value.forEach((item) => {
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
    const /** @type {?} */ str = [];
    for (let /** @type {?} */ p in data) {
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
    const /** @type {?} */ regex = new RegExp('[?#&]' + name + '(=([^&#]*)|&|#|$)');
    const /** @type {?} */ results = regex.exec(url);
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
 * Generated bundle index. Do not edit.
 */

export { tojQueryDeferred, lift, liftIntoReject, liftWithGuard, settle, liftToPredicate, readerPipeline, transform, DummyPromise, pushArray, makeArray, guid, getRandomInt, replace, applyEscape, reverseEscape, urlEncodePair, urlEncode, getParamByName, getQueryParamByName, getHashParamByName, safeParseInt, safeParseFloat, safeParseBool, convertible, convert, isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isArray$1 as isArray, isObject, isFunction, tyBool, tyNull, tyUndefined, tyNumber, tyString, tySymbol, tyObject, tyArray, tyFunction, defaultValue, ok, getType, assert };
//# sourceMappingURL=principleware-fe-utilities.js.map
