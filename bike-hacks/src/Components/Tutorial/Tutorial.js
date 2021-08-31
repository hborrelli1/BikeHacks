const Tutorial = ({ data }) => { 
  console.log('data: ', data);
  
  if (data) {
    const { title, id, url, steps, tools } = data;

    return (
      <section className="tutorial-container">
        <header>
          <h1>{title}</h1>
        </header>
        <div className="content">
          <aside>
            <h3>What You'll Need</h3>
            <p>For this tutorial you will need the following tools/items.</p>
            <ul className="tools">
              {tools.map(tool => <li key={tool}>{tool}</li>)}
            </ul>
          </aside>
          <div className="steps">
            <h2>The Process</h2>
            {steps.map((step, index) => {
              console.log('step:', step);
              console.log('step.title:', step.title);
              return (
                <div className="step" key={`${id}-${index}`}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <div className="note">
                    {step.notes}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return (<div>This tutorial is not available...</div>)
  }
}
 
export default Tutorial;
