import React from 'react'

const Modal = ({ handleClose, title, description, ingrediants, url }) => {

    return (
        <div className='modal'>
            <div className="inner-modal-container" onClick={handleClose}>
                <div className="inner-modal-card">
                    <div  className="modal-img" style={{backgroundImage: `url(${url})`}}>
                    </div>
                    <h1>{title}</h1>
                    <div className="modal-info">
                        <div className="description">
                            <h4>Description:</h4>
                            <p>{description}</p>
                        </div>
                        <div className="ingrediants">
                            <h4>Ingrediants:</h4>
                            <p>{ingrediants}</p>
                        </div>
                    </div>
                    <div>
                        {/* add to cart button */}
                    </div>
                </div>
            </div>
        </div>
    )
   
}

export default Modal
