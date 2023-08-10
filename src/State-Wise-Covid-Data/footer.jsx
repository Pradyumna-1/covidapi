import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <p>Copyright @{year}. All rights Reserved.</p>
      </div>
    </>
  );
};
export default Footer;
