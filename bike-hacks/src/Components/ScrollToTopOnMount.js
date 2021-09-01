import { useEffect } from "react";

const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('scrolling...');
  }, []);
  
  return null;
}
 
export default ScrollToTopOnMount;
