/** @format */

import styles from './ShowItems.module.css';
import ShowDetailItem from './ShowDetailItem/ShowDetailItem';
import { characterLimiter, numberFormatter } from '../../Utils';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../../store';
import { Item } from '../../store/reducers/stateType';
import RetrieveButton from '../Buttons/RetrieveButton/RetrieveButton';
interface Props {
  data: Item[];
  button: string;
}
const ShowItems: React.FC<Props> = ({ data, button }) => {
  const dispatch = useDispatch();
  const { selectItem, selectedId } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state = useSelector((state: State) => state.products);
  const renderItems = () => {
    if (data.length < 1 && button === 'recentlyBtn') {
      return <RetrieveButton buttonText="Retrieve all the data" />;
    }
    return data.map((item) => {
      return (
        <div key={item.id} className={styles.item}>
          <div
            onClick={() => {
              selectItem(item);
              selectedId(item.id);
            }}
          >
            <ShowDetailItem item={item} selectedId={state.selected_id} />
          </div>
          <div className={styles.caption}>
            <p className={styles.captionName}>
              {characterLimiter(item.filename, 23)}
            </p>
            <p className={styles.captionSize}>
              {numberFormatter(item.sizeInBytes)} MB
            </p>
          </div>
        </div>
      );
    });
  };

  return <div className={styles.container}>{renderItems()}</div>;
};

export default ShowItems;
