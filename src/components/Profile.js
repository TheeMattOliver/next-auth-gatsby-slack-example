import React from "react";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  return (
    <>
      <h1>Your profile</h1>
      {
        {
          loading: <p>Loading session...</p>,
          authenticated: <pre>{JSON.stringify(session?.data, null, 2)}</pre>,
          unauthenticated: "Please sign in",
        }[session?.status ?? "loading"]
      }
    </>
  );
};
export default Profile;
