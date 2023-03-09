import { dateFormatter } from '../../Utils';

describe('dateFormatter', () => {
  test('Change the format of a date string correctly.', () => {
    const dateString = '2018-10-21T16:11:11.737Z';
    const expectedFormattedDate = 'October 21, 2018';
    expect(dateFormatter(dateString)).toEqual(expectedFormattedDate);
  });
});
