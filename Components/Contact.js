import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link to={"instagram"}>
        <h1>Connect To instagram</h1>
      </Link>
      <Link to={"facebook"}>
        <h1>Connect To Facebook</h1>
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;
