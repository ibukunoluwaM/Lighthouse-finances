import { React, useEffect, useState } from "react";
import { getStatusClass } from "./customers/customers";
import { shortenDescription } from "./transaction";
import { useNavigate } from "react-router-dom";

const navigation = [
  "Fixed Deposits",
  "Treasury Bills",
  "Stocks",
  "Mutual Funds",
  "Public Offers",
  "Loans",
];

const productArray = [
  {
    id: 1,
    name: "Lighthouse SuperAchiever Plan",
    type: "Individual",
    rate: "12%",
    status: "Active",
    date: "Apr 10, 2025 12:32 PM",
    category: "Fixed Deposits",
    createdBy: "Adebanjo Thomas",
    activeUsers: 209,
    tradeVol: "₦3,209,329.55",
  },

  {
    id: 2,
    name: "LightPremier Plan",
    type: "Individual",
    rate: "15%",
    status: "Active",
    date: "Apr 10, 2025 12:32 PM",
    category: "Mutual Funds",
    createdBy: "Ngozi Nwachukwu",
    activeUsers: 147,
    tradeVol: "₦1,890,002.00",
  },

  {
    id: 3,
    name: "Lighthouse SuperAchiever Plan",
    type: "Individual",
    rate: "10%",
    status: "Active",
    date: "Apr 10, 2025 12:32 PM",
    category: "Treasury Bills",
    createdBy: "Ibrahim Musa",
    activeUsers: 321,
    tradeVol: "₦4,504,129.99",
  },

  {
    id: 4,
    name: "LightAssurance Plan",
    type: "Corporate",
    rate: "18%",
    status: "Inactive",
    date: "Apr 10, 2025 12:32 PM",
    category: "Public Offers",
    createdBy: "Chinedu Okoro",
    activeUsers: 94,
    tradeVol: "₦987,123.75",
  },
  {
    id: 5,
    name: "Lighthouse SuperAchiever Plan",
    type: "Corporate",
    rate: "12%",
    status: "Active",
    date: "Apr 10, 2025 12:32 PM",
    category: "Stocks",
    createdBy: "Amaka Onuoha",
    activeUsers: 268,
    tradeVol: "₦2,743,880.20",
  },
];

// function showDetails(id) {
//   let selectedProduct = productArray.find((selected) =>{
//     return   selected.id ===id
//   }
// )}

