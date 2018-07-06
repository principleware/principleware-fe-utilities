/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} x
 * @return {?}
 */
export function isBoolean(x) {
    return typeof x === 'boolean';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isNumber(x) {
    return typeof x === 'number';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isString(x) {
    return typeof x === 'string';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isSymbol(x) {
    return typeof x === 'symbol';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isNull(x) {
    return x === null;
}
/**
 * @param {?} x
 * @return {?}
 */
export function isUndefined(x) {
    return x === undefined;
}
/**
 * @param {?} x
 * @return {?}
 */
export function isArray(x) {
    return x instanceof Array;
}
/**
 * @param {?} x
 * @return {?}
 */
export function isObject(x) {
    return typeof x === 'object';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isFunction(x) {
    return typeof x === 'function';
}
/**
 * @record
 */
export function ITypeDef() { }
/** @type {?} */
ITypeDef.prototype.name;
/** @type {?} */
ITypeDef.prototype.val;
/** @type {?} */
ITypeDef.prototype.pred;
;
/** @type {?} */
export const tyBool = { name: 'Boolean', val: false, pred: isBoolean };
/** @type {?} */
export const tyNull = { name: 'Null', val: null, pred: isNull };
/** @type {?} */
export const tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
/** @type {?} */
export const tyNumber = { name: 'Number', val: 0, pred: isNumber };
/** @type {?} */
export const tyString = { name: 'String', val: '', pred: isString };
/** @type {?} */
export const tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
/** @type {?} */
export const tyObject = { name: 'Object', val: function () { return {}; }, pred: isObject };
/** @type {?} */
export const tyArray = { name: 'Array', val: function () { return []; }, pred: isArray };
/** @type {?} */
export const tyFunction = { name: 'Function', val: function () { }, pred: isFunction };
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
export function defaultValue(ty) {
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
export function ok(value, ty) {
    return ty.pred(value);
}
/**
 * Returns the type for the given value.
 * @param {?} value
 * @return {?}
 */
export function getType(value) {
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
export function assert(value, ty) {
    if (ok(value, ty)) {
        return;
    }
    throw new Error('type check error: exptected type is ' +
        ty + ' but given type is ' + typeof value);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jaGVja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvdHlwaW5nL3R5cGUtY2hlY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQWNBLE1BQU0sb0JBQW9CLENBQU07SUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFNBQVMsQ0FBQztDQUNqQzs7Ozs7QUFFRCxNQUFNLG1CQUFtQixDQUFNO0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7Q0FDaEM7Ozs7O0FBRUQsTUFBTSxtQkFBbUIsQ0FBTTtJQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELE1BQU0sbUJBQW1CLENBQU07SUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztDQUNoQzs7Ozs7QUFFRCxNQUFNLGlCQUFpQixDQUFNO0lBQ3pCLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO0NBQ3JCOzs7OztBQUVELE1BQU0sc0JBQXNCLENBQU07SUFDOUIsTUFBTSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7Q0FDMUI7Ozs7O0FBRUQsTUFBTSxrQkFBa0IsQ0FBTTtJQUMxQixNQUFNLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQztDQUM3Qjs7Ozs7QUFFRCxNQUFNLG1CQUFtQixDQUFNO0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7Q0FDaEM7Ozs7O0FBRUQsTUFBTSxxQkFBcUIsQ0FBTTtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0NBQ2xDOzs7Ozs7Ozs7OztBQU1BLENBQUM7O0FBRUYsYUFBYSxNQUFNLEdBQWEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMs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KlxyXG5CYXNpY1R5cGVzIDo9IFxyXG4gICAgYm9vbGVhbiBcclxuICB8IG51bWJlciBcclxuICB8IHN0cmluZyBcclxuICB8IHN5bWJvbFxyXG4gIHwgbnVsbFxyXG4gIHwgdW5kZWZpbmVkXHJcbiAgfCBhcnJheSBcclxuICB8IG9iamVjdFxyXG4gIHwgZnVuY3Rpb25cclxuKi9cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHg6IGFueSk6IHggaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdib29sZWFuJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHg6IGFueSk6IHggaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh4OiBhbnkpOiB4IGlzIHN0cmluZyB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeDogYW55KTogeCBpcyBzeW1ib2wge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3ltYm9sJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh4OiBhbnkpOiB4IGlzIG51bGwge1xyXG4gICAgcmV0dXJuIHggPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh4OiBhbnkpOiB4IGlzIHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh4OiBhbnkpOiB4IGlzIEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHggaW5zdGFuY2VvZiBBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHg6IGFueSk6IHggaXMgT2JqZWN0IHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHg6IGFueSk6IHggaXMgRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUeXBlRGVmIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHZhbDogYW55LFxyXG4gICAgcHJlZDogKGFueSkgPT4gYm9vbGVhblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5Qm9vbDogSVR5cGVEZWYgPSB7IG5hbWU6ICdCb29sZWFuJywgdmFsOiBmYWxzZSwgcHJlZDogaXNCb29sZWFuIH07XHJcbmV4cG9ydCBjb25zdCB0eU51bGw6IElUeXBlRGVmID0geyBuYW1lOiAnTnVsbCcsIHZhbDogbnVsbCwgcHJlZDogaXNOdWxsIH07XHJcbmV4cG9ydCBjb25zdCB0eVVuZGVmaW5lZDogSVR5cGVEZWYgPSB7IG5hbWU6ICdVbmRlZmluZWQnLCB2YWw6IHVuZGVmaW5lZCwgcHJlZDogaXNVbmRlZmluZWQgfTtcclxuZXhwb3J0IGNvbnN0IHR5TnVtYmVyOiBJVHlwZURlZiA9IHsgbmFtZTogJ051bWJlcicsIHZhbDogMCwgcHJlZDogaXNOdW1iZXIgfTtcclxuZXhwb3J0IGNvbnN0IHR5U3RyaW5nOiBJVHlwZURlZiA9IHsgbmFtZTogJ1N0cmluZycsIHZhbDogJycsIHByZWQ6IGlzU3RyaW5nIH07XHJcbmV4cG9ydCBjb25zdCB0eVN5bWJvbDogSVR5cGVEZWYgPSB7IG5hbWU6ICdTeW1ib2wnLCB2YWw6IG51bGwsIHByZWQ6IGlzU3ltYm9sIH07XHJcbmV4cG9ydCBjb25zdCB0eU9iamVjdDogSVR5cGVEZWYgPSB7IG5hbWU6ICdPYmplY3QnLCB2YWw6IGZ1bmN0aW9uKCkgeyByZXR1cm4ge307IH0sIHByZWQ6IGlzT2JqZWN0IH07XHJcbmV4cG9ydCBjb25zdCB0eUFycmF5OiBJVHlwZURlZiA9IHsgbmFtZTogJ0FycmF5JywgdmFsOiBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9LCBwcmVkOiBpc0FycmF5IH07XHJcbmV4cG9ydCBjb25zdCB0eUZ1bmN0aW9uOiBJVHlwZURlZiA9IHsgbmFtZTogJ0Z1bmN0aW9uJywgdmFsOiBmdW5jdGlvbigpIHsgfSwgcHJlZDogaXNGdW5jdGlvbiB9O1xyXG5cclxuLyoqXHJcbiAqICBQcmVkZWZpbmVkIHR5cGVzIGFuZCB0aGVpciBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuY29uc3QgcHJlRGVmaW5lZFR5cGVzOiB7IFtrZXk6IHN0cmluZ106IElUeXBlRGVmIH0gPSB7XHJcbiAgICB0eUJvb2w6IHR5Qm9vbCxcclxuICAgIHR5TnVsbDogdHlOdWxsLFxyXG4gICAgdHlVbmRlZmluZWQ6IHR5VW5kZWZpbmVkLFxyXG4gICAgdHlOdW1iZXI6IHR5TnVtYmVyLFxyXG4gICAgdHlTdHJpbmc6IHR5U3RyaW5nLFxyXG4gICAgdHlTeW1ib2w6IHR5U3ltYm9sLFxyXG4gICAgdHlPYmplY3Q6IHR5T2JqZWN0LFxyXG4gICAgdHlBcnJheTogdHlBcnJheSxcclxuICAgIHR5RnVuY3Rpb246IHR5RnVuY3Rpb25cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGEgZ2l2ZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWUodHk6IElUeXBlRGVmKTogYW55IHtcclxuICAgIGxldCB2YWwgPSB0eS52YWw7XHJcbiAgICBpZiAodHkgIT09IHR5RnVuY3Rpb24gJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhbCA9IHZhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFR5cGUgY2hlY2tzIGlmIGEgZ2l2ZW4gdmFsdWUgaXMgdHlwZSBvZiB0aGUgZ2l2ZW4gdHlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvayh2YWx1ZTogYW55LCB0eTogSVR5cGVEZWYpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eS5wcmVkKHZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHR5cGUgZm9yIHRoZSBnaXZlbiB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlOiBhbnkpOiBJVHlwZURlZiB7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHByZURlZmluZWRUeXBlcykge1xyXG4gICAgICAgIGlmIChvayh2YWx1ZSwgcHJlRGVmaW5lZFR5cGVzW3Byb3BdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlRGVmaW5lZFR5cGVzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KHZhbHVlOiBhbnksIHR5OiBJVHlwZURlZik6IHZvaWQge1xyXG4gICAgaWYgKG9rKHZhbHVlLCB0eSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3R5cGUgY2hlY2sgZXJyb3I6IGV4cHRlY3RlZCB0eXBlIGlzICcgK1xyXG4gICAgICAgIHR5ICsgJyBidXQgZ2l2ZW4gdHlwZSBpcyAnICsgdHlwZW9mIHZhbHVlKTtcclxufVxyXG4iXX0=