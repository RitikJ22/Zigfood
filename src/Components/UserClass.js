import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("CC");

    this.state = {
      userInfo: {
        company: "Dummy",
        name: " Dummy",
        bio: "Dummy",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    // console.log("CDM");
    const data = await fetch("https://api.github.com/users/RitikJ22");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    //console.log("Update");
  }

  componentWillUnmount() {
    //console.log("Unmount");
  }
  render() {
    // console.log("CR");

    const { name, company, avatar_url, bio } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="flex flex-col md:flex-row ">
        <div className="md:flex-1">
          <img
            className="w-full h-full object-contain object-center aspect-auto"
            src={avatar_url}
            alt={`${name} profile picture`}
          />
        </div>
        <div className="flex flex-1 bg-gray-50 p-10 justify-center">
          <div className="m-auto text-center max-w-lg">
            <h1 className="text-4xl font-bold uppercase text-gray-800">Name: {name}</h1>
            <p className="text-lg font-medium text-gray-600 my-5">{bio}</p>
            <p className="text-md text-gray-500">{company}</p>
            <div>
              <button
                className="bg-black rounded-lg py-3 px-7 mt-6 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition ease-in duration-200"
                onClick={() => {
                  this.setState({
                    count: count + 1,
                  });
                }}
              >
                Count: {count}
              </button>

              <button className="bg-black rounded-lg py-3 px-7 mt-6 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition ease-in duration-200 ml-4">
                Email Me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
