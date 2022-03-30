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
import EditUser from "./Component/EditUser";
import User from "./Component/User";

const App = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <Navbar />
        </div>
        <div className="card-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/registerusers" component={RegisterUsers} />
            <Route exact path="/edit/user/:id" component={EditUser} />
            <Route exact path="/user/:id" component={User} />
            <Redirect to="/" />
          </Switch>
        </div>
        <div className="card-footer text-muted">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
