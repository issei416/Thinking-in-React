import React from "react";
import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";

const ProductsTable = ({ products , filterText, inStockOnly}) => {
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
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
