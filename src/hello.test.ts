import { greet } from './hello';

describe('greet', () => {
  test('returns greeting with name', () => {
    const result = greet('World');
    expect(result).toBe('Hello, World!');
  });

  test('handles empty string', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  test('handles special characters', () => {
    const result = greet('한글');
    expect(result).toBe('Hello, 한글!');
  });

  test('handles numbers in string', () => {
    const result = greet('User123');
    expect(result).toBe('Hello, User123!');
  });

  test('handles very long names', () => {
    const longName = 'a'.repeat(1000);
    const result = greet(longName);
    expect(result).toBe(`Hello, ${longName}!`);
  });
});
