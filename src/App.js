import "./App.css";
import "./Styles/Main.scss";
// import Feature from "./Components/Feature/Feature";
// import LargePropertyCard from "./Components/Cards/LargePropertyCard";
import NavBar from "./Components/Nav/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import EasyBuy from "./Views/EasyBuy/EasyBuy";
import EasyBuild from "./Views/EasyBuild/EasyBuild";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/easy-buy" exact component={EasyBuy} />
          <Route path="/easy-build" exact component={EasyBuild} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
