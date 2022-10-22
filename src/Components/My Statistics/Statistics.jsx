import React from "react";
import "./statistics.css"
const Stats = () => {
  return (


	<section className="github_sta">
		<h5> My Github Status </h5>
		<h2>My Statistics</h2>
   
  
    <div className="stic" style={{ width: "50%", margin: "auto" }}>
		
      {/* <div style={{ width: "40%", margin: "auto" }}> */}
	  <div>
        <a href="https://github.com/osamakhan9">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=osamakhan9"
          />
        </a>
      </div>
 
      <div
        style={{ width: "150%",margin: "auto", display: "flex",}}
      >
        <a href="https://github.com/osamakhan9">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=osamakhan9"  //launguages
          />
        </a>
        <a href="https://github.com/osamakhan9">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=osamakhan9&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
	</section>
  );
};

export default Stats;