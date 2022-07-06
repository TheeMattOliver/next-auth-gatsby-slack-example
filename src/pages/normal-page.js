import React from "react";
import { useSession } from "next-auth/react";

import Layout from "../components/Layout";

export default function NormalPage() {
  const session = useSession();

  console.log({ session });

  return (
    <>
      <Layout>
        <h1>Normal</h1>
        <p>You can view this page if you are not signed in.</p>
      </Layout>
    </>
  );
}
