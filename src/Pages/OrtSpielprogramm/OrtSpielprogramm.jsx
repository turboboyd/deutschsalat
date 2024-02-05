import { fetchOrtArr } from 'ReduxStore/ortArr/ortArrOperation';
import css from './OrtSpielprogramm.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, } from 'react';
import useOrtArr from 'Hooks/useOrtArr';
import OrtForm from 'Components/Form/OrtForm/OrtForm';
import LinkBtn from 'Components/Button/LinkBtn';
import { useLocation } from 'react-router-dom';
import Container from 'Components/Container/Container';

export default function OrtSpielprogramm() {
  const dispatch = useDispatch();
  const {search} = useLocation();
  const { ortArr, status } = useOrtArr();
  // const [ortName, setOrtName] = useState('wo');
  const ortName = 'wo';
  useEffect(() => {
    dispatch(fetchOrtArr());
  }, [dispatch]);


  return (
    <>
      <Container>
        {!search && (
          <>
            <h1>Spielprogramm</h1>
            <div className={css.circle}>
              <div className={css.circle_color}>1</div>
            </div>
            <LinkBtn to={`?wo`}>Starten</LinkBtn>
          </>
        )}

        {status === 'fulfilled' && search && (
          <OrtForm ortArr={ortArr} ortName={ortName} />
        )}
      </Container>
    </>
  );
}
