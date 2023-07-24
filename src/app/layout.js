import React from "react";
import GlobalStateContext from "../components/GlobalStateContext";
import Header from "../components/Header";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStateContext>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </GlobalStateContext>
      </body>
    </html>
  );
}

export default RootLayout;
