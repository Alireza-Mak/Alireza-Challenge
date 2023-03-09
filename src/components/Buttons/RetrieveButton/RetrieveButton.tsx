import styles from './RetrieveButton.module.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store';
interface Props{
  buttonText?:String
}
const RetrieveButton: React.FC<Props> = ({ buttonText }) => {
  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <button className={styles.animatedButton} onClick={() => fetchData()}>
        {buttonText}
      </button>
    </div>
  );
};

export default RetrieveButton;
