export class PasswordGenerator {
  static create(strategies, length) {
    return new PasswordGenerator(strategies, length);
  }
  /**
   *
   * @param {Array<BaseGen>} strategies
   * @param {number} length
   */
  constructor(strategies, length) {
    this.strategies = strategies;
    this.length = length;
  }
  /**
   * @returns {string}
   */
  generate() {
    let password = '';
    while (password.length < this.length) {
      const strategy = this.strategies[this.getRandomIndex()];
      const symbol = strategy.getSymbol();
      password += symbol;
    }

    return password;
  }
  /**
   * @returns {number}
   */
  getRandomIndex() {
    return Math.floor(Math.random() * this.strategies.length);
  }
}
