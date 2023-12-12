import React from 'react'
import CardsListItem from './CardsListItem'
const data = [
    {
        id: 1,
        img: "greek salad.jpg",
        name: "Alfonso",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        raking:4,
    },
    {
        id: 2,
        img: "greek salad.jpg",
        name: "Alfonso",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        raking:4,
    },
    {
        id: 3,
        img: "greek salad.jpg",
        name: "Alfonso",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        raking:4,
    },
    {
        id: 4,
        img: "greek salad.jpg",
        name: "Alfonso",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        raking:4,
    },
]
const Testimonials = () => {
    return (
        <div>
            <div>
                <h1>Specials</h1>
            </div>
            {data.map((product, index) =>
                // <h1>vff</h1>
                <CardsListItem key ={product.id} product={product}/>
            )}
        </div>
    )
}

export default Testimonials
