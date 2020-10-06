import { BaseGen } from './BaseGen';

export class NumGen extends BaseGen {
  static create() {
    return new NumGen();
  }

  getSymbol() {
    return Math.floor(Math.random() * 10);
  }
}
