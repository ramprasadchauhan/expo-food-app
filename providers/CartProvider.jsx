import { createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (product, size) => {
    // if already in cart, increment quantity
    const existingItem = items.find(
      (item) => item.product === product && item.size === size
    );

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
    console.log(product, size);
    const newCartItem = {
      id: randomUUID(), // genrated
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };
  const updateQuantity = (itemId, amount) => {
    setItems(
      items
        .map((item) =>
          item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        .filter((item) => item.quantity > 0)
    );
    console.log(itemId, amount);
  };
  // console.log(items);
  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );
  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
