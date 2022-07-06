import React from "react";
import { useSession, getSession } from "next-auth/react";

import Layout from "../components/Layout";

export default function ProtectedPage() {
  const { status, session } = useSession();

  console.log({ session }); // undefined at build time

  useEffect(() => {
    if (status === "loading") {
      return <p>Loading...</p>;
    }

    if (status === "unauthenticated") {
      navigate("/app/login");
    }
  }, [status, session]);

  return status === 'authenticated' ? (
    <>
      <Layout>
        <h1>Protected</h1>
        <p>You can only view this page if you are signed in.</p>
      </Layout>
    </>
  )
}
