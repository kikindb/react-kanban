import { useDispatch } from 'react-redux';
import { alertActions } from '@/store/alert';
import { AlertType } from '@/UI/Alert';

export default function useAlert() {
  const dispatch = useDispatch();
  dispatch(
    alertActions.setAlert({
      title: '',
      body: '',
      type: AlertType.info,
      show: false,
    })
  );
}
