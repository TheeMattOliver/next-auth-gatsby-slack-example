import React from "react";
import { useSession, getSession } from "next-auth/react";

import Layout from "./Layout";

const Profile = () => {
  return (
    <>
      <Layout>
        <h1>Your Profile 👆</h1>
      </Layout>
    </>
  );
};

export default Profile;
