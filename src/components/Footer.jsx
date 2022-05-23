import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <ul>
        {props.array.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </footer>
  );
}

export default Footer;
