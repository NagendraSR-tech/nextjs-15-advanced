import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Next.js Home</h1>
      <Link href="/products">Products</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/blog/first-post">First Post</Link>
      <br />
    </>
  );
}
