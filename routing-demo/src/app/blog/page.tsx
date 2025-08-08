import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog", //overside the default title
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delayed blog page");
    }, 2000);
  });
  return <h1>Blog</h1>;
}
