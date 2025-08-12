import React from "react";
import CustomerTime from "../../components/for-customers/customers-time";
import CustomerCategory from "../../components/for-customers/cusomers-category";
import CustomerType from "../../components/for-customers/customers-type";
import CustomerStatus from "../../components/for-customers/customers-status";
import StatCapital from "./dashboard/stat-capital";

function Analytics() {
  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl my-6 font-bold">Analytics</h2>
        <button className="cursor-pointer bg-[#0F8ECD] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide">
          <span>Export</span>
          <img src="/assets/white-plus.png" alt="add" />
        </button>
      </div>

      <div className="flex gap-5 mb-4">
        <CustomerTime />
        <CustomerCategory />
        <CustomerType />
        <CustomerStatus />
      </div>

      <div className=" mt-6 grid grid-cols-[1fr_1fr] gap-6 items-start">
        {/* revenue */}
        <div className="bg-white rounded-lg p-2">
          <div className="mt-4 px-6 py-2 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h2>Revenue</h2>
              <img src="/assets/Info icon.png" alt="info" />
            </div>
            <img src="/assets/dollar.png" alt="users" />
          </div>
          <img src="/assets/revenue.png" alt="info" className="w-[100%]" />
        </div>

        {/* active users */}
        <div className="bg-white rounded-lg p-2">
          <div className="mt-4 px-6 py-2 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h2>Active Users</h2>
              <img src="/assets/Info icon.png" alt="info" />
            </div>
            <img src="/assets/users.png" alt="users" />
          </div>
          <img
            src="/assets/active-users3.png"
            alt="activeUsers"
            className="w-[100%]"
          />
        </div>

        {/* total volume */}
        <div className="bg-white rounded-lg p-2">
          <div className="mt-4 px-6 py-2 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h2>Total Volume</h2>
              <img src="/assets/Info icon.png" alt="info" />
            </div>
            <img src="/assets/arrow-swap.png" alt="flow" />
          </div>
          <img
            src="/assets/totalVolume.png"
            alt="info"
            className="w-[100%]"
          />
        </div>

        {/* securities */}
        <div className="bg-white rounded-lg">
          <StatCapital />
        </div>
        
      </div>
    </div>
  );
}

export default Analytics;
