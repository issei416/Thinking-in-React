import React from 'react'

const Searchbar = ({filterText , inStockOnly, onFilterTextChange, onInStockOnlyChange}) => {
  return (
      <>
          <form className='d-flex flex-column'>
              <input type="text" value={filterText} placeholder="search..." onChange={ (e) => onFilterTextChange(e.target.value) } />
              <label>
                  <input type="checkbox" checked={ inStockOnly} onChange = {(e) => onInStockOnlyChange(e.target.checked)} />
                  {" "}
                  only show products in stock
              </label>
          </form>
      </>
  )
}

export default Searchbar