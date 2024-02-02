import AuthForm from 'Components/Form/AuthForm/AuthModal';
import BasicModal from 'Components/Modal/BasicModal';
import { logoutUser } from 'ReduxStore/auth/authOperation';
import { useDispatch } from 'react-redux';
import css from './Header.module.css';
import useAuth from 'Hooks/useAuth';
import useModal from 'Hooks/useModal';

export default function Header() {
  const dispatch = useDispatch();
  const { isModalOpen, modalContent, openModal, closeModal } = useModal();
  const { user, IsAuthCheck } = useAuth();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      Header
      {IsAuthCheck ? (
        <div className={css.list_btn}>
          <p className={css.name}>Hello {user.displayName}</p>{' '}
          <button className={css.btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <ul className={css.list_btn}>
          <li>
            <button
              className={css.btn_login}
              onClick={() => openModal('login')}
            >
              Log in
            </button>
          </li>
          <li>
            <button
              className={css.btn}
              onClick={() => openModal('registration')}
            >
              Registration
            </button>
          </li>
        </ul>
      )}
      {isModalOpen && (
        <BasicModal isModal={closeModal}>
          <AuthForm modalContent={modalContent} isModal={closeModal} />
        </BasicModal>
      )}
    </div>
  );
}
