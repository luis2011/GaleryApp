import React from 'react'
import PropTypes from 'prop-types'


//<Card img={images.urls.regular}/> esto viene desde Cards por props 
const Card = ({img}) => {
    return (
      <div>
        <div
        className="card m-2" style={{
        width: "18rem",
        
        }}>
                <img src={img}
                 className="card-img-top" alt="imagen.png"/>
            </div>
      </div>
    )
}

Card.propTypes = {
    img: PropTypes.string
}

export default Card

