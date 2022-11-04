import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop/Shop";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login/Login";
import Detail from "./components/pages/Detail/Detail";
import SignUp from "./components/pages/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
