import React from 'react'

const CategoryRow = ({category}) => {
    return (
      <>
            <tr>
                <th colSpan={"2"} className='border'>
                    {category}
                </th>
            </tr>
      </>
  )
}

export default CategoryRow