import React, { useState, useEffect } from 'react'
import MenuItem from '../menu-item/menu-item'
import axios from 'axios';

const MenuCategory = ({ category }) => {

    const [response, setResponse] = useState([])

    useEffect(() => {
            axios.get("http://localhost:3002/menu_items")
                .then(res => {
                    console.log(res.data.menu_items)
                    let arr = res.data.menu_items
                    setResponse(arr)
                    console.log(response)
                })
            }, [])

    return (
        <div className="menu-category">
            <h2>{category}</h2>
            <div className="menu-items-grid">
                {response.map(item => {
                    if(item.category === category) {
                        return <MenuItem url={item.url} title={item.title} ingrediants={item.ingrediants} description={item.description} id={item.id} />
                    }
                })}
            </div>
        </div>
    )
}

export default MenuCategory
