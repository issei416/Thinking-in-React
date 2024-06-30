import React, { useState } from 'react'
import Searchbar from './Searchbar'
import ProductsTable from './ProductsTable'

const FilterableProductsTable = ({ products }) => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    
  return (
      <>
          <Searchbar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={ setFilterText} onInStockOnlyChange = {setInStockOnly}  />
          <ProductsTable products= { products } filterText={filterText} inStockOnly={inStockOnly} />
      </>
  )
}

export default FilterableProductsTable