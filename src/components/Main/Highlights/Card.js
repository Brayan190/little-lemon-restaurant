import React from 'react'
// import img from "../../../assets/icons_assets/greek salad.jpg"
const SpecialImg = require.context("../../../assets/icons_assets")
const Card = ({product}) => {

  return (
    <div>
        <img src={SpecialImg(`./${product.img}`)} alt={product.name} width={300}/>
      <h1>{product.name}</h1>
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      <p>Order delivery ${product.price}</p>
    </div>
  )
}

export default Card
