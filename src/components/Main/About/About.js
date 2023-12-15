import React from 'react'
import Adrian from "../../../assets/icons_assets/Mario and Adrian A.jpg"
const About = () => {
    
    return (
        <div>
            <div className='about'>
                <div className='abouttext'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate dolore, voluptas autem
                    magni iste quam sequi ut error modi dolorem, inventore excepturi praesentium nihil ratione, esse
                    maxime tempora atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis quia
                    officia ad harum sunt provident suscipit aspernatur maiores libero nulla praesentium sint dolorum
                    nemo, molestiae, neque velit! Reiciendis, itaque. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit.
                    </p>
                </div>
               
                <div className='img'>
                    <img src={Adrian} alt='restaurant'  />
                </div>
            </div>
        </div>
    )
}

export default About
