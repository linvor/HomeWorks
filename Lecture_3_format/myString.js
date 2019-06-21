class MyString {
  reverse(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1); // str.charAt(0).toUpperCase()...
  }

  ucWords(str) {
    return str
      .split(" ")
      .map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}

const str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'
