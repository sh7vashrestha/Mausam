import React from "react";
import './footerstyle.scss'
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        &copy;{currentYear} Shiva Shrestha. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
