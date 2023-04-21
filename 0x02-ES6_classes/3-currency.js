export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('Code must be a string');
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(Code) {
    if (typeof Code !== 'string') throw TypeError('Code must be a string');
    this._code = Code;
  }

  set name(Name) {
    if (typeof Name !== 'string') throw TypeError('Name must be a string');
    this._name = Name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
