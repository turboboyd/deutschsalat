import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'Components/Loader/Loader';
import Header from 'Components/Header/Header';
import Container from 'Components/Container/Container';

export default function Layout() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
