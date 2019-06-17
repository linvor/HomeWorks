function ownBind(func, obj) {
  return function() {
  	return func.apply(obj, arguments);
  };
}
