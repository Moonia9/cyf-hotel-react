import React from "react";

const Footer = properties => {
  return (
    <footer>
      <ul>
        {properties.array.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
