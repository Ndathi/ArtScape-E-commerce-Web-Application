import React from "react";

import "./Home.css";
import "./nicepage.css";

var __html = require("./home.html.js");
var template = { __html: __html };

const HomePage = () => {
  return (
    <div className="screen-share">
      <span dangerouslySetInnerHTML={template} />
    </div>
  );
};

export default HomePage;
