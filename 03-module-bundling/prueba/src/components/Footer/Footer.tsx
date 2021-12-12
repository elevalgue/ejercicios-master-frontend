import React from "react";
import classes from "../../styles/Footer.scss"

export const Footer: React.FC = () => {

  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
      <p>&copy;2021</p>
      <p>Made with ⭐</p>
      </div>

      <div>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>

      </footer>
  );
};