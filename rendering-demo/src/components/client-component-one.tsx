"use client";

import { useState } from "react";
// import { ServerComponentOne } from "./server-component-one";
// import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Lorem");

  return (
    <>
      <h1>Client component One</h1>
      {/* <ClientComponentTwo /> */}
      {/* <ServerComponentOne/> */}
      {children}
    </>
  );
};
