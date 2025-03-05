import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyProps - Feito para fãs da NBA</p>
    </footer>
  );
};

export default Footer;
