// import css from './Home.module.css';
import LinkBtn from 'Components/Button/LinkBtn';
import Container from 'Components/Container/Container';



export default function Home() {
  return (
    <Container>
      <LinkBtn to="/ort">OrtPractice</LinkBtn>
    </Container>
  );
}
