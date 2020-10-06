import { PasswordGenerator } from './Generator';

describe('Symbol gen', () => {
  const strategiesMock = [
    {
      getSymbol() {
        return 'h';
      },
    },
  ];
  test('Should create instance', () => {
    const gen = PasswordGenerator.create(strategiesMock, 1);
    expect(gen).not.toBe(undefined);
  });
  test('Should generate password for one strategies', () => {
    const gen = PasswordGenerator.create(strategiesMock, 3);
    expect(gen).not.toBe(undefined);
    const t = gen.generate();
    expect(t).toBe('hhh');
    expect(t.length).toBe(3);
  });
});
