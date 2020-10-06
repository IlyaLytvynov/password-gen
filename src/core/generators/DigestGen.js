import { BaseGen } from './BaseGen';

export class DigestGen extends BaseGen {
  static create() {
    return new DigestGen();
  }

  constructor() {
    super();
    this.chars = 'abcdefghijklmnopqrstuvwxyz';
  }

  withUpperCase() {
    this.uppercased = true;
    return this;
  }

  getSymbol() {
    const randIndex = Math.floor(Math.random() * this.chars.length);
    const symb = this.chars[randIndex];
    return this.uppercased ? symb.toUpperCase() : symb;
  }
}
