import { HashRouter as Router, Route } from "react-router-dom";
import {Login} from './Common/Login';
import {Signup} from './Common/Signup';
import {Navbar} from './Common/Navbar';
import {LoggedScreen} from "./Common/logged_screen";
import {AddProduct} from "./components/addProducts/add_product";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Footer from "./Common/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router baseName="/">
      <Route exact path="/" component={Navbar}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/list" component={LoggedScreen}></Route>
      <Route exact path="/add" component={AddProduct}></Route>
      {/* <Route exact path="/admin" component={AddProduct}></Route>
      <AddProduct/> */}   
      {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;