import { React, useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RoleContext } from "./roleContext";
import { roles } from "./roleContext";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../assets/dashboard-1.svg?react";
import ProductIcon from "../assets/products.svg?react";
import CustomersIcon from "../assets/users.svg?react";
import TransactionIcons from "../assets/transaction.svg?react";
import AnalyticsIcon from "../assets/analytics.svg?react";
import TeamMgtIcon from "../assets/teammgt.svg?react";
import SettingsIcon from "../assets/settings.svg?react";
import LoansIcon from "../assets/loans.svg?react";
import LearnIcon from "../assets/learn.svg?react";

//for font-color
function textColor(role) {
  if (role === "Log Out") {
    return "text-red-500";
  } else if (role === "Add Role") {
    return "text-[#630219]";
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
      img: "/assets/elements-1.png",
      activeImg: DashboardIcon,
    },
    {
      label: "Products",
      path: "products",
      img: "/assets/list-unordered-2.png",
      activeImg: ProductIcon,
    },
    {
      label: "Customers",
      path: "customers",
      img: "/assets/users.png",
      activeImg: CustomersIcon,
    },
    {
      label: "Transactions",
      path: "transactions",
      img: "/assets/arrow-swap.png",
      activeImg: TransactionIcons,
    },
    {
      label: "Analytics",
      path: "analytics",
      img: "/assets/procent.png",
      activeImg: AnalyticsIcon,
    },
    {
      label: "Team Management",
      path: "team-management",
      img: "/assets/user-square.png",
      activeImg: TeamMgtIcon,
    },
    {
      label: "Settings",
      path: "settings",
      img: "/assets/gear.png",
      activeImg: SettingsIcon,
    },
  ];

  const superAdmin = [
    {
      label: "Dashboard",
      path: "dashboard",
      img: "/assets/elements-1.png",
      activeImg: DashboardIcon,
    },
    {
      label: "Products",
      path: "products",
      img: "/assets/list-unordered-2.png",
      activeImg: ProductIcon,
    },
    {
      label: "Customers",
      path: "customers",
      img: "/assets/users.png",
      activeImg: CustomersIcon,
    },
    {
      label: "Transactions",
      path: "transactions",
      img: "/assets/arrow-swap.png",
      activeImg: TransactionIcons,
    },
    {
      label: "Loans",
      path: "loans",
      img: "/assets/procent.png",
      activeImg: LoansIcon,
    },
    {
      label: "Learn",
      path: "learn",
      img: "/assets/book-open.png",
      activeImg: LearnIcon,
    },

    {
      label: "Analytics",
      path: "analytics",
      img: "/assets/chart-line.png",
      activeImg: AnalyticsIcon,
    },
    {
      label: "Team Management",
      path: "team-management",
      img: "/assets/user-square.png",
      activeImg: TeamMgtIcon,
    },
    {
      label: "Settings",
      path: "settings",
      img: "/assets/gear.png",
      activeImg: SettingsIcon,
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
    let active = "bg-white border-l-[2px] border-[#630219] rounded-md p-3";
    let notActive = "";

    return base + (isActive ? active : notActive);
  }

  return (
    <div className="">
      <header className="relative bg-[#630219] px-4 py-[30px] flex justify-between items-center">
        <button
          className="flex outline-none border-none items-center gap-2 w-[10rem] bg-white p-2 rounded-sm"
          onClick={handleClick}
        >
          <div className="">
            <h2 alt="Logo" className=" text-lg text-[#630219]">
              GrowMonie
            </h2>
            <p className="mt-[5px] text-sm text-left">{role}</p>
          </div>
          <div>
            <img
              src="/assets/chevron-down.png"
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
          <img src="/assets/leadingIcon.png" alt="search" className="" />
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
                    {isActive ? (
                      <nav.activeImg
                        className=""
                        style={{ fill: "#630219", color: "#630219" }}
                      />
                    ) : (
                      <img src={nav.img} alt="icon" />
                    )}
                    <span>{nav.label}</span>
                  </div>
                );
              }}
            </NavLink>
          ))}
          <div className="absolute flex gap-4 text-sm bottom-[20px]">
            <img src="/assets/log-out.png" alt="log-out" />
            <Link to="/">Log Out</Link>
          </div>
        </aside>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
