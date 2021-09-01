const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <p>BikeHacks 2021</p>
      <button type="button" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <img src="/assets/icons/back-to-top-icon.png" alt="Back to top" />
        Back to top
      </button>
    </footer>
  );
}
 
export default Footer;
