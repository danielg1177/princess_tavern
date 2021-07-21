import React, { useState } from 'react';
import Modal from '../Modal/modal'

const MenuItem = ({title, ingrediants, description, url, id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="menu-item-container" id={id}>
            <div className="menu-item-closed"  onClick={handleShow}>
                <div className="menu-item-img" style={{backgroundImage: `url(${url})`}}>

                </div>
                <div className="menu-item-heading">
                    <h4>{title}</h4>
                </div>
            </div>
            {show && <Modal handleClose={handleClose} url={url} title={title} ingrediants={ingrediants} description={description}/>}
        </div>
    )
}

export default MenuItem
