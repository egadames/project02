import React from "react";
import StartPage from "../StartPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "../../containers/Counter";
import ViewAll from "../../containers/ViewAll";
import Navbar from "../Navbar";
import UpdateByID from "../../containers/UpdateByID";
import NewFlashCard from "../../containers/NewFlashCard";
import DeleteCard from "../../containers/DeleteCard";
import Review from "../../containers/Review";
import Attempts from "../Attempts";
import Footer from "../Footer";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      {/* <Route exact path="/" component={Attempts} /> */}
      <Route exact path="/" component={StartPage} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/flashcard" component={ViewAll} />
      <Route exact path="/add" component={NewFlashCard} />
      <Route path="/review" component={Review} />
      <Route exact path="/update/:flashId" component={UpdateByID} />
      <Route exact path="/delete/:flashId" component={DeleteCard} />
    </Switch>
    <Footer/>
  </Router>
);
export default App;
