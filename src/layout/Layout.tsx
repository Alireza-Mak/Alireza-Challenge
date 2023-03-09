import React, { useEffect } from 'react';
import styles from './Layout.module.css';
import ShowItems from '../components/ShowItems/ShowItems';
import ShowSelectedItem from '../components/ShowSelectedItem/ShowSelectedItem';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../store';

const Layout = () => {
  const dispatch = useDispatch();
  const {
    recentlyBtn,
    favoritedBtn,
    homePage,
    favoritedPage,
    fetchData,
    selectedId,
    selectItem,
  } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.products);
  const favoriteItems = state.items.filter((item) => item.favorited);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.row}>
      <div className={`${styles.colLeft}`}>
        <div className={styles.container}>
          <p className={`${styles.marginZero} ${styles.header}`}>Photos</p>
          <div className={styles.btnsContainer}>
            <button
              onClick={() => {
                homePage('recentlyPage');
                recentlyBtn('recentlyBtn');
                selectedId(state.items[0].id);
                selectItem(state.items[0]);
              }}
              className={`${styles.recentlyBtn}  ${
                state.styleBtn === 'recentlyBtn' ? styles.selected : ''
              }`}
            >
              Recently Added
            </button>
            <button
              onClick={() => {
                let firstFavorite = state.items.filter(
                  (item: any) => item.favorited === true
                );
                if (firstFavorite.length > 0) {
                  selectedId(firstFavorite[0].id);
                  selectItem(firstFavorite[0]);
                }
                favoritedPage('favoritedPage');
                favoritedBtn('favoritedBtn');
              }}
              className={`${styles.favoritedBtn} ${
                state.styleBtn === 'favoritedBtn' ? styles.selected : ''
              }`}
            >
              Favorited
            </button>
          </div>
          {state.togglePages === 'recentlyPage' && (
            <ShowItems
              storeLength={state.items.length}
              data={state.items}
              button="recentlyBtn"
            />
          )}
          {state.togglePages === 'favoritedPage' && (
            <ShowItems
              storeLength={favoriteItems.length}
              data={favoriteItems}
              button="favoritedBtn"
            />
          )}
        </div>
      </div>
      <div className={`${styles.colRight}`}>
        <div className={styles.container}>
          <ShowSelectedItem />
        </div>
      </div>
    </div>
  );
};

export default Layout;
