import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import CreateAPostModal from "../member2/CreateAPostModal";

const LogingHeader = () => {
  return (
    <>
      <CreateAPostModal />
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
                  to="/home"
                >
                  CYAN FOODS
                </NavLink>
              </div>
              {/* <!-- Primary Navbar items --> */}
            </div>

            {/* <!-- Secondary Navbar items --> */}
            <div className="flex items-center space-x-3">
              <>
                <h2>Followers:560</h2>
                <h2>Following:500</h2>
                <label htmlFor="create-post-modal" className="py-1 px-2 rounded bg-gamboge hover:bg-halloweenOrange hover:text-white font-semibold">
                  <AiFillPlusCircle color="white" size={24} />
                </label>
                <NavLink
                  className="py-1 px-2 rounded bg-gamboge hover:bg-halloweenOrange hover:text-white font-semibold "
                  to="/UserProfile"
                >
                  UserProfile
                </NavLink>
                <NavLink
                  className="py-1 px-2 rounded bg-gamboge hover:bg-halloweenOrange hover:text-white font-semibold "
                  onClick={() => {
                    window.sessionStorage.removeItem("uid");
                    window.sessionStorage.removeItem("susername");
                    window.sessionStorage.removeItem("semail");
                    window.sessionStorage.removeItem("spssword");
                    window.location.href = "/";
                  }}
                  to="/"
                >
                  LogOut
                </NavLink>
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LogingHeader;
