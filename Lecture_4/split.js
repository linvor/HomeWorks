function split(string, separator, limit) {
  const arr = [""];
  let point = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== separator) {
      arr[point] += string.charAt(i);
    } else {
      point++;
      arr.push("");
    }
  }
  return arr.slice(0, limit);
}
const string = "Lorem ipsum dolor sit amet consectetur adipiscing elit";

console.log(split(string, " "));
