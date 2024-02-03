import { Routes, Route } from 'react-router-dom';

import Home from 'Pages/Home/Home';
import Layout from './Layout/Layout';
import OrtPractice from 'Pages/Ort/Ort';
import OrtSpielprogramm from 'Pages/OrtSpielprogramm/OrtSpielprogramm';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/ort">
            <Route path="/ort" element={<OrtPractice />} />
            <Route path="spielprogramm" element={<OrtSpielprogramm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
