import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'Components/Loader/Loader';
import Header from 'Components/Header/Header';



export default function Layout() {



  return (
    <>
     <Header/>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
