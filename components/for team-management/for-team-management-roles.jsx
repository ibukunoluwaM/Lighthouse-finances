import React, { useState, useEffect } from "react";
import CustomerTime from "../for-customers/customers-time";
import { getStatusClass } from "@/pages/customers/customers";
import { shortenDescription } from "@/pages/transaction";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const roles = [
  {
    role: "Technical",
    desc: "Technical assistance and support to users and resolve technical issues.",
    members: 4,
    status: "Active",
    created: "Mar 9, 2025 8:14 AM",
  },

  {
    role: "Admin",
    desc: "Administrative support to the team, manage operations, and perform tasks as assigned.",
    members: 2,
    status: "Active",
    created: "Mar 5, 2025 5:54 PM",
  },

  {
    role: "Support",
    desc: "Effective support to customers, resolving their queries and issues in a timely manner.",
    members: 3,
    status: "Active",
    created: "Mar 5, 2025 4:14 PM",
  },

  {
    role: "Compliance",
    desc: "Ensure that the team complies with relevant laws, regulations, and industry standards.",
    members: 5,
    status: "Inactive",
    created: "Feb 9, 2025 8:14 AM",
  },

  {
    role: "Super Admin",
    desc: "Oversee and manage the entire team management dashboard, including technical, support, compliance, and admin functions.",
    members: 1,
    status: "Active",
    created: "Feb 9, 2025 8:10 AM",
  },
];

function TeamMgtRoles() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");

  const [addRole, setAddRole] = useState(false);

  useEffect(() => {
    if (section === "roles") {
      setAddRole(true);
      console.log("go outtt");
    }
  }, [section]);
  // close add add role form
  function closeForm() {
    setAddRole(false);
  }

  return (
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
          <CustomerTime />
        </div>
        <button className="cursor-pointer bg-[#0F8ECD] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide">
          <span onClick={() => setAddRole(true)}>Add Role</span>
          <img src="/assets/white-plus.png" alt="add" />
        </button>
      </div>

      <table className="mt-6 min-w-full bg-white rounded-lg text-sm overflow-hidden p-8">
        <thead className=" px-2 text-left text-gray-700">
          <tr>
            <th className="px-3 py-3 text-sm font-medium w-[15%]">Role</th>
            <th className=" py-3 text-sm font-medium w-[40%]">Description</th>
            <th className="py-3 text-sm font-medium w-[10%]">Members</th>
            <th className=" py-3 text-sm font-medium w-[10%]">Status</th>
            <th className=" py-3 text-sm font-medium w-[20%]">Created</th>
            <th className=" py-3 text-sm font-medium w-[5%]"></th>
          </tr>
        </thead>
        {roles.map((t, index) => (
          <tbody key={index} className="text-gray-600 cursor-pointer">
            <tr className="border-t border-t-gray-300">
              <td className="px-4 font-medium text-[#0D0D0D]">{t.role}</td>
              <td className="py-4">{shortenDescription(t.desc, 46)}</td>
              <td className=" py-4">{t.members}</td>
              <td className=" py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                    t.status
                  )}`}
                >
                  {t.status}
                </span>
              </td>
              <td className=" py-4">{t.created}</td>
              <td className=" py-4"></td>
            </tr>
            {/* Repeat rows here */}
          </tbody>
        ))}
      </table>

      {/* add role form */}
      {addRole && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >
          <form
            action=""
            className="bg-white p-4 w-[25rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Add Role</span>
              <img
                src="/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Title
            </label>
            <input
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              placeholder="Enter role title"
              name="state"
            />
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Description
            </label>
            <textarea
              type="text"
              className="border pl-2 rounded-lg border-gray-300 h-[5rem] w-[100%]"
              placeholder="Enter description"
            ></textarea>
            {/* permissions */}
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Permissions
            </label>

            {/* 1 */}
            <div className="flex justify-between items-center text-sm my-4">
              <label htmlFor="" className="font-medium">
                Dashboard
              </label>
              <div className="flex gap-3">
                <span className="flex">
                  <input
                    checked={true}
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Read</p>
                </span>

                <span className="flex">
                  <input
                    checked={true}
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Write</p>
                </span>
              </div>
            </div>

            {/* 2 */}
            <div className="flex justify-between items-center text-sm my-4">
              <label htmlFor="" className="font-medium">
                Customers
              </label>
              <div className="flex gap-3">
                <span className="flex">
                  <input
                    type="checkbox"
                    checked={true}
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Read</p>
                </span>

                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Write</p>
                </span>
              </div>
            </div>

            {/* 3 */}
            <div className="flex justify-between items-center text-sm my-4">
              <label htmlFor="" className="font-medium">
                Transactions
              </label>
              <div className="flex gap-3">
                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Read</p>
                </span>

                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Write</p>
                </span>
              </div>
            </div>

            {/* 4 */}

            <div className="flex justify-between items-center text-sm my-4">
              <label htmlFor="" className="font-medium">
                Loans
              </label>
              <div className="flex gap-3">
                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Read</p>
                </span>

                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Write</p>
                </span>
              </div>
            </div>

            {/* 5 */}
            <div className="flex justify-between items-center text-sm my-4">
              <label htmlFor="" className="font-medium">
                Learn
              </label>
              <div className="flex gap-3">
                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Read</p>
                </span>

                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Write</p>
                </span>
              </div>
            </div>

            {/* 6 */}
            <div className="flex justify-between items-center text-sm my-4">
              <label htmlFor="" className="font-medium">
                Analytics
              </label>
              <div className="flex gap-3">
                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Read</p>
                </span>

                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Write</p>
                </span>
              </div>
            </div>

            {/* 7 */}
            <div className="flex justify-between items-center text-sm my-4">
              <label htmlFor="" className="font-medium">
                Team Management
              </label>
              <div className="flex gap-3">
                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Read</p>
                </span>

                <span className="flex">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-black h-4 w-4 mr-1"
                  />
                  <p>Write</p>
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-2 " onClick={closeForm}>
              <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="flex-1 py-2 text-white bg-[#0F8ECD] border-none rounded-md cursor-pointer">
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-4 mb-6 flex justify-between items-center">
        <p className="text-sm text-[#666666] ">Showing 5 of 5 </p>
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
  );
}

export default TeamMgtRoles;
