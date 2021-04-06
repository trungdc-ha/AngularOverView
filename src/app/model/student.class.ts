export class Student {

  private _name: string;
  private _address: string;
  private _gender: number;


  constructor(name: string, address: string, gender: number) {
    this._name = name;
    this._address = address;
    this._gender = gender;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get gender(): number {
    return this._gender;
  }

  set gender(value: number) {
    this._gender = value;
  }
}
