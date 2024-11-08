import { Link } from "react-router-dom";
import { useAppSelector } from "../../services/hooks";

const Header = () => {
  const profile = useAppSelector((state) => state.profile);
  console.log(profile);

  return (
    <div className="w-full flex justify-center items-center py-5 bg-gray-400">
      <div className="w-full max-w-[1140px] flex justify-between px-2 items-center">
        <div className="flex justify-center items-center gap-4">
          <Link to="/" className="text-black text-lg">
            Home
          </Link>
          <Link to="/login" className="text-black text-lg">
            Login
          </Link>
          <Link to="/sign-up" className="text-black text-lg">
            Register
          </Link>
        </div>
        {/* <div className="flex justify-center items-center gap-5">
        <div className="border-2 black rounded-xl">
          <input
            type="text"
            placeholder="search"
            className="outline-none w-full h-full rounded-xl px-3 py-2"
          />
        </div>
        <button>Add User</button>
      </div> */}
        <div>
          <h1 className="text-xl">
            Welcome, <span className="text-blue-800">Anshu</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
