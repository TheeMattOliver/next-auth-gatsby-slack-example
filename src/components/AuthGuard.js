import * as React from "react";
import { useSession } from "next-auth/react";

import Disclaimer from "./Disclaimer";

export default function AuthGuard({ children }) {
  const session = useSession();

  return (
    <>
      {
        {
          loading: <p>Loading session...</p>,
          authenticated: children,
          unauthenticated: Disclaimer,
        }[session?.status ?? "loading"]
      }
    </>
  );
}
