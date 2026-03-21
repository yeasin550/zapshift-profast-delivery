import { Link } from "react-router";
import errorimg from "../../assets/error.png";

const Error = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-12">
        <img className="w-72" src={errorimg} alt="" />
      </div>
      <div className="w-44 mx-auto">
        <Link to="/">
          <button className="cursor-pointer py-2 px-4 rounded-md bg-lime-400 ml-12 font-bold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
