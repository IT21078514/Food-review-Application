import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-lg py-1">
        {/* <!-- Horizontal navbar --> */}
        <div className=" py-2 max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="https://i.ibb.co/bgDpYxL/cyan.png"
                alt="apuru-poth-logo"
                height="80"
                width="80"
              />
              <div className="flex items-center py-4 px-6 mr-12">
                <NavLink
                  className="font-thinKidFont font-semibold text-4xl md:text-2xl sm:text-xl"
                  to="/"
                >
                  CYAN FOODS
                </NavLink>
              </div>
              {/* <!-- Primary Navbar items --> */}
            </div>

            {/* <!-- Secondary Navbar items --> */}
            <div className="flex items-center space-x-3">
              <>
                <label
                  className="py-1 px-2 rounded bg-gamboge  hover:bg-halloweenOrange hover:text-white font-semibold "
                  for="my-modal-4"
                >
                  <p>SingUp</p>
                </label>
                <label
                  className="py-1 px-2 rounded bg-gamboge  hover:bg-halloweenOrange hover:text-white font-semibold "
                  for="my-modal-3"
                >
                  <p>SingIn</p>
                </label>
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
