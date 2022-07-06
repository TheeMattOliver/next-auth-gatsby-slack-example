import React from "react";
import { navigate } from "gatsby";
import { useSession } from "next-auth/react";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
