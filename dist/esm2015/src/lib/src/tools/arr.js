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
export function pushArray(thisArg, src) {
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
export function makeArray(o) {
    /** @type {?} */
    const ret = [];
    for (let n in o) {
        if (o.hasOwnProperty(n)) {
            ret.push(o[n]);
        }
    }
    return ret;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvdG9vbHMvYXJyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxvQkFBdUIsT0FBaUIsRUFBRSxHQUFpQjtJQUM3RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQztLQUNWO0lBRUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUk7UUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixDQUFDLENBQUM7Q0FDTjs7Ozs7O0FBS0QsTUFBTSxvQkFBb0IsQ0FBUzs7SUFDL0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7S0FDSjtJQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDZCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQdXNocyBhbiBhcnJheSBvciBhIHNpbmdsZSB2YWx1ZSBpbnRvIHRoZSB0aGlzQXJnO1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hBcnJheTxUPih0aGlzQXJnOiBBcnJheTxUPiwgc3JjOiBBcnJheTxUPiB8IFQpOiB2b2lkIHtcclxuICAgIGlmICghKHNyYyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgIHRoaXNBcmcucHVzaChzcmMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcmMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgdGhpc0FyZy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUdXJucyB0aGUgdmFsdWVzIGluIGFuIG9iamVjdCBpbnRvIGFuIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFycmF5KG86IE9iamVjdCkge1xyXG4gICAgY29uc3QgcmV0ID0gW107XHJcbiAgICBmb3IgKGxldCBuIGluIG8pIHtcclxuICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShuKSkge1xyXG4gICAgICAgICAgICByZXQucHVzaChvW25dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbiJdfQ==