import React from "react";
import { navigate } from "gatsby";
import { useSession } from "next-auth/react";

import Layout from "../components/Layout";

export default function ProtectedPage() {
  const session = useSession();
  const status = useSession();

  return (
    <Layout>
      <h1>Protected</h1>

      {
        {
          loading: <p>Loading session...</p>,
          authenticated: (
            <p>
              You should only be able to see this message if you're signed in.
            </p>
          ),
          unauthenticated: "Please sign in",
        }[session?.status ?? "loading"]
      }
    </Layout>
  );
}
