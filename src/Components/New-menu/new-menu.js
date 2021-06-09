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
    const [titleErr, setTitleErr] = useState(false);
    const [descriptionErr, setDescriptionErr] = useState(false);
    const [ingrediantsErr, setIngrediantsErr] = useState(false);

    const validTitle = new RegExp(".+");
    const validDescription = new RegExp(".+");
    const validIngrediants = new RegExp(".+");

    const checkValidations = () => {
        if(validTitle.test(title) && validDescription.test(description) && validIngrediants.test(ingrediants)) {
            return true
        }
        return false
    }

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
        if(checkValidations()){
            axios.post("http://localhost:3002/menu_items", {
                menu_item: {
                    title: title,
                    description: description,
                    category: category,
                    ingrediants: ingrediants,
                    url: url
                }
            }, {
                withCredentials: true
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log("menu item creation error", error)
            })
        } else {
            validTitle.test(title) ? setTitleErr(false) : setTitleErr(true);
            validDescription.test(description) ? setDescriptionErr(false) : setDescriptionErr(true);
            validIngrediants.test(ingrediants) ? setIngrediantsErr(false) : setIngrediantsErr(true);
        }
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
                            <Form.Control type="text" name="title" placeholder="Name of menu item" className={ titleErr ? "invalid" : ""} onChange={handleTitleChange} value={title} />
                            { titleErr ? <p className="invalid-text">title can not be empty</p> : ""}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Description" className={ descriptionErr ? "invalid" : ""} onChange={handleDescriptionChange} value={description} />
                            { descriptionErr ? <p className="invalid-text">description can not be empty</p> : ""}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Ingrediants (seprate each ingrediant with a comma and a space)</Form.Label>
                            <Form.Control type="text" placeholder="pickels, lettuce, chicken" className={ ingrediantsErr ? "invalid" : ""} name="date" onChange={handleIngrediantsChange} value={ingrediants} />
                            { ingrediantsErr ? <p className="invalid-text">ingrediants can not be empty</p> : ""}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" defaultValue="public" name="public" onChange={handleCategoryChange} value={category} required>
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
