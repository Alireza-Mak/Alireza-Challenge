import { Item } from '../store/reducers/stateType';

export const dataSorter = (data: Item[]): Item[] => {
  return data.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};
