import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from './Components/Nav/Nav';
import TitleSection from "./Components/TitleSection/TitleSection";
import TutorailsList from './Components/TutorialsList/TutorialsList';
import Tutorial from './Components/Tutorial/Tutorial';
import Footer from "./Components/Footer/Footer";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import './SCSS/App.scss';

function App() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    // Request data from http server on mount.
    const data = fetch('api/')
      .then(res => res.json())
      .then(data => setTutorials(data));

  },[]);

  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <TitleSection />
            <TutorailsList tutorials={tutorials} />
          </Route>
          <Route path="/tutorials/:id" render={({match}) => (
            <Tutorial data={tutorials.find(tutorial => tutorial.url === match.params.id)} />
          )} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
