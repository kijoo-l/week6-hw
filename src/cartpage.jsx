import { useContext } from "react";
import { CartContext } from "./App";

export const CartPage = () => {
  const { cartItems, setCartItems, setCartCount } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  const removeItem = (title) => {
    const updated = cartItems
      .map((item) =>
        item.title === title
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);

    setCartItems(updated);
    setCartCount(totalQuantity - 1);
  };

  const addItem = (title) => {
    const updated = cartItems.map((item) =>
      item.title === title
        ? { ...item, count: item.count + 1 }
        : item
    );
    setCartItems(updated);
    setCartCount(totalQuantity + 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 36, fontWeight: "bold", marginBottom: 24 }}>장바구니</h1>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: 18 }}>장바구니가 비었습니다.</p>
      ) : (
        <>
          <p style={{ fontSize: 18, marginBottom: 4 }}>
            총 <strong>{totalQuantity}</strong>개 담김
          </p>
          <p style={{ fontSize: 18, marginBottom: 16 }}>
            총합: <strong>{totalPrice.toLocaleString()}원</strong>
          </p>
          <div style={{ marginBottom: 32 }}>
            <button onClick={clearCart} style={{
              padding: "8px 16px",
              border: "1px solid #ccc",
              borderRadius: 8,
              backgroundColor: "#f8f8f8",
              cursor: "pointer"
            }}>
              🗑 전체 삭제
            </button>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24
          }}>
            {cartItems.map((item, index) => (
              <div key={index} style={{
                border: '1px solid #eee',
                borderRadius: 12,
                padding: 16,
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 200,
                    height: 250,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                />
                <p style={{ fontWeight: 'bold', marginBottom: 4 }}>{item.title}</p>
                <p>{item.price.toLocaleString()}원 × {item.count}개</p>
                <div style={{ marginTop: 12 }}>
                  <button onClick={() => removeItem(item.title)} style={{
                    padding: '4px 8px',
                    fontSize: 16,
                    marginRight: 8
                  }}>➖</button>
                  <button onClick={() => addItem(item.title)} style={{
                    padding: '4px 8px',
                    fontSize: 16
                  }}>➕</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
