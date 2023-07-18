import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Leaves() {
  return (
    <div className="content-wrap">
      <h4>Check Your Leaves</h4>
      <div className="product-nav mb-5">
        <Link className="navbar-brand" to="/leaves/apply-leaves">
          Apply Leaves
        </Link>
        <Link className="navbar-brand" to="/leaves/check-leave-balance">
          Check Leave Balance
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
export default Leaves;
