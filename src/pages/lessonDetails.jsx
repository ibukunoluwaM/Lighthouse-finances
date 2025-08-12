import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { lessons } from "./learnDetails";
import { useNavigate } from "react-router-dom";
function LessonDetails() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [editForm, setEditForm] = useState(false);
  const [addLesson, setAddLesson] = useState(false);
  const [startUpload, setStartUpload] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);

  let selectedLesson = lessons.find((c) => {
    return c.id === Number(id);
  });

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
            <img src="../../../src/assets/arrow-left-button.png" alt="" />
          </div>
          <div className="w-[100%] flex items-center justify-between gap-3">
            <div className="flex-1 flex gap-3">
              <p className="flex flex-col text-xl font-medium">
                {`${selectedLesson.topic}`}
                <span className="text-xs text-[#666666]">
                  {selectedLesson.date}
                </span>
              </p>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer border-none rounded-lg p-3 bg-[#E94A3F] text-white"
          onClick={() => setConfirmDelete(true)}
        >
          Delete
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
              onClick={() => setEditForm(true)}
            >
              <p className="text-sm text-[#0F8ECD] items-center">Edit</p>
              <img
                src="../../../src/assets/edit-3.png"
                className="w-[20px] h-[20px]"
                alt="edit"
              />
            </span>
          </div>

          <p className="mt-4 text-sm text-[#666666]">
            Topic
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedLesson.topic}
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Description
            <span className="block mt-1 text-[#0D0D0D]">
              Are you a beginner looking to invest but don’t know where to
              start? This is a good place to start.{" "}
            </span>
          </p>

          <div className="flex">
            <p className="flex-1 mt-4 text-sm text-[#666666]">
              Course Title
              <span className="block mt-1 text-[#666666]">
                A Beginner's Guide to Investing
              </span>
            </p>
          </div>

          <div className="flex">
            <p className="flex-1 mt-4 text-sm text-[#666666]">
              Completion Rate
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedLesson.rate}
              </span>
            </p>

            <p className="flex-1 mt-4 text-sm text-[#666666]">
              Date
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedLesson.date}
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
                src="../../../src/assets/edit-3.png"
                className="w-[20px] h-[20px]"
                alt="edit"
              />
            </span>
          </div>

          <div>
            <img
              src="../../../src/assets/image-course.png"
              alt="course thumbnail"
              className="p-2 my-2"
            />
          </div>
        </div>
      </div>

      <div className="bg-white w-[100%] mt-3 rounded-md p-4">
        <div className="flex justify-between">
          <h3 className="font-bold">Content</h3>
          <span
            className="flex gap-2 cursor-pointer"
            onClick={() => setAddLesson(true)}
          >
            <p className="text-sm text-[#0F8ECD] items-center">Add section</p>
            <img
              src="../../../src/assets/plus-blue.png"
              alt="add"
              className="w-[20px] h-[20px]"
            />
          </span>
        </div>
        {/* VIDEO URL */}
        <div className="flex items-center gap-2">
          <p className="flex-1 text-sm my-2">
            Video URL
            <span className="mt-2 border border-gray-300 block w-[100%] p-3 rounded-md">
              https://youtu.be/YBzT_mzGl9Q
            </span>
          </p>

          <p className="text-red-500 cursor-pointer">Remove</p>
        </div>

        {/* image */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <p className="text-sm my-2">Image</p>
            <div className="flex mt-2 text-sm border border-gray-300 w-[33rem] rounded-md p-2">
              <p className="w-[75%]">
                File size should not be more than 5MB. Supported formats: jpg,
                jpeg, png
              </p>
              <p
                className=" text-[#0F8ECD] bg-[rgba(15,142,205,0.1)] text-xs flex items-center p-1 rounded-full cursor-pointer"
                onClick={() => setStartUpload(false)}
              >
                {startUpload && "Upload photo"}
              </p>
            </div>
          </div>

          <p className="text-red-500 cursor-pointer">Remove</p>
        </div>

        {/* text area */}
        <div className="my-4 text-sm">
          <p className="mb-2">Textarea</p>
          <div className="flex gap-2 items-center">
            <div className="flex-1 border border-gray-300 p-2 rounded-md items-center">
              <div className="mb-5">
                <p className="my-2 font-bold">1. What is investing?</p>
                <p className="my-2">
                  Investing is the act of putting money into assets that have a
                  potential for growth, income, or both.
                </p>
              </div>

              <div className="mt-6">
                <p className="my-2 font-bold">2. Why invest?</p>
                <p className="my-2">
                  Investing helps you grow your wealth over time, achieve
                  financial goals, and build wealth for the future.
                </p>
              </div>
            </div>
            <p className="text-red-500 cursor-pointer">Remove</p>
          </div>
          <div className="w-[100%] flex justify-end">
            <button className="cursor-pointer my-3 p-3 rounded-md border-none text-white bg-[#0F8ECD]">
              Save
            </button>
          </div>
        </div>
      </div>

      {editForm && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setEditForm(false)}
        >
          <form
            action=""
            className="bg-white p-4 w-[25rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Edit Course</span>
              <img
                src="../../../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setEditForm(false)}
              />
            </h2>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Topic
            </label>
            <input
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              defaultValue={selectedLesson.topic}
              name="state"
              id=""
            />

            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Description
            </label>
            <textarea
              className="w-[100%] border border-gray-200 rounded-lg py-2 h-[5rem] px-2 text-sm"
              defaultValue="Are you a beginner looking to invest but don’t know where to start? This is a good place to start."
            ></textarea>

            <hr className="my-6 border border-gray-200" />

            <div
              className="flex justify-between gap-2 "
              onClick={() => setEditForm(false)}
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

      {addLesson && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setAddLesson(false)}
        >
          <div
            className="bg-white p-4 w-[25rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Add Lesson Section</span>
              <img
                src="../../../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setAddLesson(false)}
              />
            </h2>
            <div
              className="mt-3 bg-[#F2F2F2] p-3 rounded-md flex items-center"
              onClick={() => setAddLesson(false)}
            >
              <p className="flex-1">Text Area</p>
              <img src="../../../src/assets/lefttt.png" alt="more" />
            </div>

            <div
              className="mt-3 bg-[#F2F2F2] p-3 rounded-md flex items-center"
              onClick={() => setAddLesson(false)}
            >
              <p className="flex-1">Video URL</p>
              <img src="../../../src/assets/lefttt.png" alt="more" />
            </div>

            <div
              className="mt-3 bg-[#F2F2F2] p-3 rounded-md flex items-center"
              onClick={() => setAddLesson(false)}
            >
              <p className="flex-1">Image</p>
              <img src="../../../src/assets/lefttt.png" alt="more" />
            </div>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setConfirmDelete(false)}
        >
          <div className="bg-white p-4 rounded-md w-[32rem]">
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-bold">Delete Course</span>
              <img
                src="../../../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setConfirmDelete(false)}
              />
            </h2>

            <p>
              Are you sure you want to delete this lesson? Customers will not be
              able to view this lesson again. This action cannot be undone.
            </p>

            <div
              className="flex justify-between gap-2 mt-6"
              onClick={() => navigate(-1)}
            >
              <button className="flex-1 py-3 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="flex-1 py-3 text-white bg-[#E94A3F] border-none rounded-md cursor-pointer">
                Delete Lesson
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}

export default LessonDetails;
