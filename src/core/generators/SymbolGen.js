import { BaseGen } from './BaseGen';

export const symbols = '+-_=/;><)(*&^%$#@!,.?|{}[]';

export class SymbolGen extends BaseGen {
  static create() {
    return new SymbolGen();
  }

  getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}
