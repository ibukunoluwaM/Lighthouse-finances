import { React, useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RoleContext } from "./roleContext";
import { roles } from "./roleContext";
import { NavLink } from "react-router-dom";

//for font-color
function textColor(role) {
  if (role === "Log Out") {
    return "text-red-500";
  } else if (role === "Add Role") {
    return "text-[#0F8ECD]";
  }
}

function Sidebar() {
  let navigate = useNavigate();

  const { role, setRole } = useContext(RoleContext);
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const finance = [
    {
      label: "Dashboard",
      path: "dashboard",
      img: "../..//assets/elements-1.png",
      activeImg: "../..//assets/elements.png",
    },
    {
      label: "Products",
      path: "products",
      img: "../..//assets/list-unordered-2.png",
      activeImg: "../..//assets/list-unordered2.png",
    },
    {
      label: "Customers",
      path: "customers",
      img: "../..//assets/users.png",
      activeImg: "../..//assets/users-1.png",
    },
    {
      label: "Transactions",
      path: "transactions",
      img: "../..//assets/arrow-swap.png",
      activeImg: "../..//assets/arrow-swap2.png",
    },
    {
      label: "Analytics",
      path: "analytics",
      img: "../..//assets/procent.png",
      activeImg: "../..//assets/chartline2.png",
    },
    {
      label: "Team Management",
      path: "team-management",
      img: "../..//assets/user-square.png",
      activeImg: "../..//assets/user-square2.png",
    },
    {
      label: "Settings",
      path: "settings",
      img: "../..//assets/gear.png",
      activeImg: "../..//assets/gear (1).png",
    },
  ];

  const superAdmin = [
    {
      label: "Dashboard",
      path: "dashboard",
      img: "../..//assets/elements-1.png",
      activeImg: "../..//assets/elements.png",
    },
    {
      label: "Products",
      path: "products",
      img: "../..//assets/list-unordered-2.png",
      activeImg: "../..//assets/list-unordered2.png",
    },
    {
      label: "Customers",
      path: "customers",
      img: "../..//assets/users.png",
      activeImg: "../..//assets/users-1.png",
    },
    {
      label: "Transactions",
      path: "transactions",
      img: "../..//assets/arrow-swap.png",
      activeImg: "..//assets/arrow-swap2.png",
    },
    {
      label: "Loans",
      path: "loans",
      img: "../..//assets/procent.png",
      activeImg: "../..//assets/percent.png",
    },
    {
      label: "Learn",
      path: "learn",
      img: "../..//assets/book-open.png",
      activeImg: "../..//assets/book-open2.png",
    },

    {
      label: "Analytics",
      path: "analytics",
      img: "../..//assets/chart-line.png",
      activeImg: "../..//assets/chartline2.png",
    },
    {
      label: "Team Management",
      path: "team-management",
      img: "../..//assets/user-square.png",
      activeImg: "../..//assets/user-square2.png",
    },
    {
      label: "Settings",
      path: "settings",
      img: "../..//assets/gear.png",
      activeImg: "../..//assets/gear (1).png",
    },
  ];

  //handles when the role options are toggled
  function handleSelectedOption(e) {
    if (e.target.innerText === "Log Out") {
      navigate("/");
    } else if (e.target.innerText === "Add Role") {
      navigate("/team-management/?section=roles");
    } else {
      setRole(e.target.innerText);
    }

    //closes the sidebar
    setOpen(false);
  }

  const navs = role == "Finance" ? finance : superAdmin;

  function getActiveClass(isActive) {
    let base = "flex my-10 gap-4 items-center text-sm ";
    let active = "bg-white border-l-[2px] border-[#0F8ECD] rounded-md p-3";
    let notActive = "";

    return base + (isActive ? active : notActive);
  }

  return (
    <div className="">
      <header className="relative bg-[#0F8ECD] px-4 py-[30px] flex justify-between items-center">
        <button
          className="flex outline-none border-none items-center gap-2 w-[10rem] bg-white p-2 rounded-sm"
          onClick={handleClick}
        >
          <div>
            <img src="../..//assets/Logo-blue.png" alt="logo" />
            <p className="mt-[5px] text-sm text-left">{role}</p>
          </div>
          <div>
            <img
              src="../..//assets/chevron-down.png"
              alt="dropdown"
              className="cursor-pointer"
            />
          </div>
        </button>

        {/* toggles the opening of the different roles */}
        {open && (
          <div className="absolute z-[10] mt-6 top-[5rem] bg-white left-[15px] p-4 rounded-md">
            {roles.map((role, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 px-4 text-sm list-none + ${textColor(
                  role
                )}`}
                onClick={(e) => handleSelectedOption(e)}
              >
                {role}
                {/* {role==="add "} */}
              </li>
            ))}
          </div>
        )}

        {/* //search */}
        <label className="flex items-center bg-white p-2 w-[21rem] rounded-lg">
          <img
            src="../..//assets/leadingIcon.png"
            alt="search"
            className=""
          />
          <input
            type="search"
            className="bg-transparent w-[100%] border-none outline-none pl-[4px]"
            placeholder="Search customers, assets, transactions..."
          />
        </label>

        {/* user initials */}
        <p
          className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          AP
        </p>
      </header>

      <div className="flex gap-8 h-screen overflow-hidden ">
        <aside className="relative overflow-y-scroll hide-scrollbar px-4 py-2 w-[20%]">
          {navs.map((nav, index) => (
            <NavLink key={index} to={nav.path}>
              {function ({ isActive }) {
                return (
                  <div key={index} className={getActiveClass(isActive)}>
                    <img src={isActive ? nav.activeImg : nav.img} alt="icon" />
                    <span>{nav.label}</span>
                  </div>
                );
              }}
            </NavLink>
          ))}
          <div className="absolute flex gap-4 text-sm bottom-[20px]">
            <img src="../..//assets/log-out.png" alt="log-out" />
            <Link to="/">Log Out</Link>
          </div>
        </aside>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
