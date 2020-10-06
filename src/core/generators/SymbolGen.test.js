import { SymbolGen, symbols } from './SymbolGen';

describe('Symbol gen', () => {
  test('Should create instance', () => {
    const gen = SymbolGen.create();
    expect(gen).not.toBe(undefined);
  });
  test('Should return random symbol', () => {
    const gen = SymbolGen.create();
    const s = gen.getSymbol();
    expect(s).not.toEqual(gen.getSymbol());
    expect(symbols.indexOf(s)).not.toEqual(-1);
  });
});
