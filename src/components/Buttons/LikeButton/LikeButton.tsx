/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item } from '../../../store/reducers/stateType';
import { State, actionCreators } from '../../../store';
import styles from './LikeButton.module.css';
import { useState } from 'react';

const LikeButton = () => {
  const [iconStyle, setIconStyle] = useState(false);
  const dispatch = useDispatch();
  const { liked } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.products);
  let toggle = state.items.filter(
    (item: Item) => item.id === state.selected_item?.id
  )[0]?.favorited;
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon
        onClick={() => {
          if (state.selected_item) {
            liked(state.selected_item.id);
          }
        }}
        onMouseEnter={() => setIconStyle(true)}
        onMouseLeave={() => setIconStyle(false)}
        onTouchStart={() => setIconStyle(true)}
        onTouchEnd={() => setIconStyle(false)}
        className={styles.icon}
        icon={toggle || iconStyle ? solidHeart : regularHeart}
        color={iconStyle ||toggle ? '#d85887' : '#64748b'}
      />
    </div>
  );
};

export default LikeButton;
