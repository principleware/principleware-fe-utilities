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

export { guid, getRandomInt, urlEncodePair, urlEncode, getParamByName, getQueryParamByName, getHashParamByName, pushArray, makeArray, replace, applyEscape, reverseEscape, diff, hashCode, hashMember, safeParseString, safeParseInt, safeParseFloat, safeParseBool, convertible, convert, isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isArray, isObject, isFunction, tyBool, tyNull, tyUndefined, tyNumber, tyString, tySymbol, tyObject, tyArray, tyFunction, defaultValue, ok, getType, assert, lift, liftIntoReject, liftWithGuard, settle, liftToPredicate, readerPipeline, transform, tojQueryDeferred, DummyPromise };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtZmUtdXRpbGl0aWVzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvdG9vbHMvbWF0aC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL3VybC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL2Fyci50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL3N0ci50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Rvb2xzL3NldC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3R5cGluZy90eXBlLWNoZWNrZXIudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy90b29scy9oYXNoLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvdHlwaW5nL3R5cGUtY2FzdC50cyIsIm5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzL3NyYy9saWIvc3JjL3Byb21pc2UvcHJvbWlzZS1saWtlLnRzIiwibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvc3JjL2xpYi9zcmMvcHJvbWlzZS9tb25hZGljLW9wZXJhdGlvbnMudHMiLCJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy9zcmMvbGliL3NyYy9wcm9taXNlL2ludGVyLW9wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBndWlkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWQoKSB7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XHJcbiAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiAociAmIDB4NyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gdGhlIGdpdmVuIHJhbmdlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG4iLCIvKipcclxuICogRW5jb2RlcyBhIGtleS12YWx1ZSBwYWlyLCB3aGVyZSBhIHZhbHVlIGNhbiBiZSBhbiBhcnJheS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmxFbmNvZGVQYWlyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdHI6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICdbXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEVuY29kZXMgYW4gb2JqZWN0IGluIHd3dyBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVybEVuY29kZShkYXRhOiBPYmplY3QpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc3RyOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBmb3IgKGxldCBwIGluIGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICB1cmxFbmNvZGVQYWlyKHAsIGRhdGFbcF0sIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKCcmJykucmVwbGFjZSgvJTIwL2csICcrJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbUJ5TmFtZShuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1s/IyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcbiAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghcmVzdWx0c1syXSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVBhcmFtQnlOYW1lKG5hbWU6IHN0cmluZywgdXJsPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldFBhcmFtQnlOYW1lKG5hbWUsIHVybCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoUGFyYW1CeU5hbWUobmFtZTogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0UGFyYW1CeU5hbWUobmFtZSwgdXJsKTtcclxufVxyXG4iLCIvKipcclxuICogUHVzaHMgYW4gYXJyYXkgb3IgYSBzaW5nbGUgdmFsdWUgaW50byB0aGUgdGhpc0FyZztcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXNoQXJyYXk8VD4odGhpc0FyZzogQXJyYXk8VD4sIHNyYzogQXJyYXk8VD4gfCBUKTogdm9pZCB7XHJcbiAgICBpZiAoIShzcmMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICB0aGlzQXJnLnB1c2goc3JjKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3JjLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHRoaXNBcmcucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHVybnMgdGhlIHZhbHVlcyBpbiBhbiBvYmplY3QgaW50byBhbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBcnJheShvOiBPYmplY3QpIHtcclxuICAgIGNvbnN0IHJldCA9IFtdO1xyXG4gICAgZm9yIChsZXQgbiBpbiBvKSB7XHJcbiAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkobikpIHtcclxuICAgICAgICAgICAgcmV0LnB1c2gob1tuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCIvKipcclxuICogUmVwbGFjZXMgdGhlIHBsYWNlaG9sZGVycyBhIGdpdmVuIGZvcm1hdCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoZm9ybWF0OiBzdHJpbmcsIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XHJcbiAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoL1xceyhbYS16QS1aXSspXFx9L2csIGZ1bmN0aW9uKHMsIGtleSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHBhcmFtc1trZXldID09PSAndW5kZWZpbmVkJykgPyAnJyA6IHBhcmFtc1trZXldO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSBnaXZlbiBzdHJpbmcgaW50byBvbmUgd2hlcmVcclxuICogc29tZSBjaGFyYWN0ZXJzIGhhdmUgYmVlbiBwcm9wZXJseSByZXBsYWNlZCB3aXRoXHJcbiAqIHRoZWlyIGVzY2FwZSB2ZXJzaW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVzY2FwZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZGF0YSA9IGRhdGFcclxuICAgICAgICAucmVwbGFjZSgvW1xcXFxdL2csICdcXFxcXFxcXCcpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXFwiXS9nLCAnXFxcXFxcXCInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFwvXS9nLCAnXFxcXC8nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxiXS9nLCAnXFxcXGInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxmXS9nLCAnXFxcXGYnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxuXS9nLCAnXFxcXG4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxyXS9nLCAnXFxcXHInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFx0XS9nLCAnXFxcXHQnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogVW5kbyB0aGUgd29yayBieSBhcHBseUVzY2FwZS4gSXQgcmVwbGFjZXMgdGhlIGVzY2FwZVxyXG4gKiBjaGFyYWN0ZXJzIHdpdGggdGhlaXIgdW5lc2NhcGVkIG9uZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUVzY2FwZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZGF0YSA9IGRhdGFcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcIi9nLCAnXFxcIicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXC8vZywgJ1xcLycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXGIvZywgJ1xcYicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXGYvZywgJ1xcZicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXG4vZywgJ1xcbicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXHIvZywgJ1xccicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXHQvZywgJ1xcdCcpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiLy8gZmlyc3RTZXQgLSBzZWNvbmRTZXQgKGFueSBlbGVtZW50IG5vdCBpbiBzZWNvbmRTZXQpXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmPFQsIFU+KGZpcnN0U2V0OiBBcnJheTxUPixcclxuICAgIHNlY29uZFNldDogQXJyYXk8VT4sXHJcbiAgICBwcmVkaWNhdGU6IChmaXJzdEVsZW06IFQsIHNlY29uZEVsZW06IFUpID0+IGJvb2xlYW4pOiBBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gZmlyc3RTZXQuZmlsdGVyKCh4OiBUKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICFzZWNvbmRTZXQuc29tZSgoeTogVSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlZGljYXRlKHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsIi8qXHJcbkJhc2ljVHlwZXMgOj0gXHJcbiAgICBib29sZWFuIFxyXG4gIHwgbnVtYmVyIFxyXG4gIHwgc3RyaW5nIFxyXG4gIHwgc3ltYm9sXHJcbiAgfCBudWxsXHJcbiAgfCB1bmRlZmluZWRcclxuICB8IGFycmF5IFxyXG4gIHwgb2JqZWN0XHJcbiAgfCBmdW5jdGlvblxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oeDogYW55KTogeCBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeDogYW55KTogeCBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHg6IGFueSk6IHggaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N5bWJvbCh4OiBhbnkpOiB4IGlzIHN5bWJvbCB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdzeW1ib2wnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHg6IGFueSk6IHggaXMgbnVsbCB7XHJcbiAgICByZXR1cm4geCA9PT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHg6IGFueSk6IHggaXMgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHg6IGFueSk6IHggaXMgQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4geCBpbnN0YW5jZW9mIEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoeDogYW55KTogeCBpcyBPYmplY3Qge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeDogYW55KTogeCBpcyBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVR5cGVEZWYge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdmFsOiBhbnksXHJcbiAgICBwcmVkOiAoYW55KSA9PiBib29sZWFuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHlCb29sOiBJVHlwZURlZiA9IHsgbmFtZTogJ0Jvb2xlYW4nLCB2YWw6IGZhbHNlLCBwcmVkOiBpc0Jvb2xlYW4gfTtcclxuZXhwb3J0IGNvbnN0IHR5TnVsbDogSVR5cGVEZWYgPSB7IG5hbWU6ICdOdWxsJywgdmFsOiBudWxsLCBwcmVkOiBpc051bGwgfTtcclxuZXhwb3J0IGNvbnN0IHR5VW5kZWZpbmVkOiBJVHlwZURlZiA9IHsgbmFtZTogJ1VuZGVmaW5lZCcsIHZhbDogdW5kZWZpbmVkLCBwcmVkOiBpc1VuZGVmaW5lZCB9O1xyXG5leHBvcnQgY29uc3QgdHlOdW1iZXI6IElUeXBlRGVmID0geyBuYW1lOiAnTnVtYmVyJywgdmFsOiAwLCBwcmVkOiBpc051bWJlciB9O1xyXG5leHBvcnQgY29uc3QgdHlTdHJpbmc6IElUeXBlRGVmID0geyBuYW1lOiAnU3RyaW5nJywgdmFsOiAnJywgcHJlZDogaXNTdHJpbmcgfTtcclxuZXhwb3J0IGNvbnN0IHR5U3ltYm9sOiBJVHlwZURlZiA9IHsgbmFtZTogJ1N5bWJvbCcsIHZhbDogbnVsbCwgcHJlZDogaXNTeW1ib2wgfTtcclxuZXhwb3J0IGNvbnN0IHR5T2JqZWN0OiBJVHlwZURlZiA9IHsgbmFtZTogJ09iamVjdCcsIHZhbDogZnVuY3Rpb24oKSB7IHJldHVybiB7fTsgfSwgcHJlZDogaXNPYmplY3QgfTtcclxuZXhwb3J0IGNvbnN0IHR5QXJyYXk6IElUeXBlRGVmID0geyBuYW1lOiAnQXJyYXknLCB2YWw6IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH0sIHByZWQ6IGlzQXJyYXkgfTtcclxuZXhwb3J0IGNvbnN0IHR5RnVuY3Rpb246IElUeXBlRGVmID0geyBuYW1lOiAnRnVuY3Rpb24nLCB2YWw6IGZ1bmN0aW9uKCkgeyB9LCBwcmVkOiBpc0Z1bmN0aW9uIH07XHJcblxyXG4vKipcclxuICogIFByZWRlZmluZWQgdHlwZXMgYW5kIHRoZWlyIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5jb25zdCBwcmVEZWZpbmVkVHlwZXM6IHsgW2tleTogc3RyaW5nXTogSVR5cGVEZWYgfSA9IHtcclxuICAgIHR5Qm9vbDogdHlCb29sLFxyXG4gICAgdHlOdWxsOiB0eU51bGwsXHJcbiAgICB0eVVuZGVmaW5lZDogdHlVbmRlZmluZWQsXHJcbiAgICB0eU51bWJlcjogdHlOdW1iZXIsXHJcbiAgICB0eVN0cmluZzogdHlTdHJpbmcsXHJcbiAgICB0eVN5bWJvbDogdHlTeW1ib2wsXHJcbiAgICB0eU9iamVjdDogdHlPYmplY3QsXHJcbiAgICB0eUFycmF5OiB0eUFycmF5LFxyXG4gICAgdHlGdW5jdGlvbjogdHlGdW5jdGlvblxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgYSBnaXZlbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZSh0eTogSVR5cGVEZWYpOiBhbnkge1xyXG4gICAgbGV0IHZhbCA9IHR5LnZhbDtcclxuICAgIGlmICh0eSAhPT0gdHlGdW5jdGlvbiAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdmFsID0gdmFsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG4vKipcclxuICogVHlwZSBjaGVja3MgaWYgYSBnaXZlbiB2YWx1ZSBpcyB0eXBlIG9mIHRoZSBnaXZlbiB0eVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9rKHZhbHVlOiBhbnksIHR5OiBJVHlwZURlZik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5LnByZWQodmFsdWUpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgdHlwZSBmb3IgdGhlIGdpdmVuIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsdWU6IGFueSk6IElUeXBlRGVmIHtcclxuICAgIGZvciAobGV0IHByb3AgaW4gcHJlRGVmaW5lZFR5cGVzKSB7XHJcbiAgICAgICAgaWYgKG9rKHZhbHVlLCBwcmVEZWZpbmVkVHlwZXNbcHJvcF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVEZWZpbmVkVHlwZXNbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQodmFsdWU6IGFueSwgdHk6IElUeXBlRGVmKTogdm9pZCB7XHJcbiAgICBpZiAob2sodmFsdWUsIHR5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcigndHlwZSBjaGVjayBlcnJvcjogZXhwdGVjdGVkIHR5cGUgaXMgJyArXHJcbiAgICAgICAgdHkgKyAnIGJ1dCBnaXZlbiB0eXBlIGlzICcgKyB0eXBlb2YgdmFsdWUpO1xyXG59XHJcbiIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUHJvdmlkZXMgdXRpbGl0aWVzIGZvciBjb21wdXRpbmcgaGFzaCB2YWx1ZXNcbiAqL1xuXG5pbXBvcnQgKiBhcyB0eXBlQ2hlY2tlciBmcm9tICcuLi90eXBpbmcvdHlwZS1jaGVja2VyJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGFzaCBjb2RlIGZvciBhIGdpdmVuIHZhbHVlLlxuICogVGhpcyBtZXRob2QgdGFrZXMgaW50byBhY2NvdW50IHRoZSB0eXBlIG9mIHRoZSBnaXZlblxuICogdmFsdWUgd2hlbiBnZW5lcmF0aW5nIGl0cyBoYXNoIGNvZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZSh2YWx1ZTogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUJvb2wpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPyAxIDogMDtcbiAgICB9IGVsc2UgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNociA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhhc2ggY29kZSBmb3IgYSBtZW1iZXIgb2YgYW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgY29uZmlndXJhdGlvbjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IGNvZGUgPSBoYXNoQ29kZSh2YWx1ZSk7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uc3QgYml0cyA9IGNvbmZpZ3VyYXRpb25bbmFtZV07XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZSA8PCBjb25maWd1cmF0aW9uW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2RlO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBoYXNoIGNvZGUgZm9yIGEgbWVtYmVyIG9mIGFuIG9iamVjdCwgYmFzZWQgb25cbiAqIHRoZSBnaXZlbiBtZW1iZXIgbWVtYmVyLCB0aGUgdmFsdWUgdG8gYmUgaGFzaGVkLCBhbmQgdGhlIGNvbmZpZ3VyYXRpb25cbiAqIGFib3V0IGhvdyBlYWNoIG1lbWJlciBjb250cmlidXRlcyB0byB0aGUgZW5pcmUgaGFzaCBjb2RlIG9mIHRoZVxuICogb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaE1lbWJlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGNvbmZpZ3VyYXRpb246IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pIHtcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5QXJyYXkpKSB7XG4gICAgICAgIGxldCBjb2RlID0gMDtcbiAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IGNvZGUgKyBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWUsIHZhbHVlW2ldLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2hQcmltaXRpdmVNZW1iZXIobmFtZSwgdmFsdWUsIGNvbmZpZ3VyYXRpb24pO1xufVxuIiwiaW1wb3J0ICogYXMgdHlwZUNoZWNrZXIgZnJvbSAnLi90eXBlLWNoZWNrZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZVN0cmluZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGFuIGludGVnZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlSW50KHZhbHVlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGEgZmxvYXQgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUZsb2F0KHZhbHVlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAwLjAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAwLjAwO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgZ2l2ZW4gdmFsdWUgaW50byBhIGJvb2wgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlQm9vbCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUJvb2wpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBpZiBhIGdpdmVuIHZhbHVlIGNhbiBiZSBzYWZlbHkgY29udmVydGVkIGludG8gdGhlIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGlibGUodmFsdWU6IGFueSwgdHk6IHR5cGVDaGVja2VyLklUeXBlRGVmKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5KSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlQ2hlY2tlci5pc051bGwodmFsdWUpIHx8IHR5cGVDaGVja2VyLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5TnVtYmVyICYmIGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiByZWZpbmVcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogU2FmZWx5IGNvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBpbnRvIGEgdmFsdWUgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydCh2YWx1ZTogYW55LCB0eTogdHlwZUNoZWNrZXIuSVR5cGVEZWYpOiBhbnkge1xyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5Qm9vbCkge1xyXG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VCb29sKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgZ2l2ZW4gdHlwZScpO1xyXG59XHJcbiIsIi8vIFxuLy8gQXV0aG9yOjogVG9tIFRhbmcgPHByaW5jaXBsZXdhcmVAZ21haWwuY29tPlxuLy8gQ29weXJpZ2h0OjogQ29weXJpZ2h0IChjKSAyMDE3LCBUb20gVGFuZ1xuLy8gXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbi8vIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbi8vIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xuLy8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy8gXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vLyBcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4vLyBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4vLyBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG4vLyBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4vLyBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8gXG4vLyBFeGNlcHQgYXMgY29udGFpbmVkIGluIHRoaXMgbm90aWNlLCB0aGUgbmFtZShzKSBvZiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBob2xkZXJzIHNoYWxsIG5vdCBiZSB1c2VkIGluIGFkdmVydGlzaW5nIG9yIG90aGVyd2lzZSB0byBwcm9tb3RlIHRoZVxuLy8gc2FsZSwgdXNlIG9yIG90aGVyIGRlYWxpbmdzIGluIHRoaXMgU29mdHdhcmUgd2l0aG91dCBwcmlvciB3cml0dGVuXG4vLyBhdXRob3JpemF0aW9uLlxuXG5mdW5jdGlvbiBhc2FwKGZuKSB7XG4gICAgc2V0VGltZW91dChmbiwgMSk7XG59XG5cbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgQXJyYXldXCI7IH07XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZm4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBvbkZ1bGZpbGxlZCh2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIG9uUmVqZWN0ZWQocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgb25SZWplY3RlZChleCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGUoZGVmZXJyZWQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXNhcChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNiLCByZXQ7XG4gICAgICAgIGNiID0gbWUuX3N0YXRlID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuICAgICAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIChtZS5fc3RhdGUgPyBkZWZlcnJlZC5yZXNvbHZlIDogZGVmZXJyZWQucmVqZWN0KShtZS5fdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXQgPSBjYihtZS5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXQpO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZpbmFsZSgpIHtcbiAgICB2YXIgaSwgbGVuO1xuICAgIC8qanNsaW50IHBsdXNwbHVzOnRydWUgKi9cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaGFuZGxlLmNhbGwodGhpcywgdGhpcy5fZGVmZXJyZWRzW2ldKTtcbiAgICB9XG4gICAgdGhpcy5fZGVmZXJyZWRzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVqZWN0KG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpbmFsZS5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlKG5ld1ZhbHVlKSB7XG4gICAgdHJ5IHsgLy9Qcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlICYmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgYmluZChyZXNvbHZlLCB0aGlzKSwgYmluZChyZWplY3QsIHRoaXMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUuY2FsbCh0aGlzKTtcbiAgICB9IGNhdGNoIChlKSB7IHJlamVjdC5jYWxsKHRoaXMsIGUpOyB9XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIGR1bW15IHByb21pc2UsIHdoaWNoIHNpbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgYSBub3JtYWwgUHJvbWlzZVxuICogYnV0IGlzIHN1aXRhYmxlIHVzZWQgaW4gc3luY2hyb25vdXMgY2FsbC5cbiAqIFRoaXMgcmVzdWx0ZWQgb2JqZWN0IGlzIGFsc28gYSBqUXVlcnkgZGVmZXJyZWQgb2JqZWN0LCB0aGVyZWZvcmUsXG4gKiBpdCB3aWxsIGJlIHJlc29sdmVkIGJ5IHRoZSBqUXVlcnkgZGVmZXJyZWQgb2JqZWN0IGlmIGl0IGlzIGEgcmVzb2x2ZWQgdmFsdWUgaW5cbiAqIHRoZSBqUXVlcnkgZGVmZXJyZWQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gRHVtbXlQcm9taXNlPFQ+KGZuOiAocmVzb2x2ZTogKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb24/KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gICAgZG9SZXNvbHZlKGZuLCBiaW5kKHJlc29sdmUsIHRoaXMpLCBiaW5kKHJlamVjdCwgdGhpcykpO1xufVxuXG5cbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gICAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xufVxuXG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBoYW5kbGUuY2FsbChtZSwgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlc29sdmUsIHJlamVjdCkpO1xuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbihhcnJheUFyZykge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KGFycmF5QXJnKSA/IGFycmF5QXJnIDogYXJndW1lbnRzKTtcblxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGgsIGk7XG4gICAgICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwodmFsLCBmdW5jdGlvbih2YWwpIHsgcmVzKGksIHZhbCk7IH0sIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IHZhbDtcblxuICAgICAgICAgICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgICAgICAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gRHVtbXlQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KHZhbHVlKTtcbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucmFjZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaSwgbGVuO1xuICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuYWx3YXlzID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkLCBvbkZ1bGZpbGxlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG4iLCIvLyBcclxuLy8gQXV0aG9yOjogVG9tIFRhbmcgPHByaW5jaXBsZXdhcmVAZ21haWwuY29tPlxyXG4vLyBDb3B5cmlnaHQ6OiBDb3B5cmlnaHQgKGMpIDIwMTcsIFRvbSBUYW5nXHJcbi8vIFxyXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcclxuLy8gYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXHJcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xyXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXHJcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xyXG4vLyBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cclxuLy8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4vLyBcclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vIFxyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG4vLyBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcclxuLy8gTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxyXG4vLyBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXHJcbi8vIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxyXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuLy8gXHJcbi8vIEV4Y2VwdCBhcyBjb250YWluZWQgaW4gdGhpcyBub3RpY2UsIHRoZSBuYW1lKHMpIG9mIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gaG9sZGVycyBzaGFsbCBub3QgYmUgdXNlZCBpbiBhZHZlcnRpc2luZyBvciBvdGhlcndpc2UgdG8gcHJvbW90ZSB0aGVcclxuLy8gc2FsZSwgdXNlIG9yIG90aGVyIGRlYWxpbmdzIGluIHRoaXMgU29mdHdhcmUgd2l0aG91dCBwcmlvciB3cml0dGVuXHJcbi8vIGF1dGhvcml6YXRpb24uXHJcblxyXG5cclxuaW1wb3J0IHsgRHVtbXlQcm9taXNlIH0gZnJvbSAnLi9wcm9taXNlLWxpa2UnO1xyXG5pbXBvcnQgKiBhcyB0eXBlQ2hlY2tlciBmcm9tICcuLi90eXBpbmcvdHlwZS1jaGVja2VyJztcclxuXHJcbi8qKlxyXG4gKiBMaWZ0cyBhIHNpbmdsZSB2YWx1ZSBvciBhIGZ1bmN0aW9uIGludG8gYSBQcm9taXNlLWxpa2Ugb2JqZWN0LlxyXG4gKiBQcm92aWRlcyBhIG1ldGhvZCBvZiB3cmFwcGluZyBhIHNpbmdsZSB2YWx1ZSBvciBhIGZ1bmN0aW9uICBpbnRvIGEgUHJvbWlzZSxcclxuICogaW4gb3JkZXIgdGhhdCB0aGUgZm9sbG93aW5nIG9wZXJhdGlvbiBcclxuICogbWF5IGNvbmZvcm0gdG8gdGhlIHN0YW5kYXJkIFByb21pc2Ugb3BlcmF0aW9uLlxyXG4gKiBJbiBzb21lIHNjZW5hcmlvLCB3ZSBtYXkgZmlyc3QgYXR0ZW1wdCB0byBnZXQgYSB2YWx1ZSBmcm9tIGNhY2hlLlxyXG4gKiBNb3RpdmF0aW9uLlxyXG4gKiBJbiB0aGlzIGNhc2UsIHdlIG5lZWQgdG8gcmV0dXJuIGEgdmFsdWUuIEhvd2V2ZXIsIGlmIHRoZSB2YWx1ZSBpc1xyXG4gKiBub3QgYXZhaWxhYmxlIGluIHRoZSBjYWNoZSwgd2UgbWF5IGhhdmUgdG8gZ28gYWhlYWQgdG8gbG9hZCBpdFxyXG4gKiBhc3luY2hyb25vdXNseS4gTG9hZGluZyBhIHZhbHVlIGFzeW5jaHJvbm91c2x5IHVzdWFsbHkgcmV0dXJuc1xyXG4gKiBhIFByb21pc2UuIFRvIHVudGlmeSB0aGUgcmV0dXJuIGZyb20gdHdvIGNhc2VzLCB3ZVxyXG4gKiBlc2NhbGF0ZSBhIHNpbmdsZSB2YWx1ZSBpbnRvIGEgUHJvbWlzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0PFQ+KHZhbHVlOiBULCB0aGlzQXJnOiBPYmplY3QpOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBpZiAodHlwZUNoZWNrZXIuaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdEFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3RBcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXQgPSB2YWx1ZS5hcHBseSh0aGlzQXJnIHx8IG51bGwsIHJlc3RBcmdzKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogTGlmdHMgYSB2YWx1ZSBpbnRvIGFuIHJlamVjdGVkIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnRJbnRvUmVqZWN0PFQ+KHZhbHVlOiBUKTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgICAgIHJlamVjdCh2YWx1ZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgZ2l2ZW4gcHJvbWlzZSBpbnRvIGFub3RoZXIgcHJvbWlzZSB3aGljaCBlbnN1cmVzIHRoYXRcclxuICogdGhlIGdpdmVuIGd1YXJkIGV2YWx1dGVzIHRvIGJlIHRydWUgZnJvbSB0aGUgc3RhdGUgb2YgdGhlIGdpdmVuIHByb21pc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdFdpdGhHdWFyZDxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPiwgZ3VhcmQ6ICh4OiBUKSA9PiBib29sZWFuKTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChndWFyZChkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXR0bGVzIGEgcHJvbWlzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0bGU8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4pOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdmdWxmaWxsZWQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdyZWplY3RlZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBwcm9taXNlIGludG8gYSBwcm9taXNlIHdoaWNoIGRvZXMgbm90IHJlamVjdCBhbnl0aGluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0VG9QcmVkaWNhdGU8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4sIGd1YXJkOiAoeDogVCkgPT4gYm9vbGVhbik6IFByb21pc2VMaWtlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGd1YXJkKGRhdGEpKTtcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBpcGVsaW5lU2V0dGluZ3M8VT4ge1xyXG4gICAgdmFsaWRhdG9yPzogKHgpID0+IGJvb2xlYW4sXHJcbiAgICBhZGFwdG9yOiAoeCkgPT4gVVxyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhIGdpdmVuIHByb21pc2Ugd2l0aCBhZGRpdG9uYWwgcGlwZWxpbmUgcHJvY2Vzc2luZy5cclxuICogU3BlY2lmaWNhbGx5LCBpbiB0aGlzIG1ldGhvZCwgY29tcGFyZWQgdG8gdGhlIGdpdmVuIHByb21pc2UsIHRoZSByZXR1cm5cclxuICogcHJvbWlzZSBjb250YWlucyB2YWxpZGF0aW5nIGFuZCBhZHBhdGluZyBzdGFnZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVhZGVyUGlwZWxpbmU8VCwgVT4ocmVhZGVyUHJvbWlzZTogUHJvbWlzZUxpa2U8VD4sIHNldHRpbmdzOiBJUGlwZWxpbmVTZXR0aW5nczxVPikge1xyXG4gICAgcmV0dXJuIHJlYWRlclByb21pc2VcclxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3MudmFsaWRhdG9yKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGlzIG5vdCB2YWxpZDogJyArIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MuYWRhcHRvcihkYXRhKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYSBnaXZlbiBwcm9taXNlIGludG8gb25lIHByb21pc2Ugd2l0aCBvdXIgb3duIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPik6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBQcm92aWRlcyB1dGlsaXRpZXMgZm9yIG1ha2luZyBpbnRlcm9wZXJhYmxlIHRoZSBwcm9taXNlLWxpa2Ugb2JqZWN0c1xuICogZnJvbSBkaWZmZXJlbnQgbW9kdWxlcy5cbiAqL1xuLyoqXG4gKiBFeHRlbmRzIGEgZ2l2ZW4gcHJvbWlzZSBpbnRvIGEgZGVmZXJyZWQgb2JqZWN0IG9mIGpRdWVyeS5cbiAqIFdpdGggdGhpcyBleHRlbnNpb24sIHdlIGFyZSBhYmxlIHRvIGNoYWluIHRvZ2V0aGVyIGpRdWVyeSBkZWZlcnJlZFxuICogb2JqZWN0cyAod2hpY2ggYXJlIGFsc28gcHJvbWlzZSBvYmplY3RzLilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvalF1ZXJ5RGVmZXJyZWQocHJvbWlzZSkge1xuICAgIGlmICghcHJvbWlzZS5hbHdheXMpIHtcbiAgICAgICAgcHJvbWlzZS5hbHdheXMgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCwgb25GdWxmaWxsZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UuZG9uZSkge1xuICAgICAgICBwcm9taXNlLmRvbmUgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5mYWlsKSB7XG4gICAgICAgIHByb21pc2UuZmFpbCA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5wcm9ncmVzcykge1xuICAgICAgICBwcm9taXNlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLnByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZS5wcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG4iXSwibmFtZXMiOlsidHlwZUNoZWNrZXIub2siLCJ0eXBlQ2hlY2tlci50eUJvb2wiLCJ0eXBlQ2hlY2tlci50eU51bWJlciIsInR5cGVDaGVja2VyLnR5QXJyYXkiLCJ0eXBlQ2hlY2tlci50eVN0cmluZyIsInR5cGVDaGVja2VyLmlzTnVsbCIsInR5cGVDaGVja2VyLmlzVW5kZWZpbmVkIiwiaXNBcnJheSIsInR5cGVDaGVja2VyLmlzRnVuY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7O0lBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7SUFDN0IsTUFBTSxJQUFJLEdBQUcsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7O1FBQzNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3pELENBQUMsQ0FBQztJQUNILE9BQU8sSUFBSSxDQUFDO0NBQ2Y7Ozs7Ozs7QUFLRCxzQkFBNkIsR0FBRyxFQUFFLEdBQUc7SUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQzVEOzs7Ozs7Ozs7Ozs7O0FDZkQsdUJBQThCLEdBQVcsRUFBRSxLQUFVLEVBQUUsR0FBa0I7SUFDckUsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN4RSxDQUFDLENBQUM7S0FDTjtTQUFNO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN2RTtDQUNKOzs7Ozs7QUFLRCxtQkFBMEIsSUFBWTs7SUFDbEMsTUFBTSxHQUFHLEdBQWtCLEVBQUUsQ0FBQztJQUM5QixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNoQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEM7S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzdDOzs7Ozs7QUFFRCx3QkFBK0IsSUFBWSxFQUFFLEdBQVc7SUFDcEQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztJQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLG1CQUFtQixDQUFDLENBQUM7O0lBQy9ELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2IsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELE9BQU8sa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUM3RDs7Ozs7O0FBRUQsNkJBQW9DLElBQVksRUFBRSxHQUFZO0lBQzFELElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDTixHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDOUI7SUFDRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDcEM7Ozs7OztBQUVELDRCQUFtQyxJQUFZLEVBQUUsR0FBWTtJQUN6RCxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ04sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQzlCO0lBQ0QsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ3BDOzs7Ozs7Ozs7Ozs7O0FDaERELG1CQUE2QixPQUFpQixFQUFFLEdBQWlCO0lBQzdELElBQUksRUFBRSxHQUFHLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixPQUFPO0tBQ1Y7SUFFRCxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCLENBQUMsQ0FBQztDQUNOOzs7Ozs7QUFLRCxtQkFBMEIsQ0FBUzs7SUFDL0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUM7Q0FDZDs7Ozs7Ozs7Ozs7O0FDdEJELGlCQUF3QixNQUFjLEVBQUUsTUFBOEI7O0lBRWxFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxVQUFTLENBQUMsRUFBRSxHQUFHO1FBQ3JELE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRSxDQUFDLENBQUM7Q0FDTjs7Ozs7Ozs7QUFPRCxxQkFBNEIsSUFBWTtJQUNwQyxJQUFJLEdBQUcsSUFBSTtTQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1NBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1NBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsT0FBTyxJQUFJLENBQUM7Q0FDZjs7Ozs7OztBQU1ELHVCQUE4QixJQUFZO0lBQ3RDLElBQUksR0FBRyxJQUFJO1NBQ04sT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixPQUFPLElBQUksQ0FBQztDQUNmOzs7Ozs7Ozs7Ozs7O0FDMUNELGNBQTJCLFFBQWtCLEVBQ3pDLFNBQW1CLEVBQ25CLFNBQW1EO0lBQ25ELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUk7UUFDeEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFJO1lBQ3hCLE9BQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7Q0FDTjs7Ozs7Ozs7OztBQ0tELG1CQUEwQixDQUFNO0lBQzVCLE9BQU8sT0FBTyxDQUFDLEtBQUssU0FBUyxDQUFDO0NBQ2pDOzs7OztBQUVELGtCQUF5QixDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELGtCQUF5QixDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELGtCQUF5QixDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELGdCQUF1QixDQUFNO0lBQ3pCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQztDQUNyQjs7Ozs7QUFFRCxxQkFBNEIsQ0FBTTtJQUM5QixPQUFPLENBQUMsS0FBSyxTQUFTLENBQUM7Q0FDMUI7Ozs7O0FBRUQsaUJBQXdCLENBQU07SUFDMUIsT0FBTyxDQUFDLFlBQVksS0FBSyxDQUFDO0NBQzdCOzs7OztBQUVELGtCQUF5QixDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELG9CQUEyQixDQUFNO0lBQzdCLE9BQU8sT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0NBQ2xDOztBQVFELE1BQWEsTUFBTSxHQUFhLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7QUFDakYsTUFBYSxNQUFNLEdBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOztBQUMxRSxNQUFhLFdBQVcsR0FBYSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7O0FBQzlGLE1BQWEsUUFBUSxHQUFhLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7QUFDN0UsTUFBYSxRQUFRLEdBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOztBQUM5RSxNQUFhLFFBQVEsR0FBYSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O0FBQ2hGLE1BQWEsUUFBUSxHQUFhLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsY0FBYSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOztBQUNyRyxNQUFhLE9BQU8sR0FBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGNBQWEsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7QUFDbEcsTUFBYSxVQUFVLEdBQWEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxlQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDOzs7O0FBS2hHLE1BQU0sZUFBZSxHQUFnQztJQUNqRCxNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsV0FBVyxFQUFFLFdBQVc7SUFDeEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsVUFBVSxFQUFFLFVBQVU7Q0FDekIsQ0FBQzs7Ozs7O0FBSUYsc0JBQTZCLEVBQVk7O0lBQ3JDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDakIsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRTtRQUNoRCxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDZjtJQUNELE9BQU8sR0FBRyxDQUFDO0NBQ2Q7Ozs7Ozs7QUFLRCxZQUFtQixLQUFVLEVBQUUsRUFBWTtJQUN2QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDekI7Ozs7OztBQUtELGlCQUF3QixLQUFVO0lBQzlCLEtBQUssSUFBSSxJQUFJLElBQUksZUFBZSxFQUFFO1FBQzlCLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNsQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDZjs7Ozs7O0FBRUQsZ0JBQXVCLEtBQVUsRUFBRSxFQUFZO0lBQzNDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNmLE9BQU87S0FDVjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDO1FBQ2xELEVBQUUsR0FBRyxxQkFBcUIsR0FBRyxPQUFPLEtBQUssQ0FBQyxDQUFDO0NBQ2xEOzs7Ozs7Ozs7Ozs7O0FDeEdELGtCQUF5QixLQUFVOztJQUMvQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJQSxFQUFjLENBQUMsS0FBSyxFQUFFQyxNQUFrQixDQUFDLEVBQUU7UUFDM0MsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO1NBQU0sSUFBSUQsRUFBYyxDQUFDLEtBQUssRUFBRUUsUUFBb0IsQ0FBQyxFQUFFO1FBQ3BELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7S0FDSjtJQUVELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLENBQUMsQ0FBQztLQUNaO0lBRUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTs7UUFDOUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2I7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNmOzs7Ozs7OztBQUtELDZCQUE2QixJQUFZLEVBQUUsS0FBVSxFQUFFLGFBQXdDOztJQUMzRixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsSUFBSSxhQUFhLEVBQUU7O1FBQ2YsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNmOzs7Ozs7Ozs7OztBQVFELG9CQUEyQixJQUFZLEVBQUUsS0FBVSxFQUFFLGFBQXdDO0lBQ3pGLElBQUlGLEVBQWMsQ0FBQyxLQUFLLEVBQUVHLE9BQW1CLENBQUMsRUFBRTs7UUFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDOztRQUViLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksR0FBRyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNwRTtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLG1CQUFtQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FDMUQ7Ozs7OztBQ3JFRDs7OztBQUVBLHlCQUFnQyxLQUFVO0lBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBRUQsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDM0I7Ozs7OztBQUtELHNCQUE2QixLQUFVO0lBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLENBQUMsQ0FBQztLQUNaO0lBQ0QsSUFBSUgsRUFBYyxDQUFDLEtBQUssRUFBRUksUUFBb0IsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztLQUM5QjtJQUNELElBQUlKLEVBQWMsQ0FBQyxLQUFLLEVBQUVFLFFBQW9CLENBQUMsRUFBRTtRQUM3QyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sQ0FBQyxDQUFDO0NBQ1o7Ozs7OztBQUtELHdCQUErQixLQUFVO0lBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsSUFBSUYsRUFBYyxDQUFDLEtBQUssRUFBRUksUUFBb0IsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVCO0lBQ0QsSUFBSUosRUFBYyxDQUFDLEtBQUssRUFBRUUsUUFBb0IsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDZjs7Ozs7O0FBS0QsdUJBQThCLEtBQVU7SUFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSUYsRUFBYyxDQUFDLEtBQUssRUFBRUMsTUFBa0IsQ0FBQyxFQUFFO1FBQzNDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSUQsRUFBYyxDQUFDLEtBQUssRUFBRUksUUFBb0IsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQztLQUN6QztJQUNELElBQUlKLEVBQWMsQ0FBQyxLQUFLLEVBQUVFLFFBQW9CLENBQUMsRUFBRTtRQUM3QyxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDcEI7SUFDRCxPQUFPLEtBQUssQ0FBQztDQUNoQjs7Ozs7OztBQUtELHFCQUE0QixLQUFVLEVBQUUsRUFBd0I7SUFDNUQsSUFBSUYsRUFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMzQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsSUFBSUssTUFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSUMsV0FBdUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM3RCxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELElBQUksRUFBRSxLQUFLSixRQUFvQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM3QyxPQUFPLEtBQUssQ0FBQztLQUNoQjs7SUFHRCxPQUFPLElBQUksQ0FBQztDQUNmOzs7Ozs7O0FBS0QsaUJBQXdCLEtBQVUsRUFBRSxFQUF3QjtJQUN4RCxJQUFJLEVBQUUsS0FBS0EsUUFBb0IsRUFBRTtRQUM3QixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQztJQUNELElBQUksRUFBRSxLQUFLRCxNQUFrQixFQUFFO1FBQzNCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsSUFBSSxFQUFFLEtBQUtHLFFBQW9CLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDM0I7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7Q0FDdkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUQsY0FBYyxFQUFFO0lBQ1osVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNyQjs7Ozs7O0FBRUQsY0FBYyxFQUFFLEVBQUUsT0FBTztJQUNyQixPQUFPO1FBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDaEMsQ0FBQztDQUNMO1dBRThCLFVBQVMsS0FBSyxJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixDQUFDLEVBQUU7O0FBQXJILElBQUlHLFNBQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxNQUEwRixDQUFDOzs7Ozs7Ozs7OztBQVF0SCxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxVQUFVOztJQUMxQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7SUFDakIsSUFBSTtRQUNBLEVBQUUsQ0FBQyxVQUFTLEtBQUs7WUFDYixJQUFJLElBQUksRUFBRTtnQkFDTixPQUFPO2FBQ1Y7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ1osV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCLEVBQUUsVUFBUyxNQUFNO1lBQ2QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sT0FBTzthQUNWO1lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QixDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ1QsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xCO0NBQ0o7Ozs7O0FBRUQsZ0JBQWdCLFFBQVE7O0lBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztJQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsT0FBTztLQUNWO0lBQ0QsSUFBSSxDQUFDOztRQUNELElBQUksRUFBRSxDQUFNOztRQUFaLElBQVEsR0FBRyxDQUFDO1FBQ1osRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzVELElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtZQUNiLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELE9BQU87U0FDVjtRQUNELElBQUk7WUFDQSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCLENBQUMsQ0FBQztDQUNOOzs7O0FBR0Q7O0lBQ0ksSUFBSSxDQUFDLENBQU07O0lBQVgsSUFBTyxHQUFHLENBQUM7O0lBRVgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0NBQzFCOzs7OztBQUVELGdCQUFnQixRQUFRO0lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDckI7Ozs7O0FBRUQsaUJBQWlCLFFBQVE7SUFDckIsSUFBSTs7UUFDQSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDbkIsTUFBTSxJQUFJLFNBQVMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxRQUFRLEtBQUssT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQyxFQUFFOztZQUM5RSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUM1QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDekUsT0FBTzthQUNWO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFO0NBQ3hDOzs7Ozs7Ozs7OztBQVNELHNCQUFnQyxFQUFzRjtJQUNsSCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUMxQixNQUFNLElBQUksU0FBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxJQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtRQUMxQixNQUFNLElBQUksU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDekM7SUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVyQixTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQzFEOzs7Ozs7OztBQUdELGlCQUFpQixXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNO0lBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxXQUFXLEtBQUssVUFBVSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLFVBQVUsS0FBSyxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUN4QjtBQUdELFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBUyxVQUFVO0lBQ2pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDdEMsQ0FBQztBQUVGLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVMsV0FBVyxFQUFFLFVBQVU7O0lBQzFELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztJQUNoQixPQUFPLElBQUksWUFBWSxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUMxRSxDQUFDLENBQUM7Q0FDTixDQUFDO0FBRUYsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxRQUFROztJQUMxQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUlBLFNBQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFFMUcsT0FBTyxJQUFJLFlBQVksQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1FBQzVDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEI7O1FBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBSTs7UUFBL0IsSUFBNkIsQ0FBQyxDQUFDOzs7Ozs7UUFDL0IsYUFBYSxDQUFDLEVBQUUsR0FBRztZQUNmLElBQUk7Z0JBQ0EsSUFBSSxHQUFHLEtBQUssT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQyxFQUFFOztvQkFDL0QsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDcEIsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUN2RCxPQUFPO3FCQUNWO2lCQUNKO2dCQUNELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7O2dCQUdkLElBQUksRUFBRSxTQUFTLEtBQUssQ0FBQyxFQUFFO29CQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pCO2FBQ0o7WUFBQyxPQUFPLEVBQUUsRUFBRTtnQkFDVCxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZDtTQUNKO21DQUNrQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakUsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjtLQUNKLENBQUMsQ0FBQztDQUNOLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFTLEtBQUs7SUFDM0MsSUFBSSxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssWUFBWSxFQUFFO1FBQzFFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxVQUFTLE9BQU87UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xCLENBQUMsQ0FBQztDQUNOLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFTLEtBQUs7O0lBRTFDLE9BQU8sSUFBSSxZQUFZLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtRQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakIsQ0FBQyxDQUFDO0NBQ04sQ0FBQztBQUVGLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVMsTUFBTTtJQUN6QyxPQUFPLElBQUksWUFBWSxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07O1FBQzVDLElBQUksQ0FBQyxDQUFNOztRQUFYLElBQU8sR0FBRyxDQUFDOztRQUVYLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0tBQ0osQ0FBQyxDQUFDO0NBQ04sQ0FBQztBQUVGLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsV0FBVztJQUNoRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0NBQzlDLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLFdBQVc7SUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0NBQ2pDLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLFVBQVU7SUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztDQUN0QyxDQUFDO0FBRUYsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUc7SUFDN0IsT0FBTyxJQUFJLENBQUM7Q0FDZixDQUFDO0FBRUYsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUc7SUFDOUIsT0FBTyxJQUFJLENBQUM7Q0FDZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNNRixjQUF3QixLQUFRLEVBQUUsT0FBZTs7SUFFN0MsT0FBTyxJQUFJLFlBQVksQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1FBQzVDLElBQUlDLFVBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBQy9CLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQzs7WUFFcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7O1lBQ0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO0tBQ0osQ0FBQyxDQUFDO0NBQ047Ozs7Ozs7QUFLRCx3QkFBa0MsS0FBUTtJQUN0QyxPQUFPLElBQUksWUFBWSxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07O1FBRTVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQixDQUFDLENBQUM7Q0FDTjs7Ozs7Ozs7O0FBTUQsdUJBQWlDLE9BQXVCLEVBQUUsS0FBd0I7SUFDOUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUM3QixPQUFPLElBQUksWUFBWSxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07WUFDNUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQjtTQUNKLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztDQUNOOzs7Ozs7O0FBS0QsZ0JBQTBCLE9BQXVCO0lBQzdDLE9BQU8sSUFBSSxZQUFZLENBQUMsVUFBUyxPQUFPO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQ3ZCLE9BQU8sQ0FBQztnQkFDSixLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUM7U0FDTixFQUFFO1lBQ0MsT0FBTyxDQUFDO2dCQUNKLEtBQUssRUFBRSxVQUFVO2FBQ3BCLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztDQUNOOzs7Ozs7OztBQUtELHlCQUFtQyxPQUF1QixFQUFFLEtBQXdCO0lBQ2hGLE9BQU8sSUFBSSxZQUFZLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTs7UUFFNUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hCLEVBQUU7WUFDQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ047Ozs7Ozs7Ozs7QUFhRCx3QkFBcUMsYUFBNkIsRUFBRSxRQUE4QjtJQUM5RixPQUFPLGFBQWE7U0FDZixJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ2YsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmLENBQUM7U0FDRCxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ2YsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pDLENBQUMsQ0FBQztDQUNWOzs7Ozs7O0FBS0QsbUJBQTZCLE9BQXVCO0lBQ2hELE9BQU8sSUFBSSxZQUFZLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtRQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqQyxDQUFDLENBQUM7Q0FDTjs7Ozs7Ozs7Ozs7OztBQy9JRCwwQkFBaUMsT0FBTztJQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNqQixPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVMsV0FBVztZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzlDLENBQUM7S0FDTDtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2YsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFTLFdBQVc7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDLENBQUM7S0FDTDtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2YsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFTLFVBQVU7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN0QyxDQUFDO0tBQ0w7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUNuQixPQUFPLENBQUMsUUFBUSxHQUFHO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDZixDQUFDO0tBQ0w7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtRQUNsQixPQUFPLENBQUMsT0FBTyxHQUFHO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDZixDQUFDO0tBQ0w7SUFDRCxPQUFPLE9BQU8sQ0FBQztDQUNsQjs7Ozs7Ozs7Ozs7Ozs7In0=