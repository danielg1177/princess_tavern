import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const NewMenu = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [ingrediants, setIngrediants] = useState("")
    const [url, setUrl] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleIngrediantsChange = (e) => {
        setIngrediants(e.target.value)
    }

    const handleURLChange = (e) => {
        setUrl(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(description)
        console.log(category)
        console.log(ingrediants.split(','))
        console.log(url)

        axios.post("http://localhost:3002/api/v1/menu_items", {
            menu_item: {
                title: title,
                description: description,
                category: category,
                ingrediants: ingrediants.split(','),
                url: url
            }
        }).then(response => {
            console.log("Menu create response", response)
        }).catch(error => {
            console.log("Menu create error", error)
        })
    }

    return (
        
            <Accordion>
            <div>
                {/* <a className="scehdueled-event-dropdown-a" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> */}
                <Accordion.Toggle variant="link" eventKey="1" className="admin-acord">
                    <div className="new-event-drop">
                        <h2>Add a new menu item</h2>
                    </div>
                </Accordion.Toggle>
                {/* </a> */}
                {/* <div class="collapse" id="collapseExample"> */}
                <Accordion.Collapse eventKey="1" className="acord">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Name of menu item" onChange={handleTitleChange} value={title} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Description" onChange={handleDescriptionChange} value={description} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Ingrediants (seprate each ingrediant with a comma and a space)</Form.Label>
                            <Form.Control type="text" placeholder="pickels, lettuce, chicken" name="date" onChange={handleIngrediantsChange} value={ingrediants} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" defaultValue="public" name="public" onChange={handleCategoryChange} value={category}>
                                <option>Sides</option>
                                <option>Mains</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control type="text" name="url" placeholder="Image URL" onChange={handleURLChange} value={url} />
                        </Form.Group>
                        <div className="form-button-container">
                            <Button className="form-button" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                    
                </Accordion.Collapse>
                {/* </div> */}
            </div>
        </Accordion>
    )
}

export default NewMenu
