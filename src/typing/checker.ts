/*
BasicTypes := 
    boolean 
  | number 
  | string 
  | symbol
  | null
  | undefined
  | array 
  | object
  | function
*/


export function isBoolean(x: any): x is boolean {
    return typeof x === 'boolean';
}

export function isNumber(x: any): x is number {
    return typeof x === 'number';
}

export function isString(x: any): x is string {
    return typeof x === 'string';
}

export function isSymbol(x: any): x is symbol {
    return typeof x === 'symbol';
}

export function isNull(x: any): x is null {
    return x === null;
}

export function isUndefined(x: any): x is undefined {
    return x === undefined;
}

export function isArray(x: any): x is Array<any> {
    return x instanceof Array;
}

export function isObject(x: any): x is Object {
    return typeof x === 'object';
}

export function isFunction(x: any): x is Function {
    return typeof x === 'function';
}

interface ITypeDef {
    name: string,
    val: any,
    pred: (any) => boolean
};

/**
 * @constant - Predefined types and their properties.
 */
const preDefinedTypes: { [key: string]: ITypeDef } = {
    tyBool: { name: 'Boolean', val: false, pred: isBoolean },
    tyNull: { name: 'Null', val: null, pred: isNull },
    tyUndefined: { name: 'Undefined', val: undefined, pred: isUndefined },
    tyNumber: { name: 'Number', val: 0, pred: isNumber },
    tyString: { name: 'String', val: '', pred: isString },
    tySymbol: { name: 'Symbol', val: null, pred: isSymbol }, // TODO: Specify its default value
    tyObject: { name: 'Object', val: function() { return {}; }, pred: isObject },
    tyArray: { name: 'Array', val: function() { return []; }, pred: isArray },
    tyFunction: { name: 'Function', val: function() { }, pred: isFunction }
};
/**
 * Returns the default value for a given type.
 */
export function defaultValue(ty: ITypeDef): any {
    let val = ty.val;
    if (ty !== preDefinedTypes.tyFunction && typeof val === 'function') {
        val = val();
    }
    return val;

}

/**
 * Type checks if a given value is type of the given ty
 */
function typeChecker(value: any, ty: ITypeDef): boolean {
    return ty.pred(value);
}

/**
 * Returns the type for the given value.
 */
function getType(value: any): ITypeDef {
    for (let prop in preDefinedTypes) {
        if (typeChecker(value, preDefinedTypes[prop])) {
            return preDefinedTypes[prop];
        }
    }
    return null;
}

/**
 * @function assert
 */
function typeAssert(value: any, ty: ITypeDef): void {
    if (typeChecker(value, ty)) {
        return;
    }
    throw new Error('type check error: exptected type is ' +
        ty + ' but given type is ' + typeof value);
}
