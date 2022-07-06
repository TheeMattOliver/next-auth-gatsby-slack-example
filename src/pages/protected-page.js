import React from "react";
import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const session = useSession();

  console.log({ session });

  return (
    <>
      <h1>Protected</h1>
      <p>You can only view this page if you are signed in.</p>
    </>
  );
}
