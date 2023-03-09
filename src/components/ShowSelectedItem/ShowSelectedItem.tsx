import styles from './ShowSelectedItem.module.css';
import { numberFormatter, dateFormatter } from '../../Utils';
import { useSelector } from 'react-redux';
import { State  } from '../../store';
import Loader from '../Loader/Loader';
import LikeButton from '../Buttons/LikeButton/LikeButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';

const ShowSelectedItem = () => {
  const state = useSelector((state: State) => state.products);
  if (!state.selected_item) {
    return <Loader />;
  } else {
    return (
      <div>
        <div className={styles.imgContainer}>
          <img
            src={state.selected_item.url}
            alt={state.selected_item.filename}
          />
        </div>
        <div className={styles.caption}>
          <div>
            <div className={styles.ImageTitle}>
              {state.selected_item.filename}
            </div>
          </div>
          <LikeButton />
        </div>
        <p className={`${styles.captionSize} ${styles.marginBottom}`}>
          {numberFormatter(state.selected_item.sizeInBytes)} MB
        </p>
        <div
          className={`${styles.captionName} ${styles.borderBottom} ${styles.paddingY}`}
        >
          Information
        </div>
        <div
          className={`${styles.caption} ${styles.borderBottom} ${styles.paddingY}`}
        >
          <div className={styles.captionSubject}>Uploaded by</div>
          <div className={styles.captionDetials}>
            {state.selected_item.uploadedBy}
          </div>
        </div>
        <div
          className={`${styles.caption} ${styles.borderBottom} ${styles.paddingY}`}
        >
          <div className={styles.captionSubject}>Created</div>
          <div className={styles.captionDetials}>
            {dateFormatter(state.selected_item.createdAt)}
          </div>
        </div>
        <div
          className={`${styles.caption} ${styles.borderBottom} ${styles.paddingY}`}
        >
          <div className={styles.captionSubject}>Last modified</div>
          <div className={styles.captionDetials}>
            {dateFormatter(state.selected_item.updatedAt)}
          </div>
        </div>
        <div
          className={`${styles.caption} ${styles.borderBottom} ${styles.paddingY}`}
        >
          <div className={styles.captionSubject}>Dimensions</div>
          <div className={styles.captionDetials}>
            {state.selected_item.dimensions.width} &times;{' '}
            {state.selected_item.dimensions.height}
          </div>
        </div>
        <div
          className={`${styles.caption} ${styles.borderBottom} ${styles.paddingY} ${styles.marginBottom}`}
        >
          <div className={styles.captionSubject}>Resolution</div>
          <div className={styles.captionDetials}>
            {state.selected_item.resolution.width} &times;{' '}
            {state.selected_item.resolution.height}
          </div>
        </div>
        <div className={`${styles.captionName} ${styles.paddingY}`}>
          Description
        </div>
        <div className={styles.captionSubject}>
          {state.selected_item.description
            ? state.selected_item.description
            : 'Unfortunately, this photo has no description.'}
        </div>
        <div>
        <DeleteButton buttonText={'Delete'}/>
        </div>
      </div>
    );
  }
};

export default ShowSelectedItem;
