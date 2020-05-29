import React from "react";

// Components
import Link from "./Link";

const UnauthenticatedNav = () => {
  const [isMenuOpen] = React.useState(false);

  return (
    <nav
      role="navigation"
      className={`${
        isMenuOpen ? "block" : "hidden"
      } px-2 pt-2 pb-4 sm:flex items-center sm:p-0`}
    >
      <Link
        to="/login"
        className="text-xl block mx-3 py-1 active:outline sm:rounded text-gray-200 hover:text-gray-300 hover:underline focus:underline"
      >
        Log In
      </Link>
      <Link
        to="/register"
        className="text-xl mt-1 block mx-3 rounded font-bold text-gray-200 hover:text-gray-300 bg-purple-700 py-1 px-3 hover:underline focus:underline sm:mt-0 sm:ml-2"
      >
        Sign Up Free
      </Link>
    </nav>
  );
};

export default UnauthenticatedNav;