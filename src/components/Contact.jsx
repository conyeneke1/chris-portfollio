import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a182e] flex justify-center items-center px-4 md:pt-80"
    >
      <form
        action="https://getform.io/f/d3e5bcc2-fc11-4737-8034-14a29818374a"
        method="POST"
        className="flex flex-col max-w-[600px] w-full md:pt-80"
      >
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-orange-600">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - conyeneke1@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] outline-none"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 outline-none"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-4 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
