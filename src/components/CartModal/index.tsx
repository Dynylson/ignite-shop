import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import {
  CartClose,
  CartContent,
  CartQuantity,
  CartSummary,
  CartTotal,
} from "./styles";

import Image from "next/image";

import close from "@/assets/close.svg";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "./components/CartItem";
import { useCartSum } from "@/hooks/useCartSum";

export function CartModal() {
  const { products } = useCart();

  const total = useCartSum();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton variant='$gray800' quantity={products.length} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <div>
            <CartClose>
              <Image src={close} alt='' />
            </CartClose>
            <Dialog.Title>Sacola de Compras</Dialog.Title>
            {products.map((product) => {
              return <CartItem key={product.id} product={product} />;
            })}
          </div>

          <CartSummary>
            <CartQuantity>
              <p>Quantidade</p>
              <p>
                {products.length > 1
                  ? `${products.length} itens`
                  : `${products.length} item`}
              </p>
            </CartQuantity>
            <CartTotal>
              <strong>Valor total</strong>
              <strong className='price'>R$ {total}</strong>
            </CartTotal>
            <button>Finalizar compra</button>
          </CartSummary>

          <Dialog.Description />
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
