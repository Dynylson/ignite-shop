import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const CartContent = styled(Dialog.Content, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  position: "fixed",
  right: 0,
  top: 0,
  bottom: 0,
  width: 480,
  backgroundColor: "$gray800",

  "h2, p > &": {
    marginLeft: 40,
  },

  h2: {
    marginTop: 80,
    fontSize: "$lg",
    color: "$gray100",
  },
});

export const CartClose = styled(Dialog.Close, {
  position: "absolute",
  top: 25,
  right: 25,

  border: 0,
  background: "transparent",
  cursor: "pointer",
});

export const CartSummary = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "auto",
  marginRight: 25,
  marginLeft: 40,
  marginBottom: 50,

  button: {
    border: 0,
    backgroundColor: "$green500",
    color: "$white",
    height: 69,
    borderRadius: 8,
    fontSize: "$md",
    fontWeight: "bold",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});

export const CartQuantity = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  p: {
    color: "$gray300",
  },
});

export const CartTotal = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  ".price": {
    fontSize: "$xl",
  },
});
