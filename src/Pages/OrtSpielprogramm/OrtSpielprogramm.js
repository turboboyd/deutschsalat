import { fetchOrtArr } from 'ReduxStore/ortArr/ortArrOperation';
import css from './OrtSpielprogramm.module.css';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import useOrtArr from 'Hooks/useOrtArr';
import { otrTablet } from './OrtTablet';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import OrtForm from 'Components/Form/OrtForm/OrtForm';

const validationSchema = Yup.object().shape({
  answer: Yup.string().required('Обязательное поле'),
});
export default function OrtSpielprogramm() {
  const dispatch = useDispatch();
  const { ortArr, status } = useOrtArr();

  useEffect(() => {
    dispatch(fetchOrtArr());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Spielprogramm</h1>
        <div className={css.circle}>
          <div className={css.circle_color}>1</div>
        </div>
        {status === 'fulfilled' && <OrtForm ortArr={ortArr} />}
      </div>
    </>
  );
}
