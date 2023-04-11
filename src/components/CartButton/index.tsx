import { Button } from "./styles";

import Image from "next/image";

import bag from "@/assets/bag.svg";

type CartButtonProps = {
  variant: "$green500" | "$gray800";
  quantity: number;
};

export function CartButton({ variant, quantity, ...rest }: CartButtonProps) {
  return (
    <Button {...rest} css={{ backgroundColor: variant }}>
      {quantity > 0 && <span>{quantity}</span>}
      <Image src={bag} width={20} height={20} alt='' />
    </Button>
  );
}
