import LinkBtn from 'Components/Button/LinkBtn';
import Container from 'Components/Container/Container';
import TischOrt from 'Components/Tisch/TischOrt';
import {  Outlet } from 'react-router-dom';

export default function Ort() {
  return (
    <Container>
      <div>
        <h1>woher/wo/wohin</h1>
        <TischOrt />
        <LinkBtn to="spielprogramm">Üben</LinkBtn>
      </div>
      <Outlet />
    </Container>
  );
}
