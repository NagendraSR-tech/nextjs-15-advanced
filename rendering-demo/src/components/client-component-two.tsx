"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("Lorem");

  return <h1>Client component Two</h1>;
};
