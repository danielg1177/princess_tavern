import React, { useState, useEffect } from 'react'
import MenuItem from '../menu-item/menu-item'
import axios from 'axios';

const MenuCategory = ({ category }) => {

    const [response, setResponse] = useState([])

    useEffect(() => {
            axios.get("https://princestavernapi.netlify.app/menu_items")
                .then(res => {
                    let arr = res.data.menu_items
                    setResponse(arr)
                })
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [])

    return (
        <div className="menu-category">
            <h2>{category}</h2>
            <div className="menu-items-grid">
                {response.map(item => {
                    if (item.category === category) {
                        return <MenuItem url={item.url} title={item.title} ingrediants={item.ingrediants} description={item.description} id={item.id} key={item.id} />
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default MenuCategory
