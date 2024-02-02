import { Routes, Route } from "react-router-dom";




import Home from "Pages/Home/Home";
import Layout from "./Layout/Layout";
import OrtPractice from "Pages/OrtPractice/OrtPractice";



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
          <Route path="/OrtPractice" index element={<OrtPractice />}>
            <Route path="/OrtPractice" index element={< />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
