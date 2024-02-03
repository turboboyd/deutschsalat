import {
  selectOrtArr,
  selectIsLoading,
  selectStatus,
  selectError,
} from 'ReduxStore/ortArr/ortArrSelectors';
import { useSelector } from 'react-redux';

const useOrtArr = () => {
  const ortArr = useSelector(selectOrtArr);
  const isLoading = useSelector(selectIsLoading);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  return {
    ortArr,
    isLoading,
    status,
    error,
  };
};

export default useOrtArr;
