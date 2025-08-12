import { React } from "react";
import SelectMenu from "../selectMenu";
import GridBody from "./gridBody";

function Dashboard() {


  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl my-6 font-bold">Dashboard</h2>
        <div>
          <SelectMenu />
        </div>
      </div>

      <div className="flex justify-between gap-4">
        {/* 1 */}
        <div className="flex items-center gap-4  bg-white p-4 rounded-xl w-[25%]">
          <img src="./src/assets/icon-blue.png" alt="icon" />
          <div>
            <span className="text-md">Total Revenue</span>
            <p className="text-xl font-bold mt-2 text-[#666666]">
              ₦343, 209, 329.55
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className=" bg-white flex items-center gap-4 p-4 rounded-xl w-[25%]">
          <img src="./src/assets/Icon (1).png" alt="icon" />
          <div>
            <span className="text-md">Total Transactions</span>
            <p className="text-xl font-bold mt-2 text-[#666666]">8,421</p>
          </div>
        </div>

        {/* 3*/}
        <div className=" bg-white flex items-center gap-4 p-4 rounded-xl w-[25%]">
          <img src="./src/assets/server-iconn.png" alt="icon" />
          <div>
            <span className="text-md">Assets Managed</span>
            <p className="text-xl font-bold mt-2 text-[#666666]">1,329</p>
          </div>
        </div>

        {/* 4 */}
        <div className=" bg-white flex items-center gap-4 p-4 rounded-xl w-[25%]">
          <img src="./src/assets/open-book.png" alt="icon" />
          <div>
            <span className="text-md">Learning Completion %</span>
            <p className="text-xl font-bold mt-2 text-[#666666]">74%</p>
          </div>
        </div>
      </div>

      <GridBody/>
      {/* <StatFinance /> */}
    </div>
  );
}

export default Dashboard;
