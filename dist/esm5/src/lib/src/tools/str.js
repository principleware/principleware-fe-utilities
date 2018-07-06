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
export function replace(format, params) {
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
export function applyEscape(data) {
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
export function reverseEscape(data) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9scHdhcmUtZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvdG9vbHMvc3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFNLGtCQUFrQixNQUFjLEVBQUUsTUFBOEI7O0lBRWxFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFVBQVMsQ0FBQyxFQUFFLEdBQUc7UUFDckQsTUFBTSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xFLENBQUMsQ0FBQztDQUNOOzs7Ozs7OztBQU9ELE1BQU0sc0JBQXNCLElBQVk7SUFDcEMsSUFBSSxHQUFHLElBQUk7U0FDTixPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztTQUN4QixPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztTQUN4QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDZjs7Ozs7OztBQU1ELE1BQU0sd0JBQXdCLElBQVk7SUFDdEMsSUFBSSxHQUFHLElBQUk7U0FDTixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDZiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBSZXBsYWNlcyB0aGUgcGxhY2Vob2xkZXJzIGEgZ2l2ZW4gZm9ybWF0IHdpdGggdGhlIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShmb3JtYXQ6IHN0cmluZywgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogc3RyaW5nIHtcclxuICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvXFx7KFthLXpBLVpdKylcXH0vZywgZnVuY3Rpb24ocywga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICd1bmRlZmluZWQnKSA/ICcnIDogcGFyYW1zW2tleV07XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIGdpdmVuIHN0cmluZyBpbnRvIG9uZSB3aGVyZVxyXG4gKiBzb21lIGNoYXJhY3RlcnMgaGF2ZSBiZWVuIHByb3Blcmx5IHJlcGxhY2VkIHdpdGhcclxuICogdGhlaXIgZXNjYXBlIHZlcnNpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RXNjYXBlKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBkYXRhID0gZGF0YVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxcXF0vZywgJ1xcXFxcXFxcJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcXCJdL2csICdcXFxcXFxcIicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXC9dL2csICdcXFxcLycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXGJdL2csICdcXFxcYicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXGZdL2csICdcXFxcZicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXG5dL2csICdcXFxcbicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXHJdL2csICdcXFxccicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXHRdL2csICdcXFxcdCcpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbmRvIHRoZSB3b3JrIGJ5IGFwcGx5RXNjYXBlLiBJdCByZXBsYWNlcyB0aGUgZXNjYXBlXHJcbiAqIGNoYXJhY3RlcnMgd2l0aCB0aGVpciB1bmVzY2FwZWQgb25lcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlRXNjYXBlKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBkYXRhID0gZGF0YVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXFwiL2csICdcXFwiJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcLy9nLCAnXFwvJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcYi9nLCAnXFxiJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcZi9nLCAnXFxmJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcbi9nLCAnXFxuJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcci9nLCAnXFxyJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcdC9nLCAnXFx0Jyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iXX0=