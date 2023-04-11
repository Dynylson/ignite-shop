import { IProduct, useCart } from "@/contexts/CartContext";

export function useCartSum() {
  const { products } = useCart();

  const productsSum = products.reduce((acc: number, product: IProduct) => {
    const priceFormated = Number(product.price.replace("R$ ", "").trim());
    console.log(product.price.replace("R$ ", ""));

    return acc + priceFormated;
  }, 0);

  return productsSum;
}
