import { ActionType } from '../action-types/actionTypes';
import { apiUrl } from '../../api/apiUrl';
import { dataSorter } from '../../Utils';
import { Item } from '../reducers/stateType';
import { Dispatch } from 'redux';
import { Action } from '../actions';
export const selectItem = (item: Item) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ITEM_SELECTED,
      payload: item,
    });
  };
};
export const selectedId = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ITEM_SELECTED_ID,
      payload: id,
    });
  };
};
export const liked = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LIKED,
      payload: id,
    });
  };
};
export const homePage = (argument: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RECENTLY_PAGE,
      payload: argument,
    });
  };
};
export const favoritedPage = (argument: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FAVORITED_PAGE,
      payload: argument,
    });
  };
};
export const recentlyBtn = (argument: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.STYLE_RECENTLY_BTN,
      payload: argument,
    });
  };
};
export const favoritedBtn = (argument: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.STYLE_FAVORITED_BTN,
      payload: argument,
    });
  };
};
export const removeItem = (itemId: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_ITEM,
      payload: itemId,
    });
  };
};
export const fetchData = () => async (dispatch: Dispatch<Action>) => {
  try {
    const data = await fetch(apiUrl);
    const response: Item[] = await data.json();
    const sortedData = dataSorter(response);
    sortedData.map((el: any) => (el.favorited = false));
    dispatch({ type: ActionType.FETCH_DATA, payload: sortedData });
    dispatch({
      type: ActionType.SET_SELECTED_ITEM,
      payload: sortedData[0],
    });
  } catch (error) {
    console.error(error);
  }
};
