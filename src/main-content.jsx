import { useContext } from "react";
import { data } from "./data";
import { CartContext } from "./App";
import { Link } from "react-router-dom";

export const MainComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {data.map((cat, index) => (
        <ItemCard
          key={index}
          id={index}
          image={cat.image}
          title={cat.name}
          price= {cat.price}
        />
      ))}
    </div>
  );
};

const ItemCard = ({ id, image, title, price }) => {
  const { setCartCount, cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);

    const exists = cartItems.find((item) => item.title === title);

    if (exists) {
      // count 증가
      const updated = cartItems.map((item) =>
        item.title === title
          ? { ...item, count: item.count + 1 }
          : item
      );
      setCartItems(updated);
    } else {
      // 새로 추가
      setCartItems([...cartItems, { image, title, price, count: 1 }]);
    }
  };

  return (
    <div style={{ margin: 16 }}>
      <Link to={`/item/${id}`}>
        <img
          src={image}
          alt={title}
          style={{
            width: 200,
            height: 250,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </Link>
      <p>{title}</p>
      <p>{price.toLocaleString()}원</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};