function Products() {
  const [selectedItem, setSelectedItem] = useState(null);
  let navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(navigation[0]);

  //for add product form
  const [isOpen, setIsOpen] = useState(false);
  // for sidepanel
  const [panelOpen, setPanelOpen] = useState(false);
  // for editForm
  const [editForm, setEditForm] = useState(false);
  // function NavigateBackToBalances() {
  //   useEffect((activeNav)=> {

  //   }, [activeNav])
  // }

  // opens add product form
  function openForm() {
    setIsOpen(true);
  }

  // close add prodcut form
  function closeForm() {
    setIsOpen(false);
    setPanelOpen(false);
    setEditForm(false)
  }

  //opens sidepanel
  function handleClick(item) {
    setSelectedItem(item);
    setPanelOpen(true);
  }

  // for editing sidePanel
  function editProduct() {
    setEditForm(true);
  }
  // navigates from loans to customer/balances
  
    useEffect(() => {
      if (activeNav === "Loans") {
        navigate("/customers/1/?section=balances");
      }
    }, [activeNav, navigate]);
  

  return (
    <div className="w-[100%] hide-scrollbar px-6 py-2">
      {/* heading part */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl my-6 font-bold">Products</h2>
        <button className="cursor-pointer bg-[#0F8ECD] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide">
          <span onClick={openForm}>Add Product</span>
          <img src="./src/assets/white-plus.png" alt="add" />
        </button>
      </div>
      {/* navigating links */}
      <ul className="flex gap-5 text-sm mt-6 cursor-pointer">
        {navigation.map((nav, index) => (
          <li
            key={index}
            className={`${activeNav === nav ? "border-b-2" : ""}`}
            onClick={index===0 || index ===5 ? () => setActiveNav(nav): undefined}
          >
            {nav}
          </li>
        ))}
      </ul>

      {activeNav === "Fixed Deposits" && (
        <table className="min-w-full bg-white rounded-lg text-sm my-6 overflow-hidden">
          <thead className=" text-left text-gray-700">
            <tr>
              <th className="px-3 py-3 text-sm font-medium">Name</th>
              <th className=" py-3 text-sm font-medium">Type</th>
              <th className="py-3 text-sm font-medium">Rate</th>
              <th className=" py-3 text-sm text-center font-medium">Status</th>
              <th className=" py-3 text-sm font-medium text-center">
                Date Created
              </th>
            </tr>
          </thead>
          {productArray.map((t, index) => (
            <tbody key={index} className="text-gray-600 cursor-pointer">
              <tr
                className="border-t border-t-gray-300"
                onClick={() => handleClick(t)}
              >
                <td className="px-3 py-4">{shortenDescription(t.name, 18)}</td>
                <td className=" py-4">{t.type}</td>
                <td className=" py-4">₦{t.rate}</td>
                <td className="text-center py-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                      t.status
                    )}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className=" text-center py-4">{t.date}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}

      {/* for add prodcut form */}
      {isOpen && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >
          <form
            action=""
            className="bg-white p-4 w-[25rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Add Product</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Category
            </label>
            <select
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              placeholder="Select"
              name="state"
              id=""
            ></select>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Name
            </label>
            <input
              type="text"
              className="w-[100%] p-3 rounded-md border border-gray-300"
              placeholder="Enter product name"
            />
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Type
            </label>
            <select
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              placeholder="Select"
              name="state"
              id=""
            ></select>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Rate
            </label>
            <input
              type="text"
              className="w-[100%] p-3 rounded-md border border-gray-300"
              placeholder="Enter product rate"
            />
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Status
            </label>
            <select
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              name="state"
              defaultValue="Active"
              id=""
            >
              <option value="active" default>
                Active
              </option>
            </select>
            <hr className="my-6 border border-gray-200" />

            <div className="flex justify-between gap-2 " onClick={closeForm}>
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

      {/* for side panel */}
      {panelOpen && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >
          <div className="w-[25rem] py-6 px-4 bg-white fixed top-[0] right-[0] h-[100vh]" onClick={(e) => e.stopPropagation()}>
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg">Product Details</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>

            <p className="mt-4 text-sm text-[#666666]">
              Category
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedItem.category}
              </span>
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Name
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedItem.name}
              </span>
            </p>

            <div className="flex">
              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Type
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedItem.type}
                </span>
              </p>

              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Rate
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedItem.rate}
                </span>
              </p>
            </div>

            <div className="flex">
              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Created By
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedItem.createdBy}
                </span>
              </p>

              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Status
                <span className={`block w-[4.5rem] px-3 py-1 text-sm rounded-full ${getStatusClass(
                                    selectedItem.status
                                  )}`}>
                  {selectedItem.status}
                </span>
              </p>
            </div>

            <p className="mt-4 text-sm text-[#666666]">
              Date
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedItem.date}
              </span>
            </p>

            <hr className="my-6 border border-gray-200" />

            <h2 className="my-4 text-lg ">Trade Information</h2>
            <p className="mt-4 text-sm text-[#666666]">
              Active users
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedItem.activeUsers}
              </span>
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Trade Volume
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedItem.tradeVol}
              </span>
            </p>

            <hr className="my-6 border border-gray-200" />
            <button className="w-[100%] my-2 py-3 bg-[#0F8ECD] border-none rounded-md cursor-pointer text-white" onClick={editProduct}>Edit Product Details</button>
          </div>
        </div>
      )}

      {/* open edit form */}
      {editForm && (
                <div
          className="bg-gray/50 fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >
          <form
            action=""
            className="bg-white p-4 w-[25rem] rounded-lg"
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Edit Product</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Category
            </label>
            <select
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              placeholder="Select"
              name="state"
              id=""
            >
              <option default value={selectedItem.category}>{selectedItem.category}</option>
            </select>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Name
            </label>
            <input
              type="text"
              className="w-[100%] p-3 rounded-md border border-gray-300"
             defaultValue={selectedItem.name}
            />
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Type
            </label>
            <select
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              placeholder="Select"
              name="state"
              id=""
            >
              <option default value={selectedItem.type}>{selectedItem.type}</option>
            </select>
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Rate
            </label>
            <input
              type="text"
              className="w-[100%] p-3 rounded-md border border-gray-300"
              defaultValue={selectedItem.rate}
            />
            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Status
            </label>
            <select
              className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm"
              name="state"
              defaultValue="Active"
              id=""
            >
              <option value= {selectedItem.status} default>
               { selectedItem.status}
              </option>
            </select>
            <hr className="my-6 border border-gray-200" />

            <div className="flex justify-between gap-2 " onClick={closeForm}>
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
    </div>
  );
}

export default Products;
