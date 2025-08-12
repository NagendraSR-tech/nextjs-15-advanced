import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductReviews() {
  return (
    <>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product Details</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews</p>}>
        <Reviews />
      </Suspense>
    </>
  );
}
