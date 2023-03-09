import { apiUrl } from '../../api/apiUrl';
import { store } from '../../store';
import { fetchData } from '../../store/action-creators/index';
import { dataSorter } from '../../Utils';

describe('Redux store', () => {
  test('Store items when fetching data form API', async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const items = dataSorter(data);
    items.map((el: any) => (el.favorited = false));
    const selectedItem = items[0];

    await store.dispatch(fetchData() as any);
    const expectedState = {
      products: {
        items,
        selected_id: items[0].id,
        selected_item: selectedItem,
        styleBtn: 'recentlyBtn',
        togglePages: 'recentlyPage',
      },
    };
    expect(store.getState()).toEqual(expectedState);
  });
});
