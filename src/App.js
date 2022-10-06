import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar1 from "../src/component/Home/Navbar1"
import Banner from "./component/Home/Banner";
import Categories from "./component/Home/Categories";
import FeaturedProduct from "./component/Home/FeaturedProduct";
import Footer from "./component/Home/Footer";
import Home from "./component/Home/Home";
import Shop from "../src/component/Shop/index"
import SingleProduct from "../src/component/SingleProduct/index"
import TodoList from "../src/component/TodoList/index"
import Examples from "../src/component/Examples/index1"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/shop" element={< Shop />} />
          <Route exact path="/singleProduct/:id" element={< SingleProduct />} />
        </Routes>
        <TodoList />
        <Footer />
        <Examples />
      </Router>
    </div>
  );
}

export default App;
