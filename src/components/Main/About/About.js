import React from 'react'
import Mario from "../../../assets/icons_assets/Mario and Adrian A.jpg"
import Adrian from "../../../assets/icons_assets/Mario and Adrian A.jpg"
const About = () => {
    return (
        <div>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div>
                    <img src={Mario} alt='restaurant' width={300} />
                </div>
                <div>
                    <img src={Adrian} alt='restaurant' width={300} />
                </div>
            </div>
        </div>
    )
}

export default About
