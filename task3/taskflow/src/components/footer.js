import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="socials">
        <a href="#facebook"><i className="fa-brands fa-facebook"></i></a>
        <a href="#twitter"><i className="fa-brands fa-twitter"></i></a>
        <a href="#instagram"><i className="fa-brands fa-instagram"></i></a>
      </div>

      <p className="copyright">
        © 2023 Your Company. All rights reserved.
      </p>
    </footer>
  );
}
