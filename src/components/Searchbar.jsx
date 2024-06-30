import React from 'react'

const Searchbar = ({filterText , inStockOnly}) => {
  return (
      <>
          <form className='d-flex flex-column'>
              <input type="text" value={ filterText} placeholder="search..." />
              <label>
                  <input type="checkbox" checked={ inStockOnly} />
                  {" "}
                  only show products in stock
              </label>
          </form>
      </>
  )
}

export default Searchbar