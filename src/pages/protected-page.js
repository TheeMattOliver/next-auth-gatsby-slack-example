import React from "react";
import { navigate } from "gatsby";
import { useSession } from "next-auth/react";

import Layout from "../components/Layout";
import AuthGuard from "../components/AuthGuard";

export default function ProtectedPage() {
  const session = useSession();
  const status = useSession();

  return (
    <Layout>
      <h1>Protected page</h1>

      <AuthGuard>
        <p>You should only be able to see this if you are authenticated.</p>
      </AuthGuard>
    </Layout>
  );
}
