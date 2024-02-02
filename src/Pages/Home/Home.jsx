import { Link } from 'react-router-dom';
import css from './Home.module.css';



export default function Home() {
  return (
    <div>
      <Link to="/OrtPractice">
        OrtPractice
      </Link>
    </div>
  );
}
