import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product - ${id}`);
    }, 100); // Simulating a delay for fetching metadata
  });
  return {
    title: `Product - ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  // Simulate fetching product details based on productId
  return <h1>Details about Product {productId}</h1>;
}
