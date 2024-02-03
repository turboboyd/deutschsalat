import { Link } from 'react-router-dom';
import css from './Home.module.css';



export default function Home() {
  return (
    <div>
      <Link to="/ort">
        OrtPractice
      </Link>
    </div>
  );
}
