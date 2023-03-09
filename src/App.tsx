import Layout from './layout/Layout';
import { Provider } from 'react-redux';
import { store } from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
};

export default App;
