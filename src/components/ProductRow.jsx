import React from "react";

const ProductRow = ({ product }) => {
  return (
    <>
      <tr className= {product.stocked ? "" : "text-danger"}>
        <td className="text-start">{product.name}</td>
        <td className="text-end">{product.price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
