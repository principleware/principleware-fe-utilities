function guid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
function urlEncode(data) {
    var str = [];
    for (var p in data) {
        if (data.hasOwnProperty(p)) {
            urlEncodePair(p, data[p], str);
        }
    }
    return str.join('&').replace(/%20/g, '+');
}
function getParamByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?#&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getQueryParamByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    return getParamByName(name, url);
}
function getHashParamByName(name, url) {
    if (!url) {
        url = window.location.hash;
    }
    return getParamByName(name, url);
}
function pushArray(thisArg, src) {
    if (!(src instanceof Array)) {
        thisArg.push(src);
        return;
    }
    src.forEach(function (item) {
        thisArg.push(item);
    });
}
function makeArray(o) {
    var ret = [];
    for (var n in o) {
        if (o.hasOwnProperty(n)) {
            ret.push(o[n]);
        }
    }
    return ret;
}
function replace(format, params) {
    return format.replace(/\{([a-zA-Z]+)\}/g, function (s, key) {
        return (typeof params[key] === 'undefined') ? '' : params[key];
    });
}
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
function isBoolean(x) {
    return typeof x === 'boolean';
}
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function isSymbol(x) {
    return typeof x === 'symbol';
}
function isNull(x) {
    return x === null;
}
function isUndefined(x) {
    return x === undefined;
}
function isArray(x) {
    return x instanceof Array;
}
function isObject(x) {
    return typeof x === 'object';
}
function isFunction(x) {
    return typeof x === 'function';
}
var tyBool = { name: 'Boolean', val: false, pred: isBoolean };
var tyNull = { name: 'Null', val: null, pred: isNull };
var tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
var tyNumber = { name: 'Number', val: 0, pred: isNumber };
var tyString = { name: 'String', val: '', pred: isString };
var tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
var tyObject = { name: 'Object', val: function () { return {}; }, pred: isObject };
var tyArray = { name: 'Array', val: function () { return []; }, pred: isArray };
var tyFunction = { name: 'Function', val: function () { }, pred: isFunction };
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
function defaultValue(ty) {
    var val = ty.val;
    if (ty !== tyFunction && typeof val === 'function') {
        val = val();
    }
    return val;
}
function ok(value, ty) {
    return ty.pred(value);
}
function getType(value) {
    for (var prop in preDefinedTypes) {
        if (ok(value, preDefinedTypes[prop])) {
            return preDefinedTypes[prop];
        }
    }
    return null;
}
function assert(value, ty) {
    if (ok(value, ty)) {
        return;
    }
    throw new Error('type check error: exptected type is ' +
        ty + ' but given type is ' + typeof value);
}
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
    return true;
}
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
function asap(fn) {
    setTimeout(fn, 1);
}
function bind(fn, thisArg) {
    return function () {
        fn.apply(thisArg, arguments);
    };
}
var ɵ0 = function (value) { return Object.prototype.toString.call(value) === "[object Array]"; };
var isArray$1 = Array.isArray || ɵ0;
function doResolve(fn, onFulfilled, onRejected) {
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
function handle(deferred) {
    var me = this;
    if (this._state === null) {
        this._deferreds.push(deferred);
        return;
    }
    asap(function () {
        var cb, ret;
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
function finale() {
    var i, len;
    for (i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
    }
    this._deferreds = null;
}
function reject(newValue) {
    this._state = false;
    this._value = newValue;
    finale.call(this);
}
function resolve(newValue) {
    try {
        if (newValue === this) {
            throw new TypeError('A promise cannot be resolved with itself.');
        }
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
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
    var me = this;
    return new DummyPromise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
    });
};
DummyPromise.prototype.all = function (arrayArg) {
    var args = Array.prototype.slice.call(arguments.length === 1 && isArray$1(arrayArg) ? arrayArg : arguments);
    return new DummyPromise(function (resolve, reject) {
        if (args.length === 0) {
            return resolve([]);
        }
        var remaining = args.length, i;
        function res(i, val) {
            try {
                if (val && (typeof val === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, function (val) { res(i, val); }, reject);
                        return;
                    }
                }
                args[i] = val;
                if (--remaining === 0) {
                    resolve(args);
                }
            }
            catch (ex) {
                reject(ex);
            }
        }
        for (i = 0; i < args.length; i++) {
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
    return new DummyPromise(function (resolve, reject) {
        reject(value);
    });
};
DummyPromise.prototype.race = function (values) {
    return new DummyPromise(function (resolve, reject) {
        var i, len;
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
function lift(value, thisArg) {
    return new DummyPromise(function (resolve, reject) {
        if (isFunction(value)) {
            var restArgs = [];
            for (var i = 2; i < arguments.length; i++) {
                restArgs.push(arguments[i]);
            }
            var ret = value.apply(thisArg || null, restArgs);
            resolve(ret);
        }
        else {
            resolve(value);
        }
    });
}
function liftIntoReject(value) {
    return new DummyPromise(function (resolve, reject) {
        reject(value);
    });
}
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
function liftToPredicate(promise, guard) {
    return new DummyPromise(function (resolve, reject) {
        promise.then(function (data) {
            resolve(guard(data));
        }, function () {
            resolve(false);
        });
    });
}
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
function transform(promise) {
    return new DummyPromise(function (resolve, reject) {
        promise.then(resolve, reject);
    });
}
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

export { guid, getRandomInt, urlEncodePair, urlEncode, getParamByName, getQueryParamByName, getHashParamByName, pushArray, makeArray, replace, applyEscape, reverseEscape, safeParseInt, safeParseFloat, safeParseBool, convertible, convert, isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isArray, isObject, isFunction, tyBool, tyNull, tyUndefined, tyNumber, tyString, tySymbol, tyObject, tyArray, tyFunction, defaultValue, ok, getType, assert, lift, liftIntoReject, liftWithGuard, settle, liftToPredicate, readerPipeline, transform, tojQueryDeferred, DummyPromise };
//# sourceMappingURL=polpware-fe-utilities.js.map
