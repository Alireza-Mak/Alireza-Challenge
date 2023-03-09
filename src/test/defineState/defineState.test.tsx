import { store } from '../../store';

describe('Redux store', () => {
  it('My application should have initial state', () => {
    const expectedState = {
      products: {
        items: [],
        selected_item: null,
        selected_id: null,
        togglePages: 'recentlyPage',
        styleBtn: 'recentlyBtn',
      },
    };
    expect(store.getState()).toEqual(expectedState);
  });
});
