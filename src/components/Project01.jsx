import React from "react";
import imgproj from "../images/project1.jpg";
function Projects() {
  return (
    //container
    <div className=" bg-[#11071f]   ">
      {/* project headding */}
      <div className="text-center text-3xl font-bold text-white text-gradient1 font-primary top-[35px] relative">
        PROJECTS
      </div>
      {/* project 1 grid */}
      <div className="grid sm:grid-cols-2 mt-20">
        <div className=" bg-[#11071f] p-5  ">
          <div className=" text-xl font-bold text-[#9857d3] font-primary text-gradient1 ">
            Featured Project
          </div>
          <div className=" text-3xl font-bold text-white font-primary mt-3 ">
            Project Name........
          </div>
          <div className=" text-white font-primary bg-white/6 backdrop-blur-sm p-5  rounded-lg mt-5 btn-style6 ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
        </div>
        <div className=" bg-[#11071f] flex justify-center  items-end  sm:pb-10 md:pb-0">
          <img
            src={imgproj}
            alt="there is an img"
            className="w-72 sm:w-96 rounded-4xl mx-auto transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
