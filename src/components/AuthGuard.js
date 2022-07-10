import * as React from "react";
import { useSession } from "next-auth/react";

export default function AuthGuard({ children }) {
  const session = useSession();

  return (
    <>
      {
        {
          loading: <p>Loading session...</p>,
          authenticated: { children },
          unauthenticated: "Please sign in",
        }[session?.status ?? "loading"]
      }
    </>
  );
}
