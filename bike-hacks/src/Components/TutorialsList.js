import { useEffect, useState } from "react";
import _ from 'lodash';

const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    // Request data from http server on mount.
    const data = fetch('api/')
      .then(res => res.json())
      .then(data => setTutorials(data));

  },[]);

  console.log('tutorials:', tutorials);

  const renderTutorials = () => {
    if (tutorials.length === 0) {
      return (<div>There are no tutorials at this time...</div>);
    } else {
      return tutorials.map(tutorial => {
        return (<div key={tutorial.id}>{tutorial.title}</div>)
      })
    }
  }

  

  return (
    <div className="tutorials-list">
      {renderTutorials()}
    </div>
  );
}
 
export default TutorialsList;
