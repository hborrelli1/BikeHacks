import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  const [offsetHeight, setOffsetHeight] = useState(0);
  
  // Calculate offset of Nav and Footer on mount.
  useEffect(() => {
    const navHeight = document.getElementById('navBar').clientHeight;
    const footerHeight = document.getElementById('footer').clientHeight;
    const offsetHeight = navHeight + footerHeight;
    setOffsetHeight(offsetHeight);
  }, [])

  const style = {
    backgroundImage: 'url(/assets/images/404-image.jpg)',
    height: `calc(100vh - ${offsetHeight}px)`,
  }

  return (
    <section className="not-found-page" style={style}>
      <div className="content">
        <h1>Oops!</h1>
        <h2>Page not found...</h2>
        <Link to="/">
          <img src="/assets/icons/arrow-icon.png" alt="Back to home" />
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
 
export default NotFoundPage;
