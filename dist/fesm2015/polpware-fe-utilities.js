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
    let d = new Date().getTime();
    /** @type {?} */
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        /** @type {?} */
        const r = (d + Math.random() * 16) % 16 | 0;
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
    /** @type {?} */
    const str = [];
    for (let p in data) {
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
    const regex = new RegExp('[?#&]' + name + '(=([^&#]*)|&|#|$)');
    /** @type {?} */
    const results = regex.exec(url);
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
    const ret = [];
    for (let n in o) {
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
    return firstSet.filter((x) => {
        return !secondSet.some((y) => {
            return predicate(x, y);
        });
    });
}
/**
 * @template T, U
 * @param {?} firstSet
 * @param {?} secondSet
 * @param {?} predicate
 * @return {?}
 */
function intersection(firstSet, secondSet, predicate) {
    return firstSet.filter((x) => {
        return secondSet.some((y) => {
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
const tyBool = { name: 'Boolean', val: false, pred: isBoolean };
/** @type {?} */
const tyNull = { name: 'Null', val: null, pred: isNull };
/** @type {?} */
const tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
/** @type {?} */
const tyNumber = { name: 'Number', val: 0, pred: isNumber };
/** @type {?} */
const tyString = { name: 'String', val: '', pred: isString };
/** @type {?} */
const tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
/** @type {?} */
const tyObject = { name: 'Object', val: function () { return {}; }, pred: isObject };
/** @type {?} */
const tyArray = { name: 'Array', val: function () { return []; }, pred: isArray };
/** @type {?} */
const tyFunction = { name: 'Function', val: function () { }, pred: isFunction };
/** *
 *  Predefined types and their properties.
  @type {?} */
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
    /** @type {?} */
    let val = ty.val;
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
    for (let prop in preDefinedTypes) {
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
    let hash = 0;
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
    for (let i = 0, len = value.length; i < len; i++) {
        /** @type {?} */
        const chr = value.charCodeAt(i);
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
    const code = hashCode(value);
    if (configuration) {
        /** @type {?} */
        const bits = configuration[name];
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
        let code = 0;
        /*jslint plusplus: true */
        for (let i = 0; i < value.length; i++) {
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
const ɵ0 = function (value) { return Object.prototype.toString.call(value) === "[object Array]"; };
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
    const me = this;
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
            const restArgs = [];
            /*jslint plusplus: true */
            for (let i = 2; i < arguments.length; i++) {
                restArgs.push(arguments[i]);
            }
            /** @type {?} */
            const ret = value.apply(thisArg || null, restArgs);
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

export { guid, getRandomInt, urlEncodePair, urlEncode, getParamByName, getQueryParamByName, getHashParamByName, pushArray, makeArray, replace, applyEscape, reverseEscape, diff, intersection, hashCode, hashMember, safeParseString, safeParseInt, safeParseFloat, safeParseBool, convertible, convert, isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isArray, isObject, isFunction, tyBool, tyNull, tyUndefined, tyNumber, tyString, tySymbol, tyObject, tyArray, tyFunction, defaultValue, ok, getType, assert, lift, liftIntoReject, liftWithGuard, settle, liftToPredicate, readerPipeline, transform, tojQueryDeferred, DummyPromise };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtZmUtdXRpbGl0aWVzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvdG9vbHMvbWF0aC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL3VybC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL2Fyci50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL3N0ci50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL3NldC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3R5cGluZy90eXBlLWNoZWNrZXIudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9oYXNoLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvdHlwaW5nL3R5cGUtY2FzdC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Byb21pc2UvcHJvbWlzZS1saWtlLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvcHJvbWlzZS9tb25hZGljLW9wZXJhdGlvbnMudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy9wcm9taXNlL2ludGVyLW9wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBndWlkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWQoKSB7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XHJcbiAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiAociAmIDB4NyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gdGhlIGdpdmVuIHJhbmdlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG4iLCIvKipcclxuICogRW5jb2RlcyBhIGtleS12YWx1ZSBwYWlyLCB3aGVyZSBhIHZhbHVlIGNhbiBiZSBhbiBhcnJheS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmxFbmNvZGVQYWlyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdHI6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICdbXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEVuY29kZXMgYW4gb2JqZWN0IGluIHd3dyBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVybEVuY29kZShkYXRhOiBPYmplY3QpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc3RyOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBmb3IgKGxldCBwIGluIGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICB1cmxFbmNvZGVQYWlyKHAsIGRhdGFbcF0sIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKCcmJykucmVwbGFjZSgvJTIwL2csICcrJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbUJ5TmFtZShuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1s/IyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcbiAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0c1syXSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVBhcmFtQnlOYW1lKG5hbWU6IHN0cmluZywgdXJsPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldFBhcmFtQnlOYW1lKG5hbWUsIHVybCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoUGFyYW1CeU5hbWUobmFtZTogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0UGFyYW1CeU5hbWUobmFtZSwgdXJsKTtcclxufVxyXG4iLCIvKipcclxuICogUHVzaHMgYW4gYXJyYXkgb3IgYSBzaW5nbGUgdmFsdWUgaW50byB0aGUgdGhpc0FyZztcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXNoQXJyYXk8VD4odGhpc0FyZzogQXJyYXk8VD4sIHNyYzogQXJyYXk8VD4gfCBUKTogdm9pZCB7XHJcbiAgICBpZiAoIShzcmMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICB0aGlzQXJnLnB1c2goc3JjKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3JjLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHRoaXNBcmcucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHVybnMgdGhlIHZhbHVlcyBpbiBhbiBvYmplY3QgaW50byBhbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBcnJheShvOiBPYmplY3QpIHtcclxuICAgIGNvbnN0IHJldCA9IFtdO1xyXG4gICAgZm9yIChsZXQgbiBpbiBvKSB7XHJcbiAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkobikpIHtcclxuICAgICAgICAgICAgcmV0LnB1c2gob1tuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCIvKipcclxuICogUmVwbGFjZXMgdGhlIHBsYWNlaG9sZGVycyBhIGdpdmVuIGZvcm1hdCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoZm9ybWF0OiBzdHJpbmcsIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XHJcbiAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoL1xceyhbYS16QS1aXSspXFx9L2csIGZ1bmN0aW9uKHMsIGtleSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHBhcmFtc1trZXldID09PSAndW5kZWZpbmVkJykgPyAnJyA6IHBhcmFtc1trZXldO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSBnaXZlbiBzdHJpbmcgaW50byBvbmUgd2hlcmVcclxuICogc29tZSBjaGFyYWN0ZXJzIGhhdmUgYmVlbiBwcm9wZXJseSByZXBsYWNlZCB3aXRoXHJcbiAqIHRoZWlyIGVzY2FwZSB2ZXJzaW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVzY2FwZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZGF0YSA9IGRhdGFcclxuICAgICAgICAucmVwbGFjZSgvW1xcXFxdL2csICdcXFxcXFxcXCcpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXFwiXS9nLCAnXFxcXFxcXCInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFwvXS9nLCAnXFxcXC8nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxiXS9nLCAnXFxcXGInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxmXS9nLCAnXFxcXGYnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxuXS9nLCAnXFxcXG4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxyXS9nLCAnXFxcXHInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFx0XS9nLCAnXFxcXHQnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogVW5kbyB0aGUgd29yayBieSBhcHBseUVzY2FwZS4gSXQgcmVwbGFjZXMgdGhlIGVzY2FwZVxyXG4gKiBjaGFyYWN0ZXJzIHdpdGggdGhlaXIgdW5lc2NhcGVkIG9uZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUVzY2FwZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZGF0YSA9IGRhdGFcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcIi9nLCAnXFxcIicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXC8vZywgJ1xcLycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXGIvZywgJ1xcYicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXGYvZywgJ1xcZicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXG4vZywgJ1xcbicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXHIvZywgJ1xccicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXHQvZywgJ1xcdCcpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiLy8gZmlyc3RTZXQgLSBzZWNvbmRTZXQgKGFueSBlbGVtZW50IG5vdCBpbiBzZWNvbmRTZXQpXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmPFQsIFU+KGZpcnN0U2V0OiBBcnJheTxUPixcclxuICAgIHNlY29uZFNldDogQXJyYXk8VT4sXHJcbiAgICBwcmVkaWNhdGU6IChmaXJzdEVsZW06IFQsIHNlY29uZEVsZW06IFUpID0+IGJvb2xlYW4pOiBBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gZmlyc3RTZXQuZmlsdGVyKCh4OiBUKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICFzZWNvbmRTZXQuc29tZSgoeTogVSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlZGljYXRlKHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGZpcnN0U2V0IGludGVyc2VjdGlvbiBzZWNvbmRTZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbjxULCBVPihmaXJzdFNldDogQXJyYXk8VD4sXHJcbiAgICBzZWNvbmRTZXQ6IEFycmF5PFU+LFxyXG4gICAgcHJlZGljYXRlOiAoZmlyc3RFbGVtOiBULCBzZWNvbmRFbGVtOiBVKSA9PiBib29sZWFuKTogQXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIGZpcnN0U2V0LmZpbHRlcigoeDogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzZWNvbmRTZXQuc29tZSgoeTogVSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlZGljYXRlKHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLypcclxuQmFzaWNUeXBlcyA6PSBcclxuICAgIGJvb2xlYW4gXHJcbiAgfCBudW1iZXIgXHJcbiAgfCBzdHJpbmcgXHJcbiAgfCBzeW1ib2xcclxuICB8IG51bGxcclxuICB8IHVuZGVmaW5lZFxyXG4gIHwgYXJyYXkgXHJcbiAgfCBvYmplY3RcclxuICB8IGZ1bmN0aW9uXHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4OiBhbnkpOiB4IGlzIGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4OiBhbnkpOiB4IGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoeDogYW55KTogeCBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ltYm9sKHg6IGFueSk6IHggaXMgc3ltYm9sIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ3N5bWJvbCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeDogYW55KTogeCBpcyBudWxsIHtcclxuICAgIHJldHVybiB4ID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoeDogYW55KTogeCBpcyB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkoeDogYW55KTogeCBpcyBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiB4IGluc3RhbmNlb2YgQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh4OiBhbnkpOiB4IGlzIE9iamVjdCB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih4OiBhbnkpOiB4IGlzIEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHlwZURlZiB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2YWw6IGFueSxcclxuICAgIHByZWQ6IChhbnkpID0+IGJvb2xlYW5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0eUJvb2w6IElUeXBlRGVmID0geyBuYW1lOiAnQm9vbGVhbicsIHZhbDogZmFsc2UsIHByZWQ6IGlzQm9vbGVhbiB9O1xyXG5leHBvcnQgY29uc3QgdHlOdWxsOiBJVHlwZURlZiA9IHsgbmFtZTogJ051bGwnLCB2YWw6IG51bGwsIHByZWQ6IGlzTnVsbCB9O1xyXG5leHBvcnQgY29uc3QgdHlVbmRlZmluZWQ6IElUeXBlRGVmID0geyBuYW1lOiAnVW5kZWZpbmVkJywgdmFsOiB1bmRlZmluZWQsIHByZWQ6IGlzVW5kZWZpbmVkIH07XHJcbmV4cG9ydCBjb25zdCB0eU51bWJlcjogSVR5cGVEZWYgPSB7IG5hbWU6ICdOdW1iZXInLCB2YWw6IDAsIHByZWQ6IGlzTnVtYmVyIH07XHJcbmV4cG9ydCBjb25zdCB0eVN0cmluZzogSVR5cGVEZWYgPSB7IG5hbWU6ICdTdHJpbmcnLCB2YWw6ICcnLCBwcmVkOiBpc1N0cmluZyB9O1xyXG5leHBvcnQgY29uc3QgdHlTeW1ib2w6IElUeXBlRGVmID0geyBuYW1lOiAnU3ltYm9sJywgdmFsOiBudWxsLCBwcmVkOiBpc1N5bWJvbCB9O1xyXG5leHBvcnQgY29uc3QgdHlPYmplY3Q6IElUeXBlRGVmID0geyBuYW1lOiAnT2JqZWN0JywgdmFsOiBmdW5jdGlvbigpIHsgcmV0dXJuIHt9OyB9LCBwcmVkOiBpc09iamVjdCB9O1xyXG5leHBvcnQgY29uc3QgdHlBcnJheTogSVR5cGVEZWYgPSB7IG5hbWU6ICdBcnJheScsIHZhbDogZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfSwgcHJlZDogaXNBcnJheSB9O1xyXG5leHBvcnQgY29uc3QgdHlGdW5jdGlvbjogSVR5cGVEZWYgPSB7IG5hbWU6ICdGdW5jdGlvbicsIHZhbDogZnVuY3Rpb24oKSB7IH0sIHByZWQ6IGlzRnVuY3Rpb24gfTtcclxuXHJcbi8qKlxyXG4gKiAgUHJlZGVmaW5lZCB0eXBlcyBhbmQgdGhlaXIgcHJvcGVydGllcy5cclxuICovXHJcbmNvbnN0IHByZURlZmluZWRUeXBlczogeyBba2V5OiBzdHJpbmddOiBJVHlwZURlZiB9ID0ge1xyXG4gICAgdHlCb29sOiB0eUJvb2wsXHJcbiAgICB0eU51bGw6IHR5TnVsbCxcclxuICAgIHR5VW5kZWZpbmVkOiB0eVVuZGVmaW5lZCxcclxuICAgIHR5TnVtYmVyOiB0eU51bWJlcixcclxuICAgIHR5U3RyaW5nOiB0eVN0cmluZyxcclxuICAgIHR5U3ltYm9sOiB0eVN5bWJvbCxcclxuICAgIHR5T2JqZWN0OiB0eU9iamVjdCxcclxuICAgIHR5QXJyYXk6IHR5QXJyYXksXHJcbiAgICB0eUZ1bmN0aW9uOiB0eUZ1bmN0aW9uXHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5OiBJVHlwZURlZik6IGFueSB7XHJcbiAgICBsZXQgdmFsID0gdHkudmFsO1xyXG4gICAgaWYgKHR5ICE9PSB0eUZ1bmN0aW9uICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YWwgPSB2YWwoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGNoZWNrcyBpZiBhIGdpdmVuIHZhbHVlIGlzIHR5cGUgb2YgdGhlIGdpdmVuIHR5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2sodmFsdWU6IGFueSwgdHk6IElUeXBlRGVmKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHkucHJlZCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB0eXBlIGZvciB0aGUgZ2l2ZW4gdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZTogYW55KTogSVR5cGVEZWYge1xyXG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcmVEZWZpbmVkVHlwZXMpIHtcclxuICAgICAgICBpZiAob2sodmFsdWUsIHByZURlZmluZWRUeXBlc1twcm9wXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZURlZmluZWRUeXBlc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydCh2YWx1ZTogYW55LCB0eTogSVR5cGVEZWYpOiB2b2lkIHtcclxuICAgIGlmIChvayh2YWx1ZSwgdHkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0eXBlIGNoZWNrIGVycm9yOiBleHB0ZWN0ZWQgdHlwZSBpcyAnICtcclxuICAgICAgICB0eSArICcgYnV0IGdpdmVuIHR5cGUgaXMgJyArIHR5cGVvZiB2YWx1ZSk7XHJcbn1cclxuIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBQcm92aWRlcyB1dGlsaXRpZXMgZm9yIGNvbXB1dGluZyBoYXNoIHZhbHVlc1xuICovXG5cbmltcG9ydCAqIGFzIHR5cGVDaGVja2VyIGZyb20gJy4uL3R5cGluZy90eXBlLWNoZWNrZXInO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBoYXNoIGNvZGUgZm9yIGEgZ2l2ZW4gdmFsdWUuXG4gKiBUaGlzIG1ldGhvZCB0YWtlcyBpbnRvIGFjY291bnQgdGhlIHR5cGUgb2YgdGhlIGdpdmVuXG4gKiB2YWx1ZSB3aGVuIGdlbmVyYXRpbmcgaXRzIGhhc2ggY29kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHZhbHVlOiBhbnkpOiBudW1iZXIge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5Qm9vbCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IDEgOiAwO1xuICAgIH0gZWxzZSBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICB9XG4gICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hyID0gdmFsdWUuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xuICAgICAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cbiAgICByZXR1cm4gaGFzaDtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGFzaCBjb2RlIGZvciBhIG1lbWJlciBvZiBhbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGhhc2hQcmltaXRpdmVNZW1iZXIobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBjb25maWd1cmF0aW9uOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XG4gICAgY29uc3QgY29kZSA9IGhhc2hDb2RlKHZhbHVlKTtcbiAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICBjb25zdCBiaXRzID0gY29uZmlndXJhdGlvbltuYW1lXTtcbiAgICAgICAgaWYgKGJpdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlIDw8IGNvbmZpZ3VyYXRpb25bbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvZGU7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhhc2ggY29kZSBmb3IgYSBtZW1iZXIgb2YgYW4gb2JqZWN0LCBiYXNlZCBvblxuICogdGhlIGdpdmVuIG1lbWJlciBtZW1iZXIsIHRoZSB2YWx1ZSB0byBiZSBoYXNoZWQsIGFuZCB0aGUgY29uZmlndXJhdGlvblxuICogYWJvdXQgaG93IGVhY2ggbWVtYmVyIGNvbnRyaWJ1dGVzIHRvIHRoZSBlbmlyZSBoYXNoIGNvZGUgb2YgdGhlXG4gKiBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoTWVtYmVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgY29uZmlndXJhdGlvbjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSkge1xuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlBcnJheSkpIHtcbiAgICAgICAgbGV0IGNvZGUgPSAwO1xuICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gY29kZSArIGhhc2hQcmltaXRpdmVNZW1iZXIobmFtZSwgdmFsdWVbaV0sIGNvbmZpZ3VyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaFByaW1pdGl2ZU1lbWJlcihuYW1lLCB2YWx1ZSwgY29uZmlndXJhdGlvbik7XG59XG4iLCJpbXBvcnQgKiBhcyB0eXBlQ2hlY2tlciBmcm9tICcuL3R5cGUtY2hlY2tlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlU3RyaW5nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIGdpdmVuIHZhbHVlIGludG8gYW4gaW50ZWdlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VJbnQodmFsdWU6IGFueSk6IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5U3RyaW5nKSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIGdpdmVuIHZhbHVlIGludG8gYSBmbG9hdCBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlRmxvYXQodmFsdWU6IGFueSk6IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIDAuMDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5U3RyaW5nKSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDAuMDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGEgYm9vbCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VCb29sKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5Qm9vbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5U3RyaW5nKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA+IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGlmIGEgZ2l2ZW4gdmFsdWUgY2FuIGJlIHNhZmVseSBjb252ZXJ0ZWQgaW50byB0aGUgZ2l2ZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0aWJsZSh2YWx1ZTogYW55LCB0eTogdHlwZUNoZWNrZXIuSVR5cGVEZWYpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVDaGVja2VyLmlzTnVsbCh2YWx1ZSkgfHwgdHlwZUNoZWNrZXIuaXNVbmRlZmluZWQodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlOdW1iZXIgJiYgaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IHJlZmluZVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYWZlbHkgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIGludG8gYSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0KHZhbHVlOiBhbnksIHR5OiB0eXBlQ2hlY2tlci5JVHlwZURlZik6IGFueSB7XHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5TnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlCb29sKSB7XHJcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2wodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eVN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBnaXZlbiB0eXBlJyk7XHJcbn1cclxuIiwiLy8gXG4vLyBBdXRob3I6OiBUb20gVGFuZyA8cHJpbmNpcGxld2FyZUBnbWFpbC5jb20+XG4vLyBDb3B5cmlnaHQ6OiBDb3B5cmlnaHQgKGMpIDIwMTcsIFRvbSBUYW5nXG4vLyBcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuLy8gYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xuLy8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG4vLyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vLyBcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4vLyBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vIFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbi8vIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbi8vIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbi8vIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbi8vIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLyBcbi8vIEV4Y2VwdCBhcyBjb250YWluZWQgaW4gdGhpcyBub3RpY2UsIHRoZSBuYW1lKHMpIG9mIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIGhvbGRlcnMgc2hhbGwgbm90IGJlIHVzZWQgaW4gYWR2ZXJ0aXNpbmcgb3Igb3RoZXJ3aXNlIHRvIHByb21vdGUgdGhlXG4vLyBzYWxlLCB1c2Ugb3Igb3RoZXIgZGVhbGluZ3MgaW4gdGhpcyBTb2Z0d2FyZSB3aXRob3V0IHByaW9yIHdyaXR0ZW5cbi8vIGF1dGhvcml6YXRpb24uXG5cbmZ1bmN0aW9uIGFzYXAoZm4pIHtcbiAgICBzZXRUaW1lb3V0KGZuLCAxKTtcbn1cblxuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBBcnJheV1cIjsgfTtcblxuLyoqXG4gKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuICovXG5mdW5jdGlvbiBkb1Jlc29sdmUoZm4sIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBmbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIG9uRnVsZmlsbGVkKHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgb25SZWplY3RlZChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICBvblJlamVjdGVkKGV4KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShkZWZlcnJlZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhc2FwKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2IsIHJldDtcbiAgICAgICAgY2IgPSBtZS5fc3RhdGUgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgICAgIGlmIChjYiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgKG1lLl9zdGF0ZSA/IGRlZmVycmVkLnJlc29sdmUgOiBkZWZlcnJlZC5yZWplY3QpKG1lLl92YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldCA9IGNiKG1lLl92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJldCk7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gZmluYWxlKCkge1xuICAgIHZhciBpLCBsZW47XG4gICAgLypqc2xpbnQgcGx1c3BsdXM6dHJ1ZSAqL1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBoYW5kbGUuY2FsbCh0aGlzLCB0aGlzLl9kZWZlcnJlZHNbaV0pO1xuICAgIH1cbiAgICB0aGlzLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiByZWplY3QobmV3VmFsdWUpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmluYWxlLmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUobmV3VmFsdWUpIHtcbiAgICB0cnkgeyAvL1Byb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgJiYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBiaW5kKHJlc29sdmUsIHRoaXMpLCBiaW5kKHJlamVjdCwgdGhpcykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGZpbmFsZS5jYWxsKHRoaXMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgcmVqZWN0LmNhbGwodGhpcywgZSk7IH1cbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgZHVtbXkgcHJvbWlzZSwgd2hpY2ggc2ltdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBhIG5vcm1hbCBQcm9taXNlXG4gKiBidXQgaXMgc3VpdGFibGUgdXNlZCBpbiBzeW5jaHJvbm91cyBjYWxsLlxuICogVGhpcyByZXN1bHRlZCBvYmplY3QgaXMgYWxzbyBhIGpRdWVyeSBkZWZlcnJlZCBvYmplY3QsIHRoZXJlZm9yZSxcbiAqIGl0IHdpbGwgYmUgcmVzb2x2ZWQgYnkgdGhlIGpRdWVyeSBkZWZlcnJlZCBvYmplY3QgaWYgaXQgaXMgYSByZXNvbHZlZCB2YWx1ZSBpblxuICogdGhlIGpRdWVyeSBkZWZlcnJlZCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEdW1teVByb21pc2U8VD4oZm46IChyZXNvbHZlOiAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsIHJlamVjdDogKHJlYXNvbj8pID0+IHZvaWQpID0+IHZvaWQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcbiAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cbiAgICBkb1Jlc29sdmUoZm4sIGJpbmQocmVzb2x2ZSwgdGhpcyksIGJpbmQocmVqZWN0LCB0aGlzKSk7XG59XG5cblxuZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG59XG5cblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGhhbmRsZS5jYWxsKG1lLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzb2x2ZSwgcmVqZWN0KSk7XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uKGFycmF5QXJnKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoYXJyYXlBcmcpID8gYXJyYXlBcmcgOiBhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aCwgaTtcbiAgICAgICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWwsIGZ1bmN0aW9uKHZhbCkgeyByZXMoaSwgdmFsKTsgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gdmFsO1xuXG4gICAgICAgICAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICAgICAgICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi8gICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBEdW1teVByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZWplY3QodmFsdWUpO1xuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpLCBsZW47XG4gICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5hbHdheXMgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQsIG9uRnVsZmlsbGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xufTtcbiIsIi8vIFxyXG4vLyBBdXRob3I6OiBUb20gVGFuZyA8cHJpbmNpcGxld2FyZUBnbWFpbC5jb20+XHJcbi8vIENvcHlyaWdodDo6IENvcHlyaWdodCAoYykgMjAxNywgVG9tIFRhbmdcclxuLy8gXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xyXG4vLyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXHJcbi8vIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xyXG4vLyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vIFxyXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxyXG4vLyBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuLy8gXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbi8vIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG4vLyBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXHJcbi8vIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cclxuLy8gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXHJcbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4vLyBcclxuLy8gRXhjZXB0IGFzIGNvbnRhaW5lZCBpbiB0aGlzIG5vdGljZSwgdGhlIG5hbWUocykgb2YgdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyBob2xkZXJzIHNoYWxsIG5vdCBiZSB1c2VkIGluIGFkdmVydGlzaW5nIG9yIG90aGVyd2lzZSB0byBwcm9tb3RlIHRoZVxyXG4vLyBzYWxlLCB1c2Ugb3Igb3RoZXIgZGVhbGluZ3MgaW4gdGhpcyBTb2Z0d2FyZSB3aXRob3V0IHByaW9yIHdyaXR0ZW5cclxuLy8gYXV0aG9yaXphdGlvbi5cclxuXHJcblxyXG5pbXBvcnQgeyBEdW1teVByb21pc2UgfSBmcm9tICcuL3Byb21pc2UtbGlrZSc7XHJcbmltcG9ydCAqIGFzIHR5cGVDaGVja2VyIGZyb20gJy4uL3R5cGluZy90eXBlLWNoZWNrZXInO1xyXG5cclxuLyoqXHJcbiAqIExpZnRzIGEgc2luZ2xlIHZhbHVlIG9yIGEgZnVuY3Rpb24gaW50byBhIFByb21pc2UtbGlrZSBvYmplY3QuXHJcbiAqIFByb3ZpZGVzIGEgbWV0aG9kIG9mIHdyYXBwaW5nIGEgc2luZ2xlIHZhbHVlIG9yIGEgZnVuY3Rpb24gIGludG8gYSBQcm9taXNlLFxyXG4gKiBpbiBvcmRlciB0aGF0IHRoZSBmb2xsb3dpbmcgb3BlcmF0aW9uIFxyXG4gKiBtYXkgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgUHJvbWlzZSBvcGVyYXRpb24uXHJcbiAqIEluIHNvbWUgc2NlbmFyaW8sIHdlIG1heSBmaXJzdCBhdHRlbXB0IHRvIGdldCBhIHZhbHVlIGZyb20gY2FjaGUuXHJcbiAqIE1vdGl2YXRpb24uXHJcbiAqIEluIHRoaXMgY2FzZSwgd2UgbmVlZCB0byByZXR1cm4gYSB2YWx1ZS4gSG93ZXZlciwgaWYgdGhlIHZhbHVlIGlzXHJcbiAqIG5vdCBhdmFpbGFibGUgaW4gdGhlIGNhY2hlLCB3ZSBtYXkgaGF2ZSB0byBnbyBhaGVhZCB0byBsb2FkIGl0XHJcbiAqIGFzeW5jaHJvbm91c2x5LiBMb2FkaW5nIGEgdmFsdWUgYXN5bmNocm9ub3VzbHkgdXN1YWxseSByZXR1cm5zXHJcbiAqIGEgUHJvbWlzZS4gVG8gdW50aWZ5IHRoZSByZXR1cm4gZnJvbSB0d28gY2FzZXMsIHdlXHJcbiAqIGVzY2FsYXRlIGEgc2luZ2xlIHZhbHVlIGludG8gYSBQcm9taXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnQ8VD4odmFsdWU6IFQsIHRoaXNBcmc6IE9iamVjdCk6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGlmICh0eXBlQ2hlY2tlci5pc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN0QXJncyA9IFtdO1xyXG4gICAgICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVzdEFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHZhbHVlLmFwcGx5KHRoaXNBcmcgfHwgbnVsbCwgcmVzdEFyZ3MpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHJldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaWZ0cyBhIHZhbHVlIGludG8gYW4gcmVqZWN0ZWQgc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdEludG9SZWplY3Q8VD4odmFsdWU6IFQpOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICAgICAgcmVqZWN0KHZhbHVlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBnaXZlbiBwcm9taXNlIGludG8gYW5vdGhlciBwcm9taXNlIHdoaWNoIGVuc3VyZXMgdGhhdFxyXG4gKiB0aGUgZ2l2ZW4gZ3VhcmQgZXZhbHV0ZXMgdG8gYmUgdHJ1ZSBmcm9tIHRoZSBzdGF0ZSBvZiB0aGUgZ2l2ZW4gcHJvbWlzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0V2l0aEd1YXJkPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+LCBndWFyZDogKHg6IFQpID0+IGJvb2xlYW4pOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGd1YXJkKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHRsZXMgYSBwcm9taXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRsZTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPik6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogJ2Z1bGZpbGxlZCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogJ3JlamVjdGVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHByb21pc2UgaW50byBhIHByb21pc2Ugd2hpY2ggZG9lcyBub3QgcmVqZWN0IGFueXRoaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnRUb1ByZWRpY2F0ZTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPiwgZ3VhcmQ6ICh4OiBUKSA9PiBib29sZWFuKTogUHJvbWlzZUxpa2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZ3VhcmQoZGF0YSkpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGlwZWxpbmVTZXR0aW5nczxVPiB7XHJcbiAgICB2YWxpZGF0b3I/OiAoeCkgPT4gYm9vbGVhbixcclxuICAgIGFkYXB0b3I6ICh4KSA9PiBVXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIGEgZ2l2ZW4gcHJvbWlzZSB3aXRoIGFkZGl0b25hbCBwaXBlbGluZSBwcm9jZXNzaW5nLlxyXG4gKiBTcGVjaWZpY2FsbHksIGluIHRoaXMgbWV0aG9kLCBjb21wYXJlZCB0byB0aGUgZ2l2ZW4gcHJvbWlzZSwgdGhlIHJldHVyblxyXG4gKiBwcm9taXNlIGNvbnRhaW5zIHZhbGlkYXRpbmcgYW5kIGFkcGF0aW5nIHN0YWdlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkZXJQaXBlbGluZTxULCBVPihyZWFkZXJQcm9taXNlOiBQcm9taXNlTGlrZTxUPiwgc2V0dGluZ3M6IElQaXBlbGluZVNldHRpbmdzPFU+KSB7XHJcbiAgICByZXR1cm4gcmVhZGVyUHJvbWlzZVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5ncy52YWxpZGF0b3IoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgaXMgbm90IHZhbGlkOiAnICsgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5hZGFwdG9yKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhIGdpdmVuIHByb21pc2UgaW50byBvbmUgcHJvbWlzZSB3aXRoIG91ciBvd24gaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+KTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFByb3ZpZGVzIHV0aWxpdGllcyBmb3IgbWFraW5nIGludGVyb3BlcmFibGUgdGhlIHByb21pc2UtbGlrZSBvYmplY3RzXG4gKiBmcm9tIGRpZmZlcmVudCBtb2R1bGVzLlxuICovXG4vKipcbiAqIEV4dGVuZHMgYSBnaXZlbiBwcm9taXNlIGludG8gYSBkZWZlcnJlZCBvYmplY3Qgb2YgalF1ZXJ5LlxuICogV2l0aCB0aGlzIGV4dGVuc2lvbiwgd2UgYXJlIGFibGUgdG8gY2hhaW4gdG9nZXRoZXIgalF1ZXJ5IGRlZmVycmVkXG4gKiBvYmplY3RzICh3aGljaCBhcmUgYWxzbyBwcm9taXNlIG9iamVjdHMuKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9qUXVlcnlEZWZlcnJlZChwcm9taXNlKSB7XG4gICAgaWYgKCFwcm9taXNlLmFsd2F5cykge1xuICAgICAgICBwcm9taXNlLmFsd2F5cyA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkLCBvbkZ1bGZpbGxlZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5kb25lKSB7XG4gICAgICAgIHByb21pc2UuZG9uZSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLmZhaWwpIHtcbiAgICAgICAgcHJvbWlzZS5mYWlsID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLnByb2dyZXNzKSB7XG4gICAgICAgIHByb21pc2UucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UucHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlQ2hlY2tlci5vayIsInR5cGVDaGVja2VyLnR5Qm9vbCIsInR5cGVDaGVja2VyLnR5TnVtYmVyIiwidHlwZUNoZWNrZXIudHlBcnJheSIsInR5cGVDaGVja2VyLnR5U3RyaW5nIiwidHlwZUNoZWNrZXIuaXNOdWxsIiwidHlwZUNoZWNrZXIuaXNVbmRlZmluZWQiLCJpc0FycmF5IiwidHlwZUNoZWNrZXIuaXNGdW5jdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7SUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztJQUM3QixNQUFNLElBQUksR0FBRyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQzs7UUFDM0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdB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