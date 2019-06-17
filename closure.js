function highLoadPerformance(a) {
  if (isNaN(a) || typeof a !== 'number') throw Error('Only number allowed');
  // Imagine that is this function is very high loaded.
  console.log(a);
  return a;
}

function memoize(fn) {
  const cache = {};

  return function(a) {
    if (a in cache) {
      console.log('Fetching from cache', a);
      return cache[a];
    }
    else {
      console.log('Calculating result');
      return cache[a] = fn(a);
    }
  };
};

const memoized = memoize(highLoadPerformance);

memoized(10)
memoized(10);
memoized(20);
memoized(20);
memoized(10);


