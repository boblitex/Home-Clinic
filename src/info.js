import React from "react";
import { Link,withRouter } from "react-router-dom";

const Info = () => {
  return (
    <div className="bg-white-60 br3">
      <p className="f1 center pa3 orange sans-serif">
        Sick? Skip the clinic queue! <br />
        Register now to book an appointment
      </p>
      <div className="ph3">
        <Link
          className="f6 link dim ba ph3 pv2 mb2 dib orange bg-near-white mr4"
          to="/signin"
        >
          Sign in
        </Link>
        <Link
          className="f6 link dim ba ph3 pv2 mb2 dib orange bg-near-white mr4"
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Info);
