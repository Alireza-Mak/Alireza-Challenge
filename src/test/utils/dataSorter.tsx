import { apiUrl } from '../../api/apiUrl';
import { dataSorter } from '../../Utils';

describe('dataSorter', () => {
  test('Check the array is sorted by date', async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const items = dataSorter(data);
    const expectedFormattedDate = items;
    expect(dataSorter(data)).toEqual(expectedFormattedDate);
  });
});
