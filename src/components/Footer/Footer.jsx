import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Keshava Murthy H N. All Rights Reserved.</p>
      <p>Built with ❤️ using React & Vite</p>
    </footer>
  );
}

export default Footer;
