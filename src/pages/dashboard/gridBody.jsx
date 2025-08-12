import { React, useContext } from "react";
import transaction from "../../../components/for-dashboard/transaction";
import repayments from "../../../components/for-dashboard/repayments";
import StatFinance from "./stat-finance";
import StatCapital from "./stat-capital";
import { StatContext } from "./statContext";
import { useNavigate } from "react-router-dom";

function getStatusClass(status) {
  if (status === "Failed") {
    return "bg-[#FEF3F2] text-[#B42318]";
  } else if (status === "Pending") {
    return "bg-[#F2F2F2] text-[#666666]";
  } else if (status === "Completed") {
    return "bg-[#ECFDF3] text-[#027A48]";
  }
}

function GridBody() {
  let content;
  let naviagte = useNavigate();

  const { statistics } = useContext(StatContext);

  if (statistics === "All stats") {
    content = "";
  } else if (statistics === "Finance") {
    content = <StatFinance />;
  } else if (statistics === "Capital") {
    content = <StatCapital />;
  }

  return (
    <div className=" mt-6 grid grid-cols-[2fr_1fr] gap-6 items-start">
      {/*    1 */}
      <div>
        <div className="bg-white rounded-xl mb-8">
          <div className="mt-4 px-6 py-2 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h2>Active Users</h2>
              <img src="/assets/Info icon.png" alt="info" />
            </div>
            <img src="/assets/users.png" alt="users" />
          </div>

          {/* determines whch card content to show */}
          {/* for all stats */}
          {statistics === "All stats" && (
            <img
              src="/assets/card content.png"
              alt="card"
              className="w-[100%]"
            />
          )}
          {/* for Finance */}

          {statistics === "Finance" && (
            <img
              src="/assets/card content-loan.png"
              alt="card"
              className="w-[100%]"
            />
          )}
          {/* for Capital */}

          {statistics === "Capital" && (
            <img
              src="/assets/card content-capital.png"
              alt="card"
              className="w-[100%]"
            />
          )}
          {/* for assets */}

          {statistics === "Asset Management" && (
            <img
              src="/assets/card content-assets.png"
              alt="card"
              className="w-[100%]"
            />
          )}
        </div>

        {/* table */}
        <div className="bg-white rounded-md px-4 py-2 text-sm">
          <h2 className="flex justify-between my-3">
            <span className="font-bold">Recent Transactions</span>
            <span className="text-[#0F8ECD] text-sm cursor-pointer" onClick={()=> naviagte("/transactions")}>See all</span>
          </h2>
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className=" text-left text-gray-700">
              <tr>
                <th className=" py-3 text-sm font-medium">Transaction ID</th>
                <th className=" py-3 text-sm font-medium">Customer</th>
                <th className="py-3 text-sm font-medium">Amount</th>
                <th className=" py-3 text-sm font-medium">Date</th>
                <th className=" py-3 text-sm font-medium">Status</th>
              </tr>
            </thead>
            {transaction.slice(0, 5).map((t, index) => (
              <tbody key={index} className="text-gray-600 cursor-pointer">
                <tr className="border-t border-t-gray-300">
                  <td className=" py-4">{t.id}</td>
                  <td className=" py-4">{t.name}</td>
                  <td className=" py-4">{t.amount}</td>
                  <td className=" py-4">{t.date}</td>
                  <td className=" py-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                        t.status
                      )}`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
                {/* Repeat rows here */}
              </tbody>
            ))}
          </table>
        </div>
      </div>

      {/* 2 */}
      <div>
        {/* value of content changes based on stats selected */}
        {content}
        {/* second child content */}
        {statistics !== "Capital" && (
          <div className="mt-6 bg-white rounded-lg py-2 px-4">
            <h2 className="flex justify-between items-center my-3">
              <span className="font-bold text-lg">Upcoming Repayments</span>
              <span className="cursor-pointer text-[#0F8ECD] text-sm" onClick={()=> naviagte("/loans")}>See all</span>
            </h2>

            <table className="bg-white rounded-lg">
              <thead className=" text-left text-gray-700">
                <tr className="">
                  <th className="w-3/4 py-3 text-sm font-medium">Customer</th>
                  <th className="w-1/4  py-3 text-sm font-medium">Amount</th>
                </tr>
              </thead>
              {repayments.map((t, index) => (
                <tbody key={index} className="text-gray-600 cursor-pointer">
                  <tr className="border-t border-t-gray-300">
                    <td className="flex flex-col">
                      <span className="text-sm py-1 text-black underline" onClick={()=>naviagte("/customers/1")}>
                        {t.name}
                      </span>
                      <span className="text-xs">{t.date}</span>
                    </td>
                    <td className="text-sm text-black py-4">₦{t.amount}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default GridBody;
