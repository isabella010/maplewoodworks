import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <>
      <div className="wrapper">
        <div className="content"></div>
        <footer className="footer">
          <p>© {currentYear} Maple Woodworks. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
