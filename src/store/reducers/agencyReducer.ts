import { Action } from '../actions/index';
import { State } from './stateType';
import { ActionType } from '../action-types/actionTypes';
const initialState: State = {
  items: [],
  selected_item: null,
  selected_id: null,
  togglePages: 'recentlyPage',
  styleBtn: 'recentlyBtn',
};

const todosReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.FETCH_DATA:
      return {
        ...state,
        items: action.payload,
      };
    case ActionType.SET_SELECTED_ITEM:
      return {
        ...state,
        selected_item: action.payload,
        selected_id: action.payload.id,
      };

    case ActionType.ITEM_SELECTED:
      return { ...state, selected_item: action.payload };
    case ActionType.ITEM_SELECTED_ID:
      return { ...state, selected_id: action.payload };
    case ActionType.RECENTLY_PAGE:
      return { ...state, togglePages: action.payload };
    case ActionType.FAVORITED_PAGE:
      return { ...state, togglePages: action.payload };
    case ActionType.STYLE_RECENTLY_BTN:
      return { ...state, styleBtn: action.payload };
    case ActionType.STYLE_FAVORITED_BTN:
      return { ...state, styleBtn: action.payload };
    case ActionType.LIKED:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, favorited: !item.favorited };
          } else {
            return item;
          }
        }),
      };
    case ActionType.REMOVE_ITEM:
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      if (updatedItems.length > 0) {
        return {
          ...state,
          selected_id: updatedItems[0].id,
          selected_item: updatedItems[0],
          items: updatedItems,
        };
      }
      return {
        ...state,
        selected_id: null,
        selected_item: null,
        items: updatedItems,
      };
    default:
      return state;
  }
};
export default todosReducer;
