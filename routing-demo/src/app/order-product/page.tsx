"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    // Logic to handle product ordering
    console.log("Product ordered!");
    // router.push("/products"); // Redirect to products page after ordering
    router.push("/"); // Redirect to products page after ordering
    // if we want to replace current page in history stack instead of adding new entry
    // router.replace("/products"); // Redirect to products page after ordering
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick} className="btn btn-primary">
        Order Now
      </button>
    </>
  );
}
