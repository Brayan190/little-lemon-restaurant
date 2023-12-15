import React from 'react'
import CardsListItem from './CardsListItem'
const data = [
    {
        id: 1,
        img: "profile1.webp",
        name: "Alfonso",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        ranking:4,
    },
    {
        id: 2,
        img: "profile3.avif",
        name: "Marian",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        ranking:3,
    },
    {
        id: 3,
        img: "profile4.avif",
        name: "Everlyn",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        ranking:4,
    },
    {
        id: 4,
        img: "profile5.webp",
        name: "Aiden",
        review: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        ranking:5,
    },
]
const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div>
                <h1>Testimonials</h1>
            </div>
            <ul>
                {data.map((product, index) =>
                    // <h1>vff</h1>
                    <CardsListItem key ={product.id} product={product}/>
                )}
            </ul>
        </div>
    )
}

export default Testimonials
