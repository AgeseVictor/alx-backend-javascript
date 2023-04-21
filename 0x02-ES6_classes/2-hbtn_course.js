export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (students.constructor !== Array && students.every((st) => typeof st !== 'string')) throw TypeError('students must be an Array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(Name) {
    if (typeof Name !== 'string') throw TypeError('Name must be a string');
    this._name = Name;
  }

  set length(Length) {
    if (typeof Length !== 'number') throw TypeError('Length must be a number');
    this._length = Length;
  }

  set students(Students) {
    if (Students.constructor !== Array && Students.every((st) => typeof st !== 'string')) throw TypeError('students must be an Array of strings');
    this._students = Students;
  }
}
