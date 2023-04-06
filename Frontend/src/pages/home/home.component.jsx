import React from "react";

import { Link } from "react-router-dom";
import "./home.styles.css"



const HomePage = () => {
  return (
    <div id="outerdiv" >
    <div id="landingpage">
      <h1 id="artscapetitle">ArtScape</h1>
      <h1 id="little-heading">Imagine,Create <br /> and earn</h1>
     
    </div>
    <div id="secon-section">
      {/* <h3 id="explore-text">Explore</h3> */}
      <Link to="/discover/drawings/">
        <div id="drawing-rectangle" className="rectangle">
        <div>
          <h4 id="draw-text">Drawings</h4>
          </div>
         </div>
         </Link>
         {<Link to="/discover/paintings/">
         <div id="paint-rectangle" className="rectangle">
          <div>
            <h4 id="paint-text">Paintings</h4>
          </div>
         </div>
         </Link>}
         <Link to="/discover/prints/">
          <div id="print-rectangle" className="rectangle">
          <div>
            <h4 id="print-text">Prints</h4>
          </div>
         </div>
         </Link>
         
    </div>
    </div>
  );
};

export default HomePage;
