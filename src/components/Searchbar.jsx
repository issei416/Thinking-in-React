import React from 'react'

const Searchbar = () => {
  return (
      <>
          <form className='d-flex flex-column'>
              <input type="text" placeholder="search..." />
              <label>
                  <input type="checkbox" />
                  {" "}
                  only show products in stock
              </label>
          </form>
      </>
  )
}

export default Searchbar