import React from 'react'
import CardsListItem from './CardsListItem'
const data = [
    {
        id: 1,
        img: "greek salad.jpg",
        name: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        price: 12.99,
        delivery: 4
    },
    {
        id: 2,
        img: "lemon dessert.jpg",
        name: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        price: 12.99,
        delivery: 4
    },
    {
        id: 3,
        img: "greek salad.jpg",
        name: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        price: 12.99,
        delivery: 4
    }
]
const Highlights = () => {
    return (
        <div className='highlights'>
            <div>
                <h1>Specials</h1>
                <button>Menu online</button>
            </div>
            <ul className='containerlist'>
                {data.map((product, index) =>
                    // <h1>vff</h1>
                    <CardsListItem key ={product.id} product={product}/>
                )}
            </ul>
        </div>
    )
}

export default Highlights
