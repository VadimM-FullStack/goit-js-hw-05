class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(strNew) {
    this._value = this._value.concat(strNew);
  }

  prepend(strNew) {
    this._value = strNew.concat(this._value);
  }

  pad(strNew) {
    this.prepend(strNew);
    this.append(strNew);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
