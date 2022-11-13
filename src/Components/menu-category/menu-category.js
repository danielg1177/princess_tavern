import React, { useState, useEffect } from 'react'
import MenuItem from '../menu-item/menu-item'
import axios from 'axios';

const MenuCategory = ({ category }) => {

    const [response, setResponse] = useState([])

    useEffect(() => {
            // axios.get("https://princestavernapi.netlify.app/menu_items")
            //     .then(res => {
            //         let arr = res.data.menu_items
                    // setResponse(arr)
            // })
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setResponse([
                {title: "Cheese Burger", category: "Mains", description: "A very well made cheeseburger", ingrediants: 'bread, meat, pickels, lettuce, fried egg', url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
                {title: "Home Fries", category: "Sides", description: "The crunchiest home fries out there", ingrediants: 'potatoes, salt, olive oil, special seasoning, fried egg', url: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
                {title: "Side Salmon Salad", category: "Sides", description: "Side Salad", ingrediants: 'edomame, corn, cucumber, tomato, egg, salmon', url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"},
                {title: "Pizza", category: "Mains", description: "A very well made cheeseburger", ingrediants: 'bread, meat, pickels, lettuce, fried egg', url: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"},
                {title: "Buffalo Wings", category: "Sides", description: "The crunchiest home fries out there", ingrediants: 'potatoes, salt, olive oil, special seasoning, fried egg', url: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"},
                {title: "Asparagus Salad", category: "Sides", description: "Fresh Edomame", ingrediants: 'edomame, salt', url: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"},
                {title: "Pork Chop", category: "Mains", description: "A very well made cheeseburger", ingrediants: 'bread, meat, pickels, lettuce, fried egg', url: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"},
                {title: "Shrimps", category: "Sides", description: "The crunchiest home fries out there", ingrediants: 'potatoes, salt, olive oil, special seasoning, fried egg', url: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
                {title: "Eggplant Salad", category: "Sides", description: "Fresh Edomame", ingrediants: 'edomame, salt', url: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1514&q=80"},
                {title: "Shakshuka", category: "Mains", description: "A very well made cheeseburger", ingrediants: 'bread, meat, pickels, lettuce, fried egg', url: "https://images.unsplash.com/photo-1582492710145-d723e0a219f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxtZWFsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
                {title: "Vegetable Platter", category: "Sides", description: "The crunchiest home fries out there", ingrediants: 'potatoes, salt, olive oil, special seasoning, fried egg', url: "https://images.unsplash.com/photo-1561363268-f17491a094bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"},
                {title: "Okinawa soba", category: "Mains", description: "A very well made cheeseburger", ingrediants: 'bread, meat, pickels, lettuce, fried egg', url: "https://images.unsplash.com/photo-1568096889942-6eedde686635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"},
                {title: "Fried Rice", category: "Sides", description: "The crunchiest home fries out there", ingrediants: 'potatoes, salt, olive oil, special seasoning, fried egg', url: "https://images.unsplash.com/photo-1490990813269-10586274747f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80"},
                {title: "Mini Pizza", category: "Sides", description: "Fresh Edomame", ingrediants: 'edomame, salt', url: "https://images.unsplash.com/photo-1585995207653-dc16855299da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
            ])
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
