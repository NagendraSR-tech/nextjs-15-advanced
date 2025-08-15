import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Link from "next/link";
export type Product = {
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
          <Link href={`/products-db/${product.id}`}>
            <h2 className="text-xl font-semibold">{product.title}</h2>
          </Link>
          <p>{product.description}</p>
          <h2 className="text-lg font-medium">{product.price}</h2>
          <form action={removeProduct.bind(null, product.id)}>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-800"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
