import React from "react";
import { navigate } from "gatsby";
import { useSession } from "next-auth/react";

import Layout from "../components/Layout";

export default function ProtectedPage() {
  const { status, session } = useSession();

  console.log({ session }); // undefined at build time

  useEffect(() => {
    if (status === "loading") {
      return <p>Loading...</p>;
    }

    if (status === "unauthenticated") {
      navigate("/");
    }
  }, [status, session]);

  return status === "authenticated" ? (
    <>
      <Layout>
        <h1>Protected</h1>
        <p>You can only view this content here if you are signed in.</p>
      </Layout>
    </>
  ) : null;
}
