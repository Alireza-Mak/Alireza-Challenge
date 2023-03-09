import React from 'react';
import { Item } from '../../../store/reducers/stateType';
import styles from './ShowDetailItem.module.css';
interface Props {
  item: Item;
  selectedId: string | null;
}

const ShowDetailItem: React.FC<Props> = ({ item, selectedId }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.imgContainer} ${
          selectedId === item.id ? styles.imgContainerBorder : ''
        }`}
      >
        <img src={item.url} alt={item.filename} />
      </div>
    </div>
  );
};

export default ShowDetailItem;
