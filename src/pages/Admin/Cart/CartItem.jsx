import React from "react";

const CartItem = (item) => {
  const cartItem = item;
  return (
    <>
      {cartItem && (
        <tr key={cartItem.id}>
          <td className="flex items-center w-128">
            {cartItem?.product?.title}
          </td>
          <td>{cartItem.amount}</td>
          <td>{parseInt(cartItem?.product?.discountPrice)}</td>
          <td>
            {cartItem.amount * parseInt(cartItem?.product?.discountPrice)}
          </td>
        </tr>
      )}
    </>
  );
};

export default CartItem;
