import { Item } from '../reducers/stateType';
import { ActionType } from '../action-types/actionTypes';

interface selectItem {
  type: ActionType.ITEM_SELECTED;
  payload: Item;
}

interface selectedId {
  type: ActionType.ITEM_SELECTED_ID;
  payload: string;
}

interface liked {
  type: ActionType.LIKED;
  payload: string;
}

interface homePage {
  type: ActionType.RECENTLY_PAGE;
  payload: string;
}

interface favoritedPage {
  type: ActionType.FAVORITED_PAGE;
  payload: string;
}

interface recentlyBtn {
  type: ActionType.STYLE_RECENTLY_BTN;
  payload: string;
}

interface favoritedBtn {
  type: ActionType.STYLE_FAVORITED_BTN;
  payload: string;
}

interface removeItem {
  type: ActionType.REMOVE_ITEM;
  payload: string;
}
interface fetchData {
  type: ActionType.FETCH_DATA;
  payload: Item[];
}
interface setSelectedItem {
  type: ActionType.SET_SELECTED_ITEM;
  payload: Item;
}

export type Action =
  | fetchData
  | removeItem
  | favoritedBtn
  | recentlyBtn
  | favoritedPage
  | homePage
  | liked
  | selectedId
  | selectItem
  | setSelectedItem;
