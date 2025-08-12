import React from 'react';
import { useState } from 'react';

function CustomerCategory() {
  const category = ["Finance House", "Capital", "Assets Management"];

  //states to control time
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(category[0]);
  const [showSelected, setShowSelected] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleSelected(t) {
    setSelectedTime(t);
    setShowSelected(true)
  }

    function handleClear() {
    setSelectedTime("");
    setShowSelected(false)
  }
  return (
        <div className="relative bg-white p-2 text-xs rounded-lg cursor-pointer flex items-center gap-2"
             onClick={handleClick}
        >
          <p>Category</p>
          <img
            src="./src/assets/plus-rec.png"
            className="w-[15px] h-[15px]"
            alt="add"
          />
          {showSelected && (
          <div className=" flex items-center gap-2 ">
            <span className="text-[#F2F2F2]">|</span>
            <span className="bg-[#F2F2F2] p-1 rounded-4xl">{selectedTime}</span>
          </div>
          )}

          {isOpen && (
            <div className="absolute w-[10rem] top-[45px]  bg-white p-2 text-sm">
              {category.map((t, index) => (
                <li className="list-none p-1"key={index} onClick={()=> handleSelected(t)}>{t}</li>
              ))}
              <hr className="my-1" />
              <p className="text-center p-1" onClick={handleClear}>Clear Filter</p>
            </div>
          )}
        </div>


  );
}

export default CustomerCategory;