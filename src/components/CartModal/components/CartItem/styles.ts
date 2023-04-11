import { styled } from "@/styles";

// export const Container = styled("div", {
//   display: "flex",
//   flexDirection: "column",
// });

export const CartItemContainer = styled("div", {
  display: "flex",
  gap: "1.5rem",
  marginTop: 25,
  marginLeft: 40,
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
});

export const CartItemDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  h3: {
    color: "$gray300",
    fontWeight: "400",
  },

  strong: {
    marginBottom: "1.3rem",
  },

  button: {
    border: 0,
    background: "transparent",

    marginRight: "auto",

    fontSize: "1rem",
    fontWeight: "bold",
    color: "$green500",

    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});
