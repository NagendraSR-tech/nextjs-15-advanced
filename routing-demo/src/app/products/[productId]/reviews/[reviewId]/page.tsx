import { notFound, redirect } from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }
  const { productId, reviewId } = await params;
  // Simulate fetching review details based on productId and reviewId
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect(`/products`);
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
