import { Link } from 'react-router-dom';
import css from './Home.module.css';



export default function Home() {
  return (
    <div>
      <Link className={css.sfs} to="/ort">
        OrtPractice
      </Link>
    </div>
  );
}
