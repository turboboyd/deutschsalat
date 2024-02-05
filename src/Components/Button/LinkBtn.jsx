import { Link } from 'react-router-dom';
import css from './LinkBtn.module.css';

const LinkBtn = ({ children, to }) => {
  return (
    <Link className={css.LinkBtn} to={to}>
      {children}
    </Link>
  );
};

export default LinkBtn;
