import React, { useState } from "react";
import Navbar from "../nav-components/Navbar";
import Footer from "../nav-components/Footer";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");
  const navigate = useNavigate();

const datas ={
  Name,
  Email,
  Msg

}



  function handleSubmit(e) {
    e.preventDefault();
    if (!Name.trim() || !Email.trim() || !Msg.trim()) {
      alert("Please fill in all details");
    } else {
      alert("Form is submitted");
      navigate("/about"); // lowercase navigate

    }
    console.log(datas);
  }

  return (
    <section>
      {/* <nav>
        <Navbar />
      </nav> */}
      <div className="bg-[url('https://wallpaperaccess.com/full/11786.jpg')] bg-cover bg-center h-96 flex justify-center max-[320px]:w-screen">
        <div className="flex items-center my-28 justify-center max-sm:w-3/4 ">
          <form className="bg-transparent rounded-lg shadow-2xl p-4 " onSubmit={handleSubmit}>
            <h1 className="flex mb-4 justify-center font-bold text-black text-3xl max-sm:text-lg">
              Contact
            </h1>
            <div className="flex flex-col justify-center items-center gap-6 p-2  max-[320px]:gap-2">
              <label htmlFor="name" className="hidden">Name</label>
              <input
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={Name}
                type="text"
                placeholder="Enter Your Name"
                className="w-80 p-1 focus:outline-none max-sm:w-60 max-[320px]:w-44"
              />

              <label htmlFor="email" className="hidden">Email</label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                type="email"
                placeholder="Enter Your Email"
                className="w-80 p-1 focus:outline-none max-sm:w-60 max-[320px]:w-44"
              />

              <label htmlFor="msg" className="hidden">Message</label>
              <textarea
                id="msg"
                onChange={(e) => setMsg(e.target.value)}
                value={Msg}
                placeholder="Message"
                className="w-80  p-1 focus:outline-none mb-4  max-[320px]:m-1 max-sm:w-60 max-[320px]:w-44"
              ></textarea>

              <button
                type="submit"
                className="w-44 p-1 rounded-lg bg-white font-bold shadow-xl border hover:bg-[#044088] hover:text-white max-sm:w-32 max-[320px]:w-20 max-[320px]:text-xs"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </section>
  );
};

export default ContactForm;
