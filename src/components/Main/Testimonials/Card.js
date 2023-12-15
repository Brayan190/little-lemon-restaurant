import React from 'react'
import { FaStar } from "react-icons/fa";
// import img from "../../../assets/icons_assets/greek salad.jpg"
const SpecialImg = require.context("../../../assets/icons_assets")
const Card = ({ product }) => {

  const Rating = ({ ranking }) => {
    // console.log(ranking)
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index}>
        {index < Math.floor(ranking) ? <FaStar color="gold" /> : <FaStar color="gray" />}
      </span>
    ));

    return <p >{stars}</p>;
  };

  return (
    <div>
      <Rating ranking={product.ranking} />
      <img src={SpecialImg(`./${product.img}`)} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.review}</p>
    </div>
  )
}

export default Card
