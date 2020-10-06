import {NumGen} from './NumGen';

describe('Num gen', () => {
  test('Should create instance', () => {
    const gen = NumGen.create();
    expect(gen).not.toBe(undefined)
  })

  test('Should return random number 0 to 9', () => {
    const gen = NumGen.create();
    const symb = gen.getSymbol();
    expect(symb).not.toBe(undefined);
    expect(typeof symb).toBe('number');
    expect(symb < 0).toBe(false);
    expect(symb > 9).toBe(false);
  });
})