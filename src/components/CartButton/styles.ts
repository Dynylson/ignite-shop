import { styled } from "@/styles";

export const Button = styled("button", {
  position: "relative",
  border: 0,
  borderRadius: 8,
  backgroundColor: "$green500",
  width: 56,
  height: 56,
  cursor: "pointer",

  span: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "$green500",
    color: "$white",
    fontWeight: "bold",
    borderRadius: "50%",
    height: 24,
    width: 24,
  },

  "&:hover": {
    backgroundColor: "$green300",
  },
});
