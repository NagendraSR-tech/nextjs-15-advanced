"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2]; // Extract productId from the path
  const reviewId = pathname.split("/")[4]; // Extract reviewId from the path
  return (
    <>
      <h1>
        Review {reviewId} Not Found for product {productId}
      </h1>
      <p>The review you are looking for does not exist at {pathname}.</p>
    </>
  );
}
