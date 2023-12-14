import React from 'react'
// import img from "../../../assets/icons_assets/greek salad.jpg"
const SpecialImg = require.context("../../../assets/icons_assets")
const Card = ({product}) => {

  return (
    <div className='cardproduct'>
        <img src={SpecialImg(`./${product.img}`)} alt={product.name} width={300} height={250}/>
      <div>
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
      </div>
      <p>{product.description}</p>
      <h4>Order delivery ${product.price}</h4>
    </div>
  )
}

export default Card
