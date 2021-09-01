import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const Tutorial = ({ data }) => { 
  
  if (!data) {
    return (<div>This tutorial is not available...</div>)
  } else {
    const { title, id, steps, tools } = data;

    return (
      <section className="tutorial-container">
        <ScrollToTopOnMount />
        <div className="content">
          <aside>
            <div className="aside-content">
              <h2>
                <img src="/assets/icons/wrench-icon.png" alt="Wrench Icon" />
                What You'll Need
              </h2>
              <p>For this tutorial you will need the following tools/items.</p>
              <ul className="tools">
                {tools.map(tool => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          </aside>
          <div className="steps">
            <div className="steps-content">
              <h1>{title}</h1>
              {steps.map((step, index) => {
                return (
                  <div className="step" key={`${id}-${index}`}>
                    <h5>{step.title}</h5>
                    <p>{step.description}</p>
                    {step.notes && (
                      <div className="note">
                        <h6>Notes:</h6>
                        <p>{step.notes}</p>
                      </div>
                    )}
                  </div>
                )
              })}
              <Link to="/" className="back-icon">
                <img src="/assets/icons/arrow-icon.png" alt="Back Icon"/> 
                Back to all tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Tutorial;
