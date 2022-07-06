import React from "react";
import { useSession } from "next-auth/react";

export default function NormalPage() {
  const session = useSession();

  console.log({ session });

  return (
    <>
      <h1>Normal</h1>
      <p>You can view this page if you are not signed in.</p>
    </>
  );
}
