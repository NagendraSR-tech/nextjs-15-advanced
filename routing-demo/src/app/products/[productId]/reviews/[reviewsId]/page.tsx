export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  // Simulate fetching review details based on productId and reviewId
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
