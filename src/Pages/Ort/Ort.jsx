import LinkBtn from 'Components/Button/LinkBtn';
import TischOrt from 'Components/Tisch/TischOrt';
import {  Outlet } from 'react-router-dom';

export default function Ort() {
  return (
    <>
      <div>
        <h1>woher/wo/wohin</h1>
        <TischOrt />
        <LinkBtn to="spielprogramm">Üben</LinkBtn>
      </div>
      <Outlet />
    </>
  );
}
