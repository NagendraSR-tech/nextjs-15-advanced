export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productId = await params.productId;
  // Simulate fetching product details based on productId
  return <h1>Details about Product {productId}</h1>;
}
