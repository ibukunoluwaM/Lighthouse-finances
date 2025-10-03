import React from "react";
import CustomerTime from "../../components/for-customers/customers-time";
import CustomerCategory from "../../components/for-customers/cusomers-category";
import CustomerType from "../../components/for-customers/customers-type";
import CustomerStatus from "../../components/for-customers/customers-status";
import StatCapital from "./dashboard/stat-capital";
import RevenueChart from "../../components/for analytics/revenue";
import ActiveUsersChart from "./dashboard/activeUserGraph";
import TotalVolumesChart from "../../components/for analytics/volume";

function Analytics() {
  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl my-6 font-bold">Analytics</h2>
        <button className="cursor-pointer bg-[#630219] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide">
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
          <div className="mt-4 px-6 py-2">
            {/* <div className="flex gap-3 items-center">
              <h2>Revenue</h2>
              <img src="/assets/Info icon.png" alt="info" />
            </div> */}
            <RevenueChart />
            {/* <img src="/assets/dollar.png" alt="users" /> */}
          </div>
          {/* <img src="/assets/revenue.png" alt="info" className="w-[100%]" /> */}
        </div>

        {/* active users */}
        <div className="bg-white rounded-lg p-2">
          <h2 className="font-bold ml-4">Active Users</h2>
          <div className="">
            <ActiveUsersChart />
          </div>
        </div>

        {/* total volume */}
        <div className="bg-white rounded-lg p-2">
          <div className="">
            <TotalVolumesChart />
          </div>
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
