import { DigestGen, NumGen, SymbolGen } from './generators';
import { PasswordGenerator } from './Generator';

export const STRATEGYS_SYMBOLS = {
  DIGETS: 'DIGETS',
  NUMBERS: 'NUMBERS',
  SYMBOLS: 'SYMBOLS',
};

export const STRATEGIES_TO_GENERATIRS_MAP = {
  [STRATEGYS_SYMBOLS.DIGETS]: DigestGen,
  [STRATEGYS_SYMBOLS.NUMBERS]: NumGen,
  [STRATEGYS_SYMBOLS.SYMBOLS]: SymbolGen,
};

export class PasswordFactory {
  /**
   *
   * @param {*} length
   * @param {Array<STRATEGYS_SYMBOLS>} strategies
   */
  static create(length, strategies) {
    const instance = new PasswordFactory(length);
    instance.initStrategies();
    instance.initGenerator();
    for (let strategy of strategies) {
      instance.setStrategy(strategy, STRATEGIES_TO_GENERATIRS_MAP[strategy]);
    }
    return instance;
  }

  constructor(length) {
    this.length = length;
  }

  initStrategies() {
    this.strategies = new Map();
  }

  initGenerator() {
    this.generator = PasswordGenerator.create(
      [...this.strategies.values()],
      this.length
    );
  }

  setLength(length) {
    this.length = length;
  }

  setStrategy(symbol, Constructor) {
    this.strategies.set(symbol, new Constructor());
    this.initGenerator();
  }

  withDigets() {
    this.setStrategy(STRATEGYS_SYMBOLS.DIGETS, DigestGen);
    return this;
  }

  withNumbers() {
    this.setStrategy(STRATEGYS_SYMBOLS.NUMBERS, NumGen);
    return this;
  }

  withSymbols() {
    this.setStrategy(STRATEGYS_SYMBOLS.SYMBOLS, SymbolGen);
    return this;
  }
  /**
   * @returns {string} random password string
   */
  generate() {
    return this.generator.generate();
  }
}
