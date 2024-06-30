import React from "react";
import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";

const ProductsTable = ({ products }) => {
    const rows = [];
    let lastCategory = null;
    
    console.log(products);

    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(
                <CategoryRow category={product.category} key={product.category} />
            )
        }
        rows.push(
            <ProductRow product = {product} key = {product.name} />
        )
        lastCategory = product.category;
    })
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="col-2">Name</th>
            <th className="col-2">Price</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
