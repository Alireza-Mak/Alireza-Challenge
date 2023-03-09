import { characterLimiter } from '../../Utils';

describe('characterLimiter', () => {
  test('Control the number of character', () => {
    const dateString =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    const expectedFormattedDate = 'Lorem Ipsum is s...';
    expect(characterLimiter(dateString)).toEqual(expectedFormattedDate);
  });
});
