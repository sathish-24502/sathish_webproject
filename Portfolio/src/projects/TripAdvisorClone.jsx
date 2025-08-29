import React from "react";

const TripAdvisorClone = () => {
  return (
    <section>
      <div className="flex bg-white justify-around items-center gap-6 p-4 max-sm:flex-col">
        
        <div className="flex justify-between gap-4 items-center ">
          <div className="font-semibold">Tripadvisor-Clone-Project</div>
          <a href="https://sathish-24502.github.io/Tripadvisor-clone-website/">
            <button className="p-1 rounded-lg text-lg shadow-3xl border bg-rose-400 max-sm:text-sm max-md:text-sm max-lg:text-sm">
              ClickMe
            </button>
          </a>
        </div>
        
        <iframe
          className="w-1/2 h-auto"
          src="https://sathish-24502.github.io/Tripadvisor-clone-website/"
        ></iframe>
       
        
        
      </div>
    </section>
  );
};

export default TripAdvisorClone;
