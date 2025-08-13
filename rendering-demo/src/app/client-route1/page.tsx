"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

import React from "react";

export default function ClientRoute1Page() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route1 page</h1>
      <p>{result}</p>
    </>
  );
}
