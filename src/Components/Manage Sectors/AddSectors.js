import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";
import axios from "axios";
import BASE_URL from "../../services/NetworkRequests";
//import { useHistory } from "react-router-dom";
const  AddSector = () => {

    //let history = useHistory();
    useEffect(() => {
        document.title = "Add Sector";
    }, []);

    const [sector, setSector] = useState([{}]);

    //form handler function
    const handleForm=(e)=>{
        console.log(sector);
        postDataToServer(sector);
        e.preventDefault();
        //history.push('/addSector');
    }

    //creating function to post data to server
    const postDataToServer = (data) => {
        axios.post(`${BASE_URL}/sectors`, data).then(
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
            <h1 className="text-center">Add a new Sector</h1>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                    <Label for="sectorName" sm={2}>Sector Name</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Sector Name" name="sectorName" id="sectorName" 
                            onChange={(e)=>{
                                setSector({...sector, sectorName: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="brief" sm={2}>Brief</Label>
                    <Col sm={10}>
                        <Input type="textarea" placeholder="Enter Sector Brief" name="brief" id="brief"
                            onChange={(e)=>{
                                setSector({...sector, brief: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Col>
                        <Button type="submit" color="success" >Add Sector</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddSector;