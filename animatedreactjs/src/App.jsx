import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Service from "./Component/Service";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import RegisterUsers from "./Component/RegisterUsers";

const App = () => {
  return (
    <>
      <div class="card">
        <div class="card-header">
          <Navbar />
        </div>
        <div class="card-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/registerusers" component={RegisterUsers} />
            <Redirect to="/" />
          </Switch>
        </div>
        <div class="card-footer text-muted">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
