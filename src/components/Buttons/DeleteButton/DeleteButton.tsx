import React from 'react';
import styles from './DeleteButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../../../store';

interface Props {
  buttonText: String;
}
const DeleteButton: React.FC<Props> = ({ buttonText }) => {
  const dispatch = useDispatch();
  const { removeItem } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.products);
  return (
    <div>
      <button
        onClick={() => {
          if (state.selected_item) {
            removeItem(state.selected_item.id);
          }
        }}
        className={styles.deleteBtn}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DeleteButton
