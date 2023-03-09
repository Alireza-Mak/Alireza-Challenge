import { numberFormatter } from '../../Utils';

describe('numberFormatter', () => {
  test('Change the format of a number correctly.', () => {
    const number = 4076439;
    const expectedFormattedNumber = 3.9;
    expect(numberFormatter(number)).toEqual(expectedFormattedNumber);
  });
});
