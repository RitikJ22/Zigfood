import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-4 h-screen">
      <h1 className="text-3xl font-bold mb-6">Contact US</h1>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your name"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
