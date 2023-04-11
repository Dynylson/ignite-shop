import Link from "next/link";
import Image from "next/image";

import { HeaderContainer } from "./styles";

import logoImg from "@/assets/logo.svg";
import { useRouter } from "next/router";
import { CartModal } from "../CartModal";

export function Header() {
  const { pathname } = useRouter();

  const cartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt='' />
      </Link>
      {cartButton && <CartModal />}
    </HeaderContainer>
  );
}
