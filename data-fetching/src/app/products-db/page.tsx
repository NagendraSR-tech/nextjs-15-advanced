import { getProducts } from "@/prisma-db";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return (
    <ul className=" space-y-4 p-4">
      {products.map((product) => (
        <li key={product.id} className=" p-4 bg-white shadow-md text-gray-700">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <h2 className="text-lg font-medium">{product.price}</h2>
        </li>
      ))}
    </ul>
  );
}
