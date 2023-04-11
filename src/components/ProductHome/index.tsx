import { IProduct, useCart } from "@/contexts/CartContext";
import { Product } from "@/styles/pages/home";
import Image from "next/image";
import { CartButton } from "../CartButton";

interface ProductHomeProps {
  product: IProduct;
}

export function ProductHome({ product }: ProductHomeProps) {
  const { addItemsToCart } = useCart();

  function handleAddProductToCart(event: any) {
    event.preventDefault();

    addItemsToCart(product);
  }

  return (
    <Product className='keen-slider__slide'>
      <Image src={product.imageUrl} width={520} height={480} alt='' />

      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>
        <CartButton variant='$green500' onClick={handleAddProductToCart} />
      </footer>
    </Product>
  );
}
