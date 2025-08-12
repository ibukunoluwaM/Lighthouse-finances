import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import SelectMenu from "../selectMenu";
import { customerDetails } from "../../../components/for-customers/customers-array";
import { getStatusClass } from "./customers";
import CustomerDetailPersonal from "../../../components/for-customers/customer-details-personal";
import CustomerDetailContact from "../../../components/for-customers/customer-details-contact";
import CustomerDetailBankDeets from "../../../components/for-customers/customers-details-bankdeets";
import CustomerDetailMetaData from "../../../components/for-customers/customer-details-metaData";
import CustomerBalances from "../../../components/for-customers/customer-balances";
import CustomerTransaction from "../../../components/for-customers/customers-transaction";
import CustomerAuditLog from "../../../components/for-customers/customer-auditLog";
//import images
import arrowLeft from "/assets/arrow-left-button.png";
const navigation = [
  "Details",
  "Balances",
  "Transactions",
  "Loans",
  "Audit Log",
  "Notes",
];
function CustomerDetail() {
  const [activeNav, setActiveNav] = useState(navigation[0]);
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");
  const { id } = useParams();

  let selectedCustomer = customerDetails.find((cust) => {
    return cust.id === Number(id);
  });

  //navigate to balances
  useEffect(() => {
    if (section === "balances") {
      setActiveNav("Balances");
    }
  }, [section]);
  // handlegoingback
  function handleGoBack() {
    navigate(-1);
  }

  // navigation settings
  function switchNav(nav) {
    setActiveNav(nav);
  }

  // for more for the hamburger menu
  function showMore() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-[100%] px-5 flex-1 overflow-y-scroll hide-scrollbar">
      <div className="relative flex justify-between gap-2 mt-6 mb-4 items-center">
        <div className="flex items-center gap-2">
          <div
            className=" w-[35px] h-[35px] bg-white p-2 rounded-md cursor-pointer"
            onClick={handleGoBack}
          >
            <img src={arrowLeft} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl font-medium">
              {`${selectedCustomer.firstName} ${selectedCustomer.lastName}`}
            </p>
            <p
              className={`text-sm p-2 rounded-2xl ${getStatusClass(
                selectedCustomer.kyc
              )}`}
            >
              {selectedCustomer.kyc}
            </p>
            <p
              className={`text-sm  p-2 rounded-2xl ${getStatusClass(
                selectedCustomer.status
              )}`}
            >
              {selectedCustomer.status}
            </p>
            <p className="text-sm bg-[#ECFDF3] text-[#027A48] p-2 rounded-2xl">
              2FA enabled
            </p>
            <p
              className={`text-sm  p-2 rounded-2xl ${getStatusClass(
                selectedCustomer.type
              )}`}
            >
              {selectedCustomer.type}
            </p>
          </div>
        </div>
        <div className=" cursor-pointer flex justify-center items-center bg-white p-2 rounded-lg">
          <img
            src="/assets/more-horiz.png"
            alt="show-more"
            onClick={showMore}
          />
        </div>

        {isOpen && (
          <div className="absolute w-[10rem] z-[10] top-[45px] right-[20px] bg-white p-2 text-sm rounded-lg cursor-pointer">
            <p className="p-2">Restrict account</p>
            <p className="p-2">Remove 2FA</p>
            <p className="p-2 text-red-500">Deactivate account</p>
          </div>
        )}
      </div>

      {/* navs */}
      <ul className="flex gap-5 text-sm mt-6 cursor-pointer">
        {navigation.map((nav, index) => (
          <li
            key={index}
            className={`${activeNav === nav ? "border-b-2" : ""}`}
            onClick={() => switchNav(nav)}
          >
            {nav}
          </li>
        ))}
      </ul>

      {/*activeNav:  detail content */}
      {activeNav === "Details" && (
        <div>
          <div className="grid grid-cols-[1fr_1fr] gap-4 mt-5">
            {/* first div:customer personal details */}
            <CustomerDetailPersonal selectedCustomer={selectedCustomer} />
            {/* second div: customer conntact information */}
            <CustomerDetailContact selectedCustomer={selectedCustomer} />

            {/* third div: customer's bank details */}
            <CustomerDetailBankDeets selectedCustomer={selectedCustomer} />

            {/* Fourth div: customer's meta data details */}
            <CustomerDetailMetaData selectedCustomer={selectedCustomer} />
          </div>

          {/* pep details */}
          <div className="mt-5 mb-4 bg-white p-3 rounded-lg">
            <h3 className="font-bold mt-3">PEP Details</h3>

            <div className="flex w-[100%] justify-between">
              {/* 1 */}
              <div className="flex-1">
                <p className="mt-4 text-sm text-[#666666]">
                  Position/Title
                  <span className="block mt-1 text-[#0D0D0D] font-medium">
                    Former Governor S.A. on Arts and Culture
                  </span>
                </p>

                <p className="mt-4 text-sm text-[#666666]">
                  Source of funds
                  <span className="block mt-1 text-[#0D0D0D] font-medium">
                    Business income
                  </span>
                </p>

                <p className="mt-4 text-sm text-[#666666]">
                  Do you have any family members or close associates who hold
                  prominent public positions?
                  <span className="block mt-1 text-[#0D0D0D] font-medium">
                    No
                  </span>
                </p>

                <p className="mt-4 text-sm text-[#666666]">
                  Do you have any business interests or assets that could be
                  considered high-risk?
                  <span className="block mt-1 text-[#0D0D0D] font-medium">
                    Yes
                  </span>
                </p>
              </div>

              {/* 2 */}
              <div className="flex-1">
                <p className="mt-4 text-sm text-[#666666]">
                  Government Agency/Institution Name
                  <span className="block flex gap-2 mt-1 text-[#0D0D0D] font-medium">
                    Osun State Ministry
                  </span>
                </p>

                <p className="mt-4 text-sm text-[#666666]">
                  Are you currently under investigation or subject to any legal
                  proceedings?
                  <span className="block mt-1 text-[#0D0D0D] font-medium">
                    No
                  </span>
                </p>

                <p className="mt-4 text-sm text-[#666666]">
                  If yes, please provide their names, relationships, and
                  positions:
                  <span className={"block mt-1 text-sm font-medium"}>-</span>
                </p>

                <p className="mt-4 text-sm text-[#666666]">
                  If yes, please describe the business interests or assets:{" "}
                  <span className="block mt-1 text-sm text-[#0D0D0D] font-medium">
                    I am a majority shareholder (60% ownership) in XYZ Energy
                    Ventures, a company operating in the oil and gas sector,
                    which is subject to stringent regulatory requirements and
                    market fluctuations.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* activeNav: balances content */}
      {activeNav === "Balances" && <CustomerBalances />}

      {/* activeNav: transaction content */}
      {activeNav === "Transactions" && <CustomerTransaction />}

      {/* activeNav: loan content */}
      {activeNav === "Loans" && (
        <div className="bg-white h-[50vh] mt-6 rounded-lg flex justify-center items-center text-[#666666]">
          <p>
            {" "}
            {`${selectedCustomer.firstName} ${selectedCustomer.lastName} is yet to apply for a loan.`}
          </p>
        </div>
      )}

      {activeNav === "Notes" && (
        <div className="bg-white h-[50vh] mt-6 rounded-lg flex justify-center items-center text-[#666666]">
          <p> No Notes...</p>
        </div>
      )}

      {/* activeNav: auditLog content */}
      {activeNav === "Audit Log" && <CustomerAuditLog />}
    </div>
  );
}

export default CustomerDetail;
