import { React } from "react";
import { StatContext } from "./statContext";

export const securities = [
    {
        stock: "ACCESSCORP", 
        shares: "2,690"
    }, 
      {
        stock: "BUACEMENT", 
        shares: "1,434"
    },   {
        stock: "DANGCEM", 
        shares: "1,324"
    },   {
        stock: "FCMB", 
        shares: "1,309"
    },   {
        stock: "FIDSON", 
        shares: "1,236"
    },   {
        stock: "MTNN", 
        shares: "1,231"
    },   {
        stock: "GEREGU", 
        shares: "1,210"
    },   {
        stock: "JBERGER", 
        shares: "1,203"
    },   {
        stock: "OANDO", 
        shares: "1,109"
    },   {
        stock: "NESTLE", 
        shares: "1,100"
    }
];





export default function StatCapital() {
  return (
    <div className="mt-4 bg-white rounded-lg py-2 px-4">
      <h2 className="flex justify-between items-center my-3">
        <span className="font-bold text-sm">
          Top Securities <img src="/assets/Info-icon.png" alt="" />
        </span>
        <span className="text-[#0F8ECD] text-sm">
          <img src="/assets/chart-line.png" alt="" />
        </span>
      </h2>
      <p className="text-2xl font-bold">32</p>

      {/* loan tables */}
      <div className="bg-white mt-4 border border-gray-300 rounded-md  py-2 text-sm">
        <table className="min-w-full bg-white  rounded-lg overflow-hidden">
          <thead className=" text-left text-gray-700">
            <tr>
              <th className="px-2 py-3 text-left text-sm font-medium">
                Stock
              </th>
              <th className="px-2 py-3 text-center text-sm font-medium">
                Shares Bought
              </th>
            </tr>
          </thead>
          {securities.map((t, index) => (
            <tbody key={index} className="text-gray-600 cursor-pointer">
              <tr className="border-t border-t-gray-300">
                <td className="px-2 py-2">{t.stock}</td>
                <td className="px-2  text-center py-2">{t.shares}</td>
              </tr>
              {/* Repeat rows here */}
            </tbody>
          ))}
        </table>
      </div>
      
      <div className="mt-4 mb-6 flex justify-between items-center">
        <p className="text-sm text-[#666666] ">Showing 10 of 32 </p>
        <div className="">
          <button className="bg-white mr-2 border-gray-300  cursor-pointer rounded-md p-3 outline-none">
            <img src="/assets/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="bg-white border-gray-300 rounded-md cursor-pointer p-3 outline-none">
            <img src="/assets/arrow-right.png" alt="arrow-left" />
          </button>
        </div>
      </div>
    </div>
  );
}