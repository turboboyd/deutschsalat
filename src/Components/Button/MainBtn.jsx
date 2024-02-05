import { Link } from 'react-router-dom';
import css from './MainBtn.module.css';

const MainBtn = ({ children, type, onClick }) => {
  return (
    <button className={css.MainBtn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default MainBtn;
