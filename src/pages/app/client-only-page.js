import React from "react";
import { Router } from "@reach/router";
import { useSession, getSession } from "next-auth/react";

import Layout from "../../components/layout";

export default function ClientOnlyPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Layout>
        <Router basepath="/app">
          <h1>Protected Page</h1>
          <p>You can view this page because you are signed in.</p>
        </Router>
      </Layout>
    </>
  );
}
