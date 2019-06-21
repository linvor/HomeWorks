const reduce = (array, fn, initial) => {
  accumulator = initial;
  for (let i = 0; i < array.length; i++) {
    accumulator = fn.call(null, accumulator, array[i], i, array);
  }
  return accumulator;
};

const array = [1, 2, 3];

const callbackFn = (accumulator, item, index, arr) => {
  return {
    ...accumulator,
    [index]: item
  };
};

const processedArray = reduce(array, callbackFn, {});

console.log(processedArray); // должно вывести массив, преобразованный в объект {0: 1, 1: 2, 2: 3}
