import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "./learn";
import { useNavigate } from "react-router-dom";
import { getStatusClass } from "./customers/customers";

export const lessons = [
  {
    id: 1,
    topic: "Understanding Investing",
    rate: "99%",
    date: "Apr 10, 2025 12:32 PM",
  },
  {
    id: 2,
    topic: "Types of Investments",
    rate: "70%",
    date: "Apr 10, 2025 12:32 PM",
  },

  {
    id: 3,
    topic: "Investment Strategies",
    rate: "90%",
    date: "Apr 10, 2025 12:36 PM",
  },
  {
    id: 4,
    topic: "Commonn Investing Mistakes",
    rate: "40%",
    date: "Apr 10, 2025 12:42 PM",
  },
];

function LearnDetails() {
  const [openEdit, setOpenEdit] = useState(false);
  const [addLesson, setAddLesson] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  let navigate = useNavigate();
  const { id } = useParams();

  let selectedCourse = courses.find((c) => {
    return c.id === Number(id);
  });

  // handlegoingback
  function handleGoBack() {
    navigate(-1);
  }
  return (
    <div className="w-[100%] px-5 overflow-y-scroll hide-scrollbar">
      <div className="relative flex justify-between gap-2 mt-6 mb-4 items-center">
        <div className="flex items-center gap-2">
          <div
            className=" w-[35px] h-[35px] bg-white p-2 rounded-md cursor-pointer"
            onClick={handleGoBack}
          >
            <img src="/assets/arrow-left-button.png" alt="" />
          </div>
          <div className="w-[100%] flex items-center justify-between gap-3">
            <div className="flex-1 flex gap-3">
              <p className="flex flex-col text-xl font-medium">
                {`${selectedCourse.course}`}
                <span className="text-xs text-[#666666]">
                  {selectedCourse.date}
                </span>
              </p>
              <p
                className={`text-sm p-2 rounded-2xl ${getStatusClass(
                  selectedCourse.status
                )}`}
              >
                {selectedCourse.status}
              </p>
            </div>
          </div>
        </div>
        <button
          className={`cursor-pointer border-none rounded-lg p-3  text-white ${
            selectedCourse.status === "Unlisted"
              ? "bg-[#0F8ECD]"
              : "bg-[#E94A3F]"
          }`}
          onClick={() => setConfirmDelete(true)}
        >
          {selectedCourse.status === "Unlisted" ? "Publish" : "Unlist"}
        </button>
      </div>
      {/* grid */}
      <div className="grid grid-cols-[1fr_1fr] gap-4">
        {/* 1 */}
        <div className="bg-white p-2 rounded-md">
          <div className="flex justify-between">
            <h3 className="font-bold">Details</h3>
            <span
              className="flex gap-2 cursor-pointer"
              onClick={() => setOpenEdit(true)}
            >
              <p className="text-sm text-[#0F8ECD] items-center">Edit</p>
              <img
                src="/assets/edit-3.png"
                className="w-[20px] h-[20px]"
                alt="edit"
              />
            </span>
          </div>

          <p className="mt-4 text-sm text-[#666666]">
            Course Title
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCourse.course}
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Description
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCourse.status === "Unlisted"
                ? "-"
                : "Complete the topics to earn your learning badge"}
            </span>
          </p>

          <div className="flex">
            <p className="flex-1 mt-4 text-sm text-[#666666]">
              Learners
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedCourse.learners}
              </span>
            </p>

            <p className="flex-1 mt-4 text-sm text-[#666666]">
              Date
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedCourse.date}
              </span>
            </p>
          </div>

          <div className="flex">
            <p className="flex-1 mt-4 text-sm text-[#666666]">
              Completion Rate
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedCourse.rate}
              </span>
            </p>

            <p className="flex-1 mt-4 text-sm text-[#666666]">
              Category
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedCourse.category}
              </span>
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white p-2 rounded-md">
          <div className="flex justify-between">
            <h3 className="font-bold">Course Thumbnail</h3>
            <span className="flex gap-2 cursor-pointer">
              <p className="text-sm text-[#0F8ECD] items-center">
                Change photo
              </p>
              <img
                src="/assets/edit-3.png"
                className="w-[20px] h-[20px]"
                alt="edit"
              />
            </span>
          </div>

          <div>
            <img
              src={
                selectedCourse.status === "Unlisted"
                  ? "/assets/blacklist.png"
                  : selectedCourse.img
              }
              alt="course thumbnail"
              className="p-2 my-2"
            />
          </div>
        </div>
      </div>

      {/* lessons */}
      <div className="bg-white w-[100%] mt-3 rounded-md p-4">
        <div className="flex justify-between">
          <h3 className="font-bold">Lessons</h3>
          <span
            className="flex gap-2 cursor-pointer"
            onClick={() => setAddLesson(true)}
          >
            <p className="text-sm text-[#0F8ECD] items-center">Add lessons</p>
            <img
              src="/assets/plus-blue.png"
              alt="add"
              className="w-[20px] h-[20px]"
            />
          </span>
        </div>

        {selectedCourse.status === "Unlisted" ? (
          <div className="w-[100%] flex items-center justify-center h-[10rem] text-[#666666]">
            Lesson that you add will appear here.
          </div>
        ) : (
          <table className="min-w-[100%] bg-white rounded-lg text-sm my-6 overflow-hidden">
            <thead className=" text-left text-gray-700">
              <tr className="border-l border-l-gray-300 border-r border-r-gray-300 border-t rounded-md border-t-gray-300">
                <th className="px-3 py-3 text-sm font-medium">Topic</th>
                <th className=" py-3 text-sm font-medium">Completion Rate</th>
                <th className="py-3 text-sm font-medium">Date</th>
              </tr>
            </thead>
            {lessons.map((t, index) => (
              <tbody key={index} className="text-gray-600 cursor-pointer">
                <tr
                  className="border-t border-l border-l-gray-300 border-r border-r-gray-300 border-b border-b-gray-300 border-t-gray-300"
                  onClick={() => navigate(`details/${t.id}`)}
                >
                  <td className="text-[#0D0D0D] font-medium px-3 py-4">
                    {t.topic}
                  </td>
                  <td className="font-medium py-4">{t.rate}</td>
                  <td className=" py-4">{t.date}</td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>

      {/* edit form */}
      {openEdit && (
        <div
          className="bg-[rgba(243,244,246,0.5)] fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setOpenEdit(false)}
        >
          <form
            action=""
            className="bg-white p-4 w-[25rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Edit Course</span>
              <img
                src="/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setOpenEdit(false)}
              />
            </h2>
            <label htmlFor="" className="block text-sm my-2">
              Course Title
            </label>
            <input
              type="text"
              defaultValue={selectedCourse.course}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <label htmlFor="" className="block text-sm my-2">
              Category
            </label>
            <input
              type="text"
              defaultValue={selectedCourse.category}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <label htmlFor="" className="block text-sm my-2">
              Description
            </label>
            <textarea
              defaultValue="Complete the topics to earn your learning badge"
              className="w-[100%] p-3 rounded-md border border-gray-300 h-[5rem]"
            ></textarea>

            <hr className="my-6 border border-gray-200" />

            <div
              className="flex justify-between gap-2 "
              onClick={() => setOpenEdit(false)}
            >
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

      {/* add lesson */}
      {addLesson && (
        <div
          className="bg-[rgba(243,244,246,0.5)] fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setAddLesson(false)}
        >
          <form
            action=""
            className="bg-white p-4 w-[25rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Edit Course</span>
              <img
                src="/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setAddLesson(false)}
              />
            </h2>
            <label htmlFor="" className="block text-sm my-2">
              Topic
            </label>
            <input
              type="text"
              placeholder="Enter lesson title"
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <label htmlFor="" className="block text-sm my-2">
              Description
            </label>
            <textarea
              placeholder="Enter lesson description"
              className="w-[100%] p-3 rounded-md border border-gray-300 h-[5rem]"
            ></textarea>

            <hr className="my-6 border border-gray-200" />

            <div
              className="flex justify-between gap-2 "
              onClick={() => setOpenEdit(false)}
            >
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

      {confirmDelete && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setConfirmDelete(false)}
        >
          <div className="bg-white p-4 rounded-md w-[32rem]">
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-bold">Unlist Course</span>
              <img
                src="/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setConfirmDelete(false)}
              />
            </h2>
            <p>
              {selectedCourse.status === "Unlisted"
                ? "Are you sure you want to publish this course? This course will be made available to all customers immediately."
                : "Are you sure you want to delete this lesson? Customers will not be able to view this lesson again. This action cannot be undone."}
            </p>

            <div
              className="flex justify-between gap-2 mt-6"
              onClick={() => navigate(-1)}
            >
              <button className="flex-1 py-3 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button
                className={`flex-1 py-3 text-white border-none rounded-md cursor-pointer ${
                  selectedCourse.status === "Unlisted"
                    ? "bg-[#0F8ECD]"
                    : "bg-[#E94A3F]"
                }`}
              >
                {selectedCourse.status === "Unlisted"
                  ? "Publish Course"
                  : "Unlist Course"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LearnDetails;
