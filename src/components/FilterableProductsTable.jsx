import React from 'react'
import Searchbar from './Searchbar'
import ProductsTable from './ProductsTable'

const FilterableProductsTable = ({products}) => {
  return (
      <>
          <Searchbar />
          <ProductsTable products= { products } />
      </>
  )
}

export default FilterableProductsTable