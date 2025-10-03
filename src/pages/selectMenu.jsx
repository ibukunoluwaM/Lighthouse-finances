import { React, useContext, useState } from "react";
import { StatContext } from "./dashboard/statContext";
import { stats } from "./dashboard/statContext";
import { RoleContext } from "./roleContext";

export default function Example() {
  //roles
  const { role } = useContext(RoleContext);

  // const stats = ["All Stats", "Finance", "Capital", "Assets Management"];
  const time = ["All time", "Today", "This week", "This month", "This year"];
  // for stats

  const [statIsOpen, setStatIsOpen] = useState(false);
  const { statistics, setStatistics } = useContext(StatContext);

  // const [selected, setSelected] = useState(stats[0]);

  //for time
  const [timeIsOpen, setTimeIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(time[0]);

  //handle clicking of button to open modal for stats
  function handleClick() {
    setStatIsOpen(!statIsOpen);
  }
  function handleSelect(option) {
    setStatistics(option);
    setStatIsOpen(false);
  }

  //handle clicking of button to open modal for time
  function handleClickForTime() {
    setTimeIsOpen(!timeIsOpen);
  }

  function handleSelectForTime(option) {
    setSelectedTime(option);
    setTimeIsOpen(false);
  }

  return (
    <div className="flex gap-4 ">
      {/* for stats selection */}
      <div className="relative">
        {/* design buttons */}
        <button
          onClick={handleClick}
          className="flex items-center py-2 px-4 gap-2 rounded-lg bg-[#6302191A] border-none cursor-pointer"
        >
          <span className="text-[#630219]">{statistics}</span>
          <img src="/assets/chevron-down (1).png" alt="icon" />
        </button>

        {statIsOpen && (
          <div className="absolute mt-6 top-[18px] bg-white left-[-30px] p-4">
            {stats.map((stat, index) => (
              <li
                key={index}
                onClick={() => handleSelect(stat)}
                className={`flex justify-between text-xs list-none mb-3 cursor-pointer ${
                  statistics === stat ? "text-[#630219]" : "text-black"
                }`}
              >
                <span> {stat}</span>
                {statistics === stat && (
                  <img src="/assets/check-circle-2.png" alt="icon" />
                )}
              </li>
            ))}
          </div>
        )}
      </div>

      {/* for time selection */}
      {role === "Super Admin" && (
        <div className="relative">
          <button
            onClick={handleClickForTime}
            className="flex items-center py-2 px-4 gap-2 rounded-lg bg-[#6302191A] border-none cursor-pointer"
          >
            <span className="text-[#630219]">{selectedTime}</span>
            <img src="/assets/chevron-down (1).png" alt="icon" />
          </button>

          {timeIsOpen && (
            <div className="absolute mt-6 top-[18px] bg-white left-[-20px] p-4 ml-4">
              {time.map((t, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectForTime(t)}
                  className={`flex justify-between text-xs list-none mb-3 cursor-pointer
                   ${selectedTime === t ? "text-[#630219]" : "text-black"}`}
                >
                  <span className="mr-2"> {t}</span>
                  {selectedTime === t && (
                    <img src="/assets/check-circle-2.png" alt="icon" />
                  )}
                </li>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
