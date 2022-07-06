import React from "react";
import { useSession, getSession } from "next-auth/react";

export default function NormalPage() {
  const { data: session, status } = useSession();

  return (
    <>
      <h1>Normal</h1>
      <p>You can view this page if you are not signed in.</p>
    </>
  );
}
