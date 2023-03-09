import { apiUrl } from '../../api/apiUrl';
import { store } from '../../store';
import { fetchData, selectItem } from '../../store/action-creators/index';
import { dataSorter } from '../../Utils';

describe('select Item by clicking on the image', () => {
  test('Update store correctly when user select an item', async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const items = dataSorter(data);
    items.map((el: any) => (el.favorited = false));
    const selectedItem = items[0];
    await store.dispatch(fetchData() as any);
    store.dispatch(selectItem(selectedItem) as any);
    const expectedState = {
      products: {
        items: expect.any(Array),
        selected_id: selectedItem.id,
        selected_item: selectedItem,
        styleBtn: expect.any(String),
        togglePages: expect.any(String),
      },
    };
    const state = store.getState();
    expect(state.products.items.length).toBeGreaterThan(0);
    expect(state).toMatchObject(expectedState);
    expect(
      state.products.items.find((item) => item.id === selectedItem.id)
    ).toEqual(selectedItem);
    expect(state.products.styleBtn).toMatch(/recentlyBtn|popularBtn/);
    expect(state.products.togglePages).toMatch(/recentlyPage|popularPage/);
  });
});
