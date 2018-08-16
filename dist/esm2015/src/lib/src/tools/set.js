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
export function intersection(firstSet, secondSet, predicate) {
    return firstSet.filter((x) => {
        return secondSet.some((y) => {
            return predicate(x, y);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvdG9vbHMvc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTSxlQUFxQixRQUFrQixFQUN6QyxTQUFtQixFQUNuQixTQUFtRDtJQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUksRUFBRSxFQUFFO1FBQzVCLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLEVBQUUsRUFBRTtZQUM1QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7Q0FDTjs7Ozs7Ozs7QUFHRCxNQUFNLHVCQUE2QixRQUFrQixFQUNqRCxTQUFtQixFQUNuQixTQUFtRDtJQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUksRUFBRSxFQUFFO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSSxFQUFFLEVBQUU7WUFDM0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJzdFNldCAtIHNlY29uZFNldCAoYW55IGVsZW1lbnQgbm90IGluIHNlY29uZFNldClcclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmY8VCwgVT4oZmlyc3RTZXQ6IEFycmF5PFQ+LFxyXG4gICAgc2Vjb25kU2V0OiBBcnJheTxVPixcclxuICAgIHByZWRpY2F0ZTogKGZpcnN0RWxlbTogVCwgc2Vjb25kRWxlbTogVSkgPT4gYm9vbGVhbik6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiBmaXJzdFNldC5maWx0ZXIoKHg6IFQpID0+IHtcclxuICAgICAgICByZXR1cm4gIXNlY29uZFNldC5zb21lKCh5OiBVKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGUoeCwgeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gZmlyc3RTZXQgaW50ZXJzZWN0aW9uIHNlY29uZFNldFxyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uPFQsIFU+KGZpcnN0U2V0OiBBcnJheTxUPixcclxuICAgIHNlY29uZFNldDogQXJyYXk8VT4sXHJcbiAgICBwcmVkaWNhdGU6IChmaXJzdEVsZW06IFQsIHNlY29uZEVsZW06IFUpID0+IGJvb2xlYW4pOiBBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gZmlyc3RTZXQuZmlsdGVyKCh4OiBUKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNlY29uZFNldC5zb21lKCh5OiBVKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGUoeCwgeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iXX0=