import { DigestGen } from './DigestGen';

describe('Digest gen', () => {
  test('Should create instance', () => {
    const gen = DigestGen.create();
    expect(gen).not.toBe(undefined);
  });

  test('Should return random lowercased symbol', () => {
    const symbols = 'abcdefghijklmnopqrstuvwxyz';
    const gen = DigestGen.create();
    const symb = gen.getSymbol();
    expect(symb).not.toEqual(gen.getSymbol());
    expect(symbols.indexOf(symb)).not.toEqual(-1);
  });

  test('Should return random uppercased symbol', () => {
    const gen = DigestGen.create().withUpperCase();
    const symb = gen.getSymbol();
    expect(symb).toEqual(symb.toUpperCase());
  });
});
