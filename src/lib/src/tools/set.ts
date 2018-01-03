// firstSet - secondSet (any element not in secondSet)
export function diff<T, U>(firstSet: Array<T>,
    secondSet: Array<U>,
    predicate: (firstElem: T, secondElem: U) => boolean): Array<T> {
    return firstSet.filter((x: T) => {
        const secondIndex = secondSet.findIndex((y: U) => {
            return predicate(x, y);
        });
        return secondIndex === -1;
    });
}

