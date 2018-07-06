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
export function tojQueryDeferred(promise) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXItb3AuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb2xwd2FyZS1mZS11dGlsaXRpZXMvIiwic291cmNlcyI6WyJzcmMvbGliL3NyYy9wcm9taXNlL2ludGVyLW9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBVUEsTUFBTSwyQkFBMkIsT0FBTztJQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBUyxXQUFXO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM5QyxDQUFDO0tBQ0w7SUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBUyxXQUFXO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDLENBQUM7S0FDTDtJQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFTLFVBQVU7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDLENBQUM7S0FDTDtJQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLFFBQVEsR0FBRztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDZixDQUFDO0tBQ0w7SUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLEdBQUc7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2YsQ0FBQztLQUNMO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztDQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUHJvdmlkZXMgdXRpbGl0aWVzIGZvciBtYWtpbmcgaW50ZXJvcGVyYWJsZSB0aGUgcHJvbWlzZS1saWtlIG9iamVjdHNcbiAqIGZyb20gZGlmZmVyZW50IG1vZHVsZXMuXG4gKi9cbi8qKlxuICogRXh0ZW5kcyBhIGdpdmVuIHByb21pc2UgaW50byBhIGRlZmVycmVkIG9iamVjdCBvZiBqUXVlcnkuXG4gKiBXaXRoIHRoaXMgZXh0ZW5zaW9uLCB3ZSBhcmUgYWJsZSB0byBjaGFpbiB0b2dldGhlciBqUXVlcnkgZGVmZXJyZWRcbiAqIG9iamVjdHMgKHdoaWNoIGFyZSBhbHNvIHByb21pc2Ugb2JqZWN0cy4pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2pRdWVyeURlZmVycmVkKHByb21pc2UpIHtcbiAgICBpZiAoIXByb21pc2UuYWx3YXlzKSB7XG4gICAgICAgIHByb21pc2UuYWx3YXlzID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQsIG9uRnVsZmlsbGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLmRvbmUpIHtcbiAgICAgICAgcHJvbWlzZS5kb25lID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UuZmFpbCkge1xuICAgICAgICBwcm9taXNlLmZhaWwgPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UucHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvbWlzZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5wcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UucHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuIl19