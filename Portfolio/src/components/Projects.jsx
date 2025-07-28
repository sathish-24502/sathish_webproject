import React from "react";

const Projects = () => {
  return (
    <section id="projects" className=" text-black m-6 border-t-2  font-serif">
      <div>
        <p className="text-2xl font-bold flex justify-center max-sm:text-xl max-md:text-xl font-serif p-2">
          Projects{" "}
        </p>

        <div className="flex flex-col text-lg border-x-2  max-sm:text-sm max-md:text-sm max-lg:text-sm p-5 mb-4 gap-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Udamy-Clone-Project</h1>
            <a href="https://sathish-24502.github.io/udemy-clone-page2-github/">
              <span className="p-1 rounded-lg text-lg bg-opacity-30 shadow-2xl bg-rose-400 max-sm:text-sm max-md:text-sm max-lg:text-sm">
                ClickMe
              </span>
            </a>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Tripadvisor-Clone-Project</h1>
            <a href="https://sathish-24502.github.io/Tripadvisor-clone-website/">
              <span className="p-1 rounded-lg text-lg bg-opacity-30 shadow-2xl bg-rose-400 max-sm:text-sm max-md:text-sm max-lg:text-sm">
                ClickMe
              </span>
            </a>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Greeden-Clone-Project</h1>
            <a href="https://sathish-24502.github.io/Tailwind-greeden-clone/">
              <span className="p-1 rounded-lg text-lg bg-opacity-30 shadow-2xl bg-rose-400 max-sm:text-sm max-md:text-sm max-lg:text-sm">
                ClickMe
              </span>
            </a>
          </div>

          {/* <p>
            I created a simple Udemy clone using basic HTML and CSS. The layout
            includes a homepage, course cards, and navigation bar. I implemented
            responsiveness using media queries for mobile and desktop views.
            This project showcases fundamental web design skills with a clean
            UI.
          </p>
          <p>
            Technologies : <span>Html , External Css </span>
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
