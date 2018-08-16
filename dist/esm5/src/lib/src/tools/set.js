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
export function diff(firstSet, secondSet, predicate) {
    return firstSet.filter(function (x) {
        return !secondSet.some(function (y) {
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
export function intersection(firstSet, secondSet, predicate) {
    return firstSet.filter(function (x) {
        return secondSet.some(function (y) {
            return predicate(x, y);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvdG9vbHMvc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTSxlQUFxQixRQUFrQixFQUN6QyxTQUFtQixFQUNuQixTQUFtRDtJQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUk7UUFDeEIsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUk7WUFDeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ047Ozs7Ozs7O0FBR0QsTUFBTSx1QkFBNkIsUUFBa0IsRUFDakQsU0FBbUIsRUFDbkIsU0FBbUQ7SUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFJO1FBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBSTtZQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7Q0FDTiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpcnN0U2V0IC0gc2Vjb25kU2V0IChhbnkgZWxlbWVudCBub3QgaW4gc2Vjb25kU2V0KVxyXG5leHBvcnQgZnVuY3Rpb24gZGlmZjxULCBVPihmaXJzdFNldDogQXJyYXk8VD4sXHJcbiAgICBzZWNvbmRTZXQ6IEFycmF5PFU+LFxyXG4gICAgcHJlZGljYXRlOiAoZmlyc3RFbGVtOiBULCBzZWNvbmRFbGVtOiBVKSA9PiBib29sZWFuKTogQXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIGZpcnN0U2V0LmZpbHRlcigoeDogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhc2Vjb25kU2V0LnNvbWUoKHk6IFUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZWRpY2F0ZSh4LCB5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBmaXJzdFNldCBpbnRlcnNlY3Rpb24gc2Vjb25kU2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Rpb248VCwgVT4oZmlyc3RTZXQ6IEFycmF5PFQ+LFxyXG4gICAgc2Vjb25kU2V0OiBBcnJheTxVPixcclxuICAgIHByZWRpY2F0ZTogKGZpcnN0RWxlbTogVCwgc2Vjb25kRWxlbTogVSkgPT4gYm9vbGVhbik6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiBmaXJzdFNldC5maWx0ZXIoKHg6IFQpID0+IHtcclxuICAgICAgICByZXR1cm4gc2Vjb25kU2V0LnNvbWUoKHk6IFUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZWRpY2F0ZSh4LCB5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiJdfQ==