function join(array, separator) {
  let str = "";
  for (let i = 1; i < array.length; i++) {
    str += array[i] + separator;
  }
  return str.slice(0, -1);
}    


const array = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

console.log(join(array, ' '));
