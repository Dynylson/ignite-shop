import { IProduct, useCart } from "@/contexts/CartContext";
import { CartItemContainer, CartItemDetails, ImageContainer } from "./styles";
import Image from "next/image";

interface CartItemProps {
  product: IProduct;
}

export function CartItem({ product }: CartItemProps) {
  const { removeItemOfCart } = useCart();

  return (
    <CartItemContainer key={product.id}>
      <ImageContainer>
        <Image src={product.imageUrl} width={110} height={100} alt='' />
      </ImageContainer>
      <CartItemDetails>
        <h3>{product.name}</h3>
        <strong>{product.price}</strong>
        <button onClick={() => removeItemOfCart(product)}>Remover</button>
      </CartItemDetails>
    </CartItemContainer>
  );
}
