import React from "react";

function Experience({ Exp }) {
  return (
    <>
      <div id="experiences" className="bg-[#11071f]  py-5">
        
        <h1 className="text-center text-3xl font-bold text-white text-gradient1 font-primary pb-10">
          
          {Exp.main}
        </h1>
        <div className="grid md:grid-cols-12 ">
          <div className="text-white font-primary  rounded-lg mt-5 md:col-span-4 
          flex items-center justify-center">
            <img
              src={Exp.logo}
              width={80}
              alt="there is logo"
              className="rounded-full"
            />
            <div className="sm:pl-7 px-2 te text-lg  sm:text-3xl  md:text-xl lg:text-3xl font-bold text-white  font-primary ">
              {" "} 
              {Exp.title}
            </div>
          </div>

          <p className=" md:col-span-7 text-amber-50 text-xl bg-white/6 backdrop-blur-sm p-5  rounded-lg mt-5 btn-style6 text-center ">
            {" "}
            {Exp.para}
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
