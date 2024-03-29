import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { HomeContainer, Product } from "@/styles/pages/home";

import { useKeenSlider } from "keen-slider/react";

import { stripe } from "@/lib/stripe";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";

import { ProductHome } from "@/components/ProductHome";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <ProductHome product={product} />
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      // price: new Intl.NumberFormat("pt-BR", {
      //   style: "currency",
      //   currency: "BRL",
      // }).format(price.unit_amount / 100),
      price: price.unit_amount
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
