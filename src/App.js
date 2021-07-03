import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routing />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
