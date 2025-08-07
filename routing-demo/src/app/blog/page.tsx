import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog", //overside the default title
  },
};

export default function Blog() {
  return <h1>Blog</h1>;
}
