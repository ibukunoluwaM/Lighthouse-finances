import { React, useState, } from "react";

const balances = [
  {
    type: "Wallet",
    availableBal: "₦53,930.50",
    pending: "₦5,040.98",
    total: "₦58,971.48",
  },
  {
    type: "Fixed Deposit",
    availableBal: "₦293,992.98",
    pending: "-",
    total: "₦293,992.98",
  },
  {
    type: "Stocks",
    availableBal: "₦37,940.98",
    pending: "-",
    total: "₦37,940.98",
  },

  {
    type: "Mutual Funds",
    availableBal: "-",
    pending: "-",
    total: "-",
  },
  {
    type: "Treasury Bills",
    availableBal: "₦120,930.23",
    pending: "-",
    total: "₦120,930.23",
  },
  {
    type: "Loans",
    availableBal: "₦44,903.32",
    pending: "-",
    total: "₦44,903.32",
  },
];
function CustomerBalances() {
  const [showMore, setShowMore] = useState(false);

  //   show more
  function showMoreOption() {
    setShowMore(!showMore);
  }
  return (
    <div className="" >
    <table className="relative min-w-full bg-white mt-7 text-sm rounded-lg overflow-hidden">
      <thead className=" text-left text-gray-700">
        <tr>
          <th className="px-3 py-3 text-sm font-medium">Type</th>
          <th className=" py-3 text-sm font-medium">Available</th>
          <th className="py-3 text-sm font-medium">Pending</th>
          <th className=" py-3 text-sm font-medium">Total</th>
          <th className="  py-3 text-sm font-medium"></th>
        </tr>
      </thead>
      {balances.map((t, index) => (
        <tbody key={index} className="text-gray-600 cursor-pointer">
          <tr className="border-t border-t-gray-300">
            <td className="px-3 py-4 text-[#0D0D0D] font-medium">{t.type}</td>
            <td className=" py-4">{t.availableBal}</td>
            <td className=" py-4">{t.pending}</td>
            <td className=" py-4 text-[#0D0D0D] font-medium">{t.total}</td>
            <td className=" py-4">
              <img
                src="..//assets/more-horiz.png"
                alt="show-more"
                className="text-center"
                onClick={showMoreOption}
              />
            </td>
          </tr>
          {/* Repeat rows here */}
        </tbody>
      ))}

      {/* {showMore && (
                  <div className="absolute w-[10rem] top-[50px] right-[40px] bg-white p-2 text-sm rounded-lg cursor-pointer">
              <p className="p-2">sdfghjkre</p>
              <p className="p-2">View Details</p>
              <p className="p-2 text-red-500">Deactivate account</p>

            </div>
      )} */}
    </table>

      <div className="m-6 flex justify-between items-center">
        <p className="text-sm text-[#666666] ">Showing 1 of 1 </p>
        <div className="flex gap-2 items-center">
            <p>Page 1 of 1</p>
          <button className="bg-white mr-2 border-gray-300  cursor-pointer rounded-md p-3 outline-none">
            <img src="..//assets/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="bg-white border-gray-300 rounded-md cursor-pointer p-3 outline-none">
            <img src="..//assets/arrow-right.png" alt="arrow-left" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerBalances;
