export function identity(x) {
  return x;
}

export function compose(...fns) {
  return fns.reduce((total, cur) => (x) => cur(total(x)), identity);
}

export function curry(fn) {
  const arity = fn.length;
  return function curried(...args) {
    const newArgs = args.length === 0 ? [undefined] : args;
    if (newArgs.length >= arity) return fn(...newArgs);
    return curried.bind(null, ...newArgs);
  };
}

export function group(array, key = (d) => d) {
  const keyGroups = new Map();
  for (const item of array) {
    const k = key(item);
    const g = keyGroups.get(k);
    if (g) {
      g.push(item);
    } else {
      keyGroups.set(k, [item]);
    }
  }
  return keyGroups;
}
