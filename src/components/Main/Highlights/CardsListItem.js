import React from 'react'
import Card from './Card'

const CardsListItem = ({product}) => {
  
  return (
    <li className='cardlist'>
      <Card product={product}/>
    </li>
  )
}

export default CardsListItem
