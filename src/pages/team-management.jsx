import { React, useState, useEffect } from "react";
import Roles from "../../components/for team-management/role";
import Status from "../../components/for team-management/status";
import TwoFactor from "../../components/for team-management/2fa";
import LastLoggedIn from "../../components/for team-management/lastloggedin";
import { getStatusClass } from "./customers/customers";
import { shortenDescription } from "./transaction";
import TeamMgtRoles from "../../components/for team-management/for-team-management-roles";
import { useLocation } from "react-router-dom";

function TeamManagement() {
  const teamDetails = [
    {
      name: "Ademola Peters",
      role: "Super Admin",
      team: "All",
      status: "Active",
      twoFA: "Active",
      lastLogged: "Today",
      email: "ademola@lighthousecapital.ng",
    },

    {
      name: "Morounke Durojaiye",
      role: "Admin",
      team: "Capital",
      status: "Active",
      twoFA: "Disabled",
      lastLogged: "Today",
      email: "morounke@lighthousecapital.ng",
      img: "/assets/menu-horiz.png",
    },

    {
      name: "Timipre Bozimo",
      role: "Support",
      team: "Finance",
      status: "Active",
      twoFA: "Active",
      lastLogged: "Apr 9, 2025 8:15am",
      email: "timipre@lighthousecapital.ng",
      img: "/assets/menu-horiz.png",
    },

    {
      name: "Aisha Murtala",
      role: "Compliance",
      team: "Asset Management",
      status: "Active",
      twoFA: "Active",
      lastLogged: "Today",
      email: "aisha@lighthousecapital.ng",
      img: "/assets/menu-horiz.png",
    },

    {
      name: "Werinipre Ebikake",
      role: "Support",
      team: "Capital",
      status: "Inactive",
      twoFA: "Disabled",
      lastLogged: "Apr 6, 2025 9:15am",
      email: "werinipre@lighthousecapital.ng",
      img: "/assets/menu-horiz.png",
    },

    {
      name: "Adanma Okoro",
      role: "Compliance",
      team: "Finance",
      status: "Pending",
      twoFA: "-",
      lastLogged: "-",
      email: "adanma@lighthousecapital.ng",
      img: "/assets/menu-horiz.png",
    },
  ];

  // set selected member
  // const [selectedMember, setSelectedMember] = useState(null);
  const navs = ["Members", "Roles"];
  //   change navigation
  const [nav, setNav] = useState(navs[0]);
  // show more
  const [showMoreOption, setShowMoreOption] = useState(null);
  // for edit member
  const [edit, setEdit] = useState(false);
  // for add member
  const [addMember, setAddMember] = useState(false);
  // for deactivate user
  const [deactivateUser, setDeactivateUser] = useState(false);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");


  useEffect(() => {
    if (section === "roles") {
      setNav("Roles");
    }
  }, [section]);

  function showMoreFunc(index) {
    setShowMoreOption(showMoreOption === index ? null : index);
  }
  function editFormFunc() {
    setEdit(true);
    setShowMoreOption(null);
  }

  function closeForm() {
    setEdit(false);
    setAddMember(false);
    setDeactivateUser(false);
  }

  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      <h2 className="text-2xl my-6 font-bold">Team Management</h2>

      {/* nav */}
      <ul className="my-5 flex gap-4">
        {navs.map((n, index) => (
          <li
            key={index}
            className={`text-md cursor-pointer ${
              nav === n ? "underline decoration-2 underline-offset-5" : ""
            }`}
            onClick={() => setNav(n)}
          >
            {n}
          </li>
        ))}
      </ul>

      {nav === "Members" && (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 ">
              <label className="flex items-center bg-white p-2 w-[21rem] rounded-lg border border-gray-300">
                <img
                  src="/assets/leadingIcon.png"
                  alt="search"
                  className=""
                />
                <input
                  type="search"
                  className="bg-transparent w-[100%] border-none outline-none pl-[4px]"
                  placeholder="Search customers, assets, transactions..."
                />
              </label>
              <Roles />
              <Status />
              <TwoFactor />
              <LastLoggedIn />
            </div>

            <button className="cursor-pointer bg-[#630219] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide">
              <span onClick={() => setAddMember(true)}>Add Member</span>
              <img src="/assets/white-plus.png" alt="add" />
            </button>
          </div>

          <table className="relative min-w-full bg-white rounded-lg text-sm overflow-hidden p-8 mt-6">
            <thead className=" px-2 text-left text-gray-700">
              <tr>
                <th className="px-3 py-3 text-sm font-medium">Name</th>
                <th className=" py-3 text-sm font-medium">Role</th>
                <th className="py-3 text-sm font-medium">Team</th>
                <th className=" py-3 text-sm font-medium">Status</th>
                <th className=" py-3 text-sm font-medium">2FA</th>
                <th className=" py-3 text-sm font-medium">Last logged in</th>
                <th></th>
              </tr>
            </thead>

            {teamDetails.map((t, index) => (
              <tbody key={index} className="text-gray-600 cursor-pointer">
                <tr className="border-t border-t-gray-300">
                  <td className="flex flex-col mt-1 px-3 font-medium text-[#0D0D0D]">
                    <span>
                      {t.name}
                      {index === 0 && (
                        <span className="ml-2 rounded-full text-[#5925DC] bg-[#F4F3FF] py-1 px-2">
                          You
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-[#666666]">{t.email}</span>
                  </td>
                  <td className="py-4">{t.role}</td>
                  <td className=" py-4"> {t.team}</td>
                  <td className=" py-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                        t.status
                      )}`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className=" py-4">{t.twoFA}</td>
                  <td className=" py-4">
                    {shortenDescription(t.lastLogged, 15)}
                  </td>
                  <td>
                    <div className="relative">
                      <img
                        className={`${index === 0 ? "hidden" : "block"}`}
                        src={t.img}
                        alt="show more"
                        onClick={() => {
                          showMoreFunc(index);
                        }}
                      />

                      {showMoreOption === index && (
                        <>
                          <span className="bg-white border border-[#E5E5E5] rounded-md absolute w-[12rem] right-[50px] bottom-[0px] p-4 z-10">
                            <p className="mb-2" onClick={editFormFunc}>
                              Edit member role
                            </p>
                            <p
                              className="text-red-500"
                              onClick={() => setDeactivateUser(true)}
                            >
                              Deactivate member
                            </p>
                          </span>

                          {index === teamDetails.length - 1 && (
                            <span className="bg-white border border-[#E5E5E5] rounded-md absolute w-[12rem] right-[50px] bottom-[0px] p-4 z-50">
                              <p className="mb-2">Resend invite</p>
                              <p className="text-red-500">Delete</p>
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    {edit && (
                      <div
                        className="bg-black/20 fixed inset-0 flex justify-center items-center z-[20]"
                        onClick={closeForm}
                      >
                        <form
                          action=""
                          className="bg-white p-4 w-[25rem] rounded-lg"
                        >
                          <h2 className="flex justify-between items-center mb-4">
                            <span className="font-medium text-black text-lg">
                              Edit Member Role
                            </span>
                            <img
                              src="/assets/close-icon.png"
                              alt="close"
                              className="cursor-pointer"
                              onClick={closeForm}
                            />
                          </h2>

                          <label htmlFor="Full Name" className="block mb-2">
                            Full name
                          </label>
                          <input
                            type="text"
                            disabled
                            defaultValue={t.name}
                            className="w-[100%] p-2 border border-gray-300 rounded-md mb-2"
                          />

                          <label htmlFor="Full Name" className="block mb-2">
                            Email
                          </label>
                          <input
                            type="text"
                            disabled
                            defaultValue={t.email}
                            className="w-[100%] p-2 border border-gray-300 rounded-md mb-2"
                          />

                          <label htmlFor="Full Name" className="block mb-2">
                            Team
                          </label>
                          <select
                            disabled
                            className="w-[100%] p-2 border border-gray-300 rounded-md mb-2"
                          >
                            <option default value={t.team}>
                              {t.team}
                            </option>
                          </select>

                          <label htmlFor="Full Name" className="block mb-2">
                            Role
                          </label>
                          <select
                            disabled
                            className="w-[100%] p-2 border border-gray-300 rounded-md mb-2"
                          >
                            <option default value={t.role}>
                              {t.role}
                            </option>
                          </select>

                          <div
                            className="flex justify-between gap-2 "
                            onClick={closeForm}
                          >
                            <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                              Cancel
                            </button>
                            <button className="flex-1 py-2 text-white bg-[#630219] border-none rounded-md cursor-pointer">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          {/* add member form */}
          {addMember && (
            <div
              className="bg-black/20  fixed inset-0 flex justify-center items-center z-[20]"
              onClick={closeForm}
            >
              <form action="" className="bg-white p-4 w-[25rem] rounded-lg">
                <h2 className="flex justify-between items-center mb-4">
                  <span className="font-medium text-black text-lg">
                    Add Member
                  </span>
                  <img
                    src="/assets/close-icon.png"
                    alt="close"
                    className="cursor-pointer"
                    onClick={closeForm}
                  />
                </h2>

                <label htmlFor="Full Name" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="enter email here..."
                  disabled
                  className="w-[100%] p-2 border border-gray-300 rounded-md mb-2"
                />

                <label htmlFor="Full Name" className="block mb-2">
                  Team
                </label>
                <select
                  disabled
                  className="w-[100%] p-2 border border-gray-300 rounded-md mb-2"
                >
                  <option default value="Capital">
                    Capital
                  </option>
                </select>

                <label htmlFor="Full Name" className="block mb-2">
                  Role
                </label>
                <select
                  disabled
                  placeholder="Select"
                  className="w-[100%] p-2 border border-gray-300 rounded-md mb-2"
                ></select>

                <div
                  className="flex justify-between gap-2 mt-2"
                  onClick={closeForm}
                >
                  <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                    Cancel
                  </button>
                  <button className="flex-1 py-2 text-white bg-[#630219] border-none rounded-md cursor-pointer">
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* deactivate user warning */}
          {deactivateUser && (
            <div
              className="bg-black/20 fixed inset-0 flex justify-center items-center z-[20]"
              onClick={closeForm}
            >
              <div className="bg-white px-4 py-8 w-[35%] rounded-md">
                <h2 className="flex justify-between items-center mb-4">
                  <span className="font-medium text-black text-lg">
                    Deactivate member
                  </span>
                  <img
                    src="/assets/close-icon.png"
                    alt="close"
                    className="cursor-pointer"
                    onClick={closeForm}
                  />
                </h2>

                <p className="my-4">
                  This member will be restricted from accessing this dashboard.
                  Are you sure you want to proceed?
                </p>

                <div
                  className="flex justify-between gap-2 mt-2"
                  onClick={closeForm}
                >
                  <button className="flex-1 py-3 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                    Cancel
                  </button>
                  <button className="flex-1 py-3 text-white bg-[#914c4e] border-none rounded-md cursor-pointer">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="mt-4 mb-6 flex justify-between items-center">
            <p className="text-sm text-[#666666] ">Showing 6 of 6 </p>
            <div className="flex items-center">
              <p className="font-medium mr-4 text-sm">Page 1 of 1`</p>
              <button className="bg-white mr-2 border-gray-300  cursor-pointer rounded-md p-3 outline-none">
                <img src="/assets/arrow-left.png" alt="arrow-left" />
              </button>
              <button className="bg-white border-gray-300 rounded-md cursor-pointer p-3 outline-none">
                <img src="/assets/arrow-right.png" alt="arrow-left" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* nav for roles */}
      {nav === "Roles" && <TeamMgtRoles />}
    </div>
  );
}

export default TeamManagement;
