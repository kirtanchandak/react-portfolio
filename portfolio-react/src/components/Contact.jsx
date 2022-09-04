import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bd275741-35f8-44b7-a4b1-fa0ec1bc139c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FFD524] text-white">
            Contact
          </p>
          <p className="py-4 text-white">
            Submit the form below or shoot me a email -
            kirtanmchandak5@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your message..."
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#FFD524] hover:border-[#FFD524] mt-4 flex items-center justify-center mx-auto py-3 my-8 p-3">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
