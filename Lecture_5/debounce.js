/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function debounce(callback, time) {
  let timer = null;

  return function(...args) {
    const onComplete = () => {
      callback.apply(this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, time);
  };
}
