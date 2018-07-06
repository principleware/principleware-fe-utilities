/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileOverview
 * Provides utilities for computing hash values
 */
import * as typeChecker from '../typing/type-checker';
/**
 * Computes the hash code for a given value.
 * This method takes into account the type of the given
 * value when generating its hash code.
 * @param {?} value
 * @return {?}
 */
export function hashCode(value) {
    /** @type {?} */
    let hash = 0;
    if (typeChecker.ok(value, typeChecker.tyBool)) {
        value = value ? 1 : 0;
    }
    else if (typeChecker.ok(value, typeChecker.tyNumber)) {
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
export function hashMember(name, value, configuration) {
    if (typeChecker.ok(value, typeChecker.tyArray)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BvbHB3YXJlLWZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3Rvb2xzL2hhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSxPQUFPLEtBQUssV0FBVyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7OztBQU90RCxNQUFNLG1CQUFtQixLQUFVOztJQUMvQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pCO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ1o7S0FDSjtJQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDWjtJQUVELEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDZjs7SUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztRQUMvQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2I7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0NBQ2Y7Ozs7Ozs7O0FBS0QsNkJBQTZCLElBQVksRUFBRSxLQUFVLEVBQUUsYUFBd0M7O0lBQzNGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOztRQUNoQixNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0tBQ0o7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0NBQ2Y7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxxQkFBcUIsSUFBWSxFQUFFLEtBQVUsRUFBRSxhQUF3QztJQUN6RixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUM3QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7O1FBRWIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsSUFBSSxHQUFHLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FDMUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFByb3ZpZGVzIHV0aWxpdGllcyBmb3IgY29tcHV0aW5nIGhhc2ggdmFsdWVzXG4gKi9cblxuaW1wb3J0ICogYXMgdHlwZUNoZWNrZXIgZnJvbSAnLi4vdHlwaW5nL3R5cGUtY2hlY2tlcic7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhhc2ggY29kZSBmb3IgYSBnaXZlbiB2YWx1ZS5cbiAqIFRoaXMgbWV0aG9kIHRha2VzIGludG8gYWNjb3VudCB0aGUgdHlwZSBvZiB0aGUgZ2l2ZW5cbiAqIHZhbHVlIHdoZW4gZ2VuZXJhdGluZyBpdHMgaGFzaCBjb2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaENvZGUodmFsdWU6IGFueSk6IG51bWJlciB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlCb29sKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID8gMSA6IDA7XG4gICAgfSBlbHNlIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgIH1cbiAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBjaHIgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBoYXNoIGNvZGUgZm9yIGEgbWVtYmVyIG9mIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaGFzaFByaW1pdGl2ZU1lbWJlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGNvbmZpZ3VyYXRpb246IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pIHtcbiAgICBjb25zdCBjb2RlID0gaGFzaENvZGUodmFsdWUpO1xuICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBjb25maWd1cmF0aW9uW25hbWVdO1xuICAgICAgICBpZiAoYml0cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGUgPDwgY29uZmlndXJhdGlvbltuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29kZTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGFzaCBjb2RlIGZvciBhIG1lbWJlciBvZiBhbiBvYmplY3QsIGJhc2VkIG9uXG4gKiB0aGUgZ2l2ZW4gbWVtYmVyIG1lbWJlciwgdGhlIHZhbHVlIHRvIGJlIGhhc2hlZCwgYW5kIHRoZSBjb25maWd1cmF0aW9uXG4gKiBhYm91dCBob3cgZWFjaCBtZW1iZXIgY29udHJpYnV0ZXMgdG8gdGhlIGVuaXJlIGhhc2ggY29kZSBvZiB0aGVcbiAqIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2hNZW1iZXIobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBjb25maWd1cmF0aW9uOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUFycmF5KSkge1xuICAgICAgICBsZXQgY29kZSA9IDA7XG4gICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlICsgaGFzaFByaW1pdGl2ZU1lbWJlcihuYW1lLCB2YWx1ZVtpXSwgY29uZmlndXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWUsIHZhbHVlLCBjb25maWd1cmF0aW9uKTtcbn1cbiJdfQ==