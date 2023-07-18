import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
function CheckLeaveBalance() {
  return (
    <div className="content-wrap">
      <h5>Check Balance</h5>
      <div className="product-nav mb-5">
        <Link
          className="navbar-brand"
          to="/leaves/check-leave-balance/casual-balance"
        >
          Casual
        </Link>
        <Link
          className="navbar-brand"
          to="/leaves/check-leave-balance/earned-balance"
        >
          Earned
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
export default CheckLeaveBalance;
