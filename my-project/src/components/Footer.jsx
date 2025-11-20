import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <small>© {new Date().getFullYear()} Bhumika Namdev — Built with React & Bootstrap</small>
      </div>
    </footer>
  );
}
