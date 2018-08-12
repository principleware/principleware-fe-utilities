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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvdG9vbHMvc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTSxlQUFxQixRQUFrQixFQUN6QyxTQUFtQixFQUNuQixTQUFtRDtJQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUk7UUFDeEIsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUk7WUFDeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJzdFNldCAtIHNlY29uZFNldCAoYW55IGVsZW1lbnQgbm90IGluIHNlY29uZFNldClcclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmY8VCwgVT4oZmlyc3RTZXQ6IEFycmF5PFQ+LFxyXG4gICAgc2Vjb25kU2V0OiBBcnJheTxVPixcclxuICAgIHByZWRpY2F0ZTogKGZpcnN0RWxlbTogVCwgc2Vjb25kRWxlbTogVSkgPT4gYm9vbGVhbik6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiBmaXJzdFNldC5maWx0ZXIoKHg6IFQpID0+IHtcclxuICAgICAgICByZXR1cm4gIXNlY29uZFNldC5zb21lKCh5OiBVKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGUoeCwgeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuIl19