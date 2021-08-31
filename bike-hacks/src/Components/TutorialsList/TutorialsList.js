import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import _ from 'lodash';

const TutorialsList = ({tutorials}) => {

  const renderTutorials = () => {
    if (tutorials.length === 0) {
      return (<div>There are no tutorials at this time...</div>);
    } else {
      return tutorials.map(tutorial => {
        return (<Link to={`/tutorials/${tutorial.url}`} key={tutorial.id}>{tutorial.title}</Link>)
      })
    }
  }

  

  return (
    <section className="tutorials-list">
      <div className="tutorials-header">
        <h2>Tutorials</h2>
      </div>
      {renderTutorials()}
    </section>
  );
}
 
export default TutorialsList;
