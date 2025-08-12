import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Sidebar from "./sidebar";
import RoleProvider from "./roleContext";
import StatProvider from "./dashboard/statContext";
import Products from "./products";
import Customers from "./customers/customers";
import CustomerDetail from "./customers/customerDetailsPage";
import Transaction from "./transaction";
import CustomerTransactionDetail from "./customers/customer-transactionDetails";
import CustomerBalances from "../../components/for-customers/customer-balances";
import Loan from "./loans";
import Analytics from "./analytics";
import TeamManagement from "./team-management";
import Settings from "./settings";
import Learn from "./learn";
import LearnDetails from "./learnDetails";
import LessonDetails from "./lessonDetails";
import LoanDetails from "./loanDetails";
import LoanRepaid from "../../components/for-loans/loan-repaid";

function LoggedIn() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <RoleProvider>
        <StatProvider>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="transactions" element={<Transaction />}></Route>

              <Route path="customers" element={<Customers />}></Route>
              <Route path="customers/:id" element={<CustomerDetail />}></Route>
              <Route
                path="customers/balances"
                element={<CustomerBalances />}
              ></Route>

              <Route
                path="customers/transactions/:id"
                element={<CustomerTransactionDetail />}
              ></Route>
              <Route path="loans" element={<Loan />}></Route>
              <Route path="loans/loanDetail/:id" element={<LoanRepaid />}></Route>

              <Route
                path="team-management"
                element={<TeamManagement />}
              ></Route>

              <Route path="analytics" element={<Analytics />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="learn/:id" element={<LearnDetails />}></Route>
              <Route
                path="learn/:id/details/:id"
                element={<LessonDetails />}
              ></Route>

              <Route path="learn" element={<Learn />}></Route>
            </Route>
          </Routes>
        </StatProvider>
      </RoleProvider>
    </div>
  );
}

export default LoggedIn;
