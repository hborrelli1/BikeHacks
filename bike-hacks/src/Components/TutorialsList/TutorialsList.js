import { Link } from 'react-router-dom';

const TutorialsList = ({ tutorials }) => {

  const renderTutorials = () => {
    if (tutorials.length === 0) {
      return (<div>There are no tutorials at this time...</div>);
    } else {
      return tutorials.map(tutorial => {
        return (
          <Link to={`/tutorials/${tutorial.url}`} key={tutorial.id}>
            <img src={tutorial.iconPath} alt="Tutorial Icon"/>
            {tutorial.title}
          </Link>
        )
      })
    }
  }

  return (
    <section className="tutorials-list-container">
      <div className="tutorials-header">
        <h2>Tutorials</h2>
      </div>
      <div className="tutorials-list">
        {renderTutorials()}
      </div>
    </section>
  );
}
 
export default TutorialsList;
