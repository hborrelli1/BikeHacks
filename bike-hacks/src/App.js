import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Nav from './Components/Nav/Nav';
import TitleSection from "./Components/TitleSection/TitleSection";
import TutorailsList from './Components/TutorialsList/TutorialsList';
import Tutorial from './Components/Tutorial/Tutorial';
import './SCSS/App.scss';
import { useState, useEffect } from "react";

function App() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    // Request data from http server on mount.
    const data = fetch('api/')
      .then(res => res.json())
      .then(data => setTutorials(data));

  },[]);

  return (
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
      </Switch>
    </Router>
  );
}

export default App;
