import React from "react";

const UdemyClone = () => {
  return (
    <section>
      <div className="flex bg-white justify-around items-center gap-6 p-4 max-sm:flex-col">
        <div className="flex justify-between gap-4 items-center ">
          <h1 className="font-semibold">Udemy-Clone-Project</h1>
          <a href="https://sathish-24502.github.io/udemy-clone-page2-github/">
            <button className="p-1 rounded-lg text-lg border shadow-3xl bg-rose-400 max-sm:text-sm max-md:text-sm max-lg:text-sm">
              ClickMe
            </button>
          </a>
        </div>
        
        
        <iframe
          className="w-1/2 h-auto"
          src="https://sathish-24502.github.io/udemy-clone-page2-github/"
        ></iframe>
        
      </div>
    </section>
  );
};

export default UdemyClone;
