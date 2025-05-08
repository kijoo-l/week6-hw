import { useContext } from "react";
import { CartContext } from "./App";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div
      style={{
        width: "100%",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ fontWeight: "bold", textDecoration: "none", color: "black" }}>
        likelion
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        🛒 cart {cartCount}
      </Link>
    </div>
  );
};
