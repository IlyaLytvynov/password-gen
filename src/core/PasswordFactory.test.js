import { PasswordFactory, STRATEGYS_SYMBOLS } from './PasswordFactory';

describe('Symbol gen', () => {
  test('Should create instance', () => {
    const gen = PasswordFactory.create(5);
    expect(gen).not.toBe(undefined);
  });

  test('Should create genertor with digets strategies', () => {
    const gen = PasswordFactory.create(5).withDigets();
    expect(gen.strategies.size).toBe(1);
    expect(gen.strategies.get(STRATEGYS_SYMBOLS.DIGETS)).not.toBe(undefined);
  });

  test('Should create genertor with num strategies', () => {
    const gen = PasswordFactory.create(5).withNumbers();
    expect(gen.strategies.size).toBe(1);
    expect(gen.strategies.get(STRATEGYS_SYMBOLS.NUMBERS)).not.toBe(undefined);
  });

  test('Should create genertor with symbols strategies', () => {
    const gen = PasswordFactory.create(5).withSymbols();
    expect(gen.strategies.size).toBe(1);
    expect(gen.strategies.get(STRATEGYS_SYMBOLS.SYMBOLS)).not.toBe(undefined);
  });
});
