import React, { useState } from "react";
import CustomerCategory from "../../components/for-customers/cusomers-category";
import CustomerTime from "../../components/for-customers/customers-time";
import CustomerStatus from "../../components/for-customers/customers-status";
import { shortenDescription } from "./transaction";
import { getStatusClass } from "./customers/customers";
import { useNavigate } from "react-router-dom";
export const courses = [
  {
    id: 1,
    course: "A Beginner's Guide to Investing",
    category: "Capital",
    learners: "1,391",
    rate: "76%",
    date: "Apr 10, 2025 12:32 PM",
    status: "Published",
    img: "/assets/image-course2.png",
  },

  {
    id: 2,
    course: "Understanding ETFs and Mutual Funds",
    category: "Asset Management",
    learners: "1,197",
    rate: "70%",
    date: "Apr 10, 2025 12:32 PM",
    status: "Published",
    img: "/assets/image-course2.png",
  },

  {
    id: 3,
    course: "Understanding Credit Scores",
    category: "Finance",
    learners: "3,098",
    rate: "90%",
    date: "Apr 10, 2025 12:32 PM",
    status: "Published",
    img: "/assets/image-course2.png",
  },

  {
    id: 4,
    course: "What are Mutual Funds?",
    category: "Finance",
    learners: "3,477",
    rate: "54%",
    date: "Apr 10, 2025 12:32 PM",
    status: "Published",
    img: "/assets/image-course2.png",
  },

  {
    id: 5,
    course: "Exchange-Traded Funds (ETFs)",
    category: "Capital",
    learners: "-",
    rate: "-",
    date: "Apr 10, 2025 12:32 PM",
    status: "Unlisted",
    img: "/assets/image-course2.png",
  },

  {
    id: 6,
    course: "Certificates of Deposit (CDs)",
    category: "Asset Management",
    learners: "2,963",
    rate: "59%",
    date: "Apr 10, 2025 12:32 PM",
    status: "Published",
    img: "/assets/image-course2.png",
  },
  {
    id: 7,
    course: "Taxation of Investments: All you need to know",
    category: "Capital",
    learners: "-",
    rate: "-",
    date: "Apr 10, 2025 12:32 PM",
    status: "Unlisted",
    img: "/assets/image-course2.png",
  },

  {
    id: 8,
    course: "Long-Term Investing Basics",
    category: "Capital",
    learners: "3,922",
    rate: "80%",
    date: "Apr 10, 2025 12:32 PM",
    status: "Published",
    img: "/assets/image-course2.png",
  },
];

function Learn() {
  let navigate = useNavigate();
  const [formOpen, setFormOpen] = useState(false);

  function closeForm() {
    setFormOpen(false);
  }
  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      {/* heading part */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl my-6 font-bold">Learn</h2>
        <button
          className="cursor-pointer bg-[#0F8ECD] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide"
          onClick={() => setFormOpen(true)}
        >
          <span>Add course</span>
          <img src="/assets/white-plus.png" alt="add" />
        </button>
      </div>

      <div className="flex gap-3">
        <label className="flex items-center bg-white p-2 w-[21rem] rounded-lg border border-gray-300">
          <img src="/assets/leadingIcon.png" alt="search" className="" />
          <input
            type="search"
            className="bg-transparent w-[100%] border-none outline-none pl-[4px]"
            placeholder="Search course titles..."
          />
        </label>

        <CustomerCategory />
        <CustomerStatus />
        <CustomerTime />
      </div>
      <table className="min-w-[100%] bg-white rounded-lg text-sm my-6 overflow-hidden">
        <thead className=" text-left text-gray-700">
          <tr>
            <th className="px-3 py-3 text-sm font-medium">Courses</th>
            <th className=" py-3 text-sm font-medium">Category</th>
            <th className="py-3 text-sm font-medium">Learners</th>
            <th className=" py-3 text-sm text-center font-medium">
              Completion Rate
            </th>
            <th className=" py-3 text-sm text-center font-medium">Date</th>
            <th className=" py-3 text-sm font-medium text-center">Status</th>
          </tr>
        </thead>
        {courses.map((t, index) => (
          <tbody key={index} className="text-gray-600 cursor-pointer">
            <tr
              className="border-t border-t-gray-300"
              onClick={() => navigate(`/learn/${t.id}`)}
            >
              <td className="text-[#0D0D0D] font-medium px-3 py-4">
                {shortenDescription(t.course, 23)}
              </td>
              <td className="font-medium py-4">{t.category}</td>
              <td className=" py-4">{t.learners}</td>

              <td className="text-center font-medium py-4">{t.rate}</td>
              <td className=" text-center py-4">{t.date}</td>
              <td className="text-center py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                    t.status
                  )}`}
                >
                  {t.status}
                </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="mt-4 mb-6 flex justify-between items-center">
        <p className="text-sm text-[#666666] ">Showing 8 of 8 </p>
        <div className="flex items-center">
          <p className="font-medium mr-4 text-sm">Page 1 of 1</p>
          <button className="bg-white mr-2 border-gray-300  cursor-pointer rounded-md p-3 outline-none">
            <img src="/assets/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="bg-white border-gray-300 rounded-md cursor-pointer p-3 outline-none">
            <img src="/assets/arrow-right.png" alt="arrow-left" />
          </button>
        </div>
      </div>

      {formOpen && (
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
              <span className="font-medium">Add Course</span>
              <img
                src="/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Course Title
            </label>
            <input
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              placeholder="Enter course title"
              name="state"
              id=""
            />
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Category
            </label>
            <select
              type="text"
              disabled="true"
              className="w-[100%] p-3 rounded-md border border-gray-300"
              placeholder="Select"
            ></select>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Description
            </label>
            <textarea
              className="w-[100%] border border-gray-200 rounded-lg py-2 h-[5rem] px-2 text-sm"
              placeholder="Enter course description"
            ></textarea>

            <hr className="my-6 border border-gray-200" />

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
    </div>
  );
}

export default Learn;
