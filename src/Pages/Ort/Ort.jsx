import TischOrt from 'Components/Tisch/TischOrt';
import { Link, Outlet } from 'react-router-dom';

export default function Ort() {
  return (
    <>
      <div>
        <h1>woher/wo/wohin</h1>
        <TischOrt />
        <Link to="spielprogramm">Üben</Link>
      </div>
      <Outlet />
    </>
  );
}
