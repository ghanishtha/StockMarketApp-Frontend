import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";
import axios from "axios";
import BASE_URL from "../services/NetworkRequests";
const  AddCompany = () => {

    useEffect(() => {
        document.title = "Add Company";
    }, []);

    const [company, setCompany] = useState([{}]);

    //form handler function
    const handleForm=(e)=>{
        console.log(company);
        postDataToServer(company);
        e.preventDefault();
    }

    //creating function to post data to server
    const postDataToServer = (data) => {
        axios.post(`${BASE_URL}/companies`, data).then(
            (response)=>{
                console.log(response);
                console.log("Success");
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    return (
        <div>
            <h1 className="text-center">Add a new Company</h1>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                    <Label for="name" sm={2}>Company Name</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Company Name" name="name" id="name" 
                            onChange={(e)=>{
                                setCompany({...company, name: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="turnover" sm={2}>Turnover</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Company Turnover" name="turnover" id="turnover"
                            onChange={(e)=>{
                                setCompany({...company, turnover: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="ceo" sm={2}>Company CEO</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Company CEO" name="ceo" id="ceo"
                            onChange={(e)=>{
                                setCompany({...company, ceo: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="boardOfDirectors" sm={2}>Board Of Directors</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Board Of Directors" name="boardOfDirectors" id="boardOfDirectors"
                        onChange={(e)=>{
                            setCompany({...company, boardOfDirectors: e.target.value});
                        }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="writeUp" sm={2}>Brief Write-Up</Label>
                    <Col sm={10}>
                        <Input type="textarea" placeholder="Enter Brief Write-Up" name="writeUp" id="writeUp"
                        onChange={(e)=>{
                            setCompany({...company, writeUp: e.target.value});
                        }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Button type="submit" color="success">Add Company</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddCompany;