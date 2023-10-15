import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4 text-zinc-800 shadow-xl">
        <div>
          <h1 className="text-4xl font-bold">Keyword.io</h1>
        </div>
        <div className="text-2xl font-semibold flex items-center justify-center gap-10">
          <Link to="/">Dashboard</Link>
          <Link to="/create-ad">Create Ads</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
