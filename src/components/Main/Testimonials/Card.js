import React from 'react'
// import img from "../../../assets/icons_assets/greek salad.jpg"
const SpecialImg = require.context("../../../assets/icons_assets")
const Card = ({product}) => {

  return (
    <div>
      <h3>Ranking{product.raking}</h3>
        <img src={SpecialImg(`./${product.img}`)} alt={product.name} width={300}/>
      <h1>{product.name}</h1>
      <p>{product.review}</p>
    </div>
  )
}

export default Card
