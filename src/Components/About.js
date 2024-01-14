import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="h-screen ">
        <div className="flex justify-center items-center bg-gray-100 px-4 py-6">
          <div className="text-center shadow-lg rounded-lg p-10 bg-white max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 uppercase mb-8">
              About Me
            </h1>
            <UserClass name={"Ritik Jaiswal"} profile="Front-End Developer" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
