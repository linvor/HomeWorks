class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    // В es6 есть так называемые template string,
    // в которых с помощью ${} можно указывать переменные
    return `${this.name} ${this.surname}`;
  }
}


class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    let course = null;
    return course = new Date().getFullYear() - this.year;
  }
}
  
 
  


const student = new Student('Вася', 'Пупкин', 2016);

console.log(student.name); //выведет 'Вася'
console.log(student.surname); //выведет 'Пупкин'
console.log(student.getFullName()); //выведет 'Вася Пупкин'
console.log(student.year); //выведет 2016
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2019
