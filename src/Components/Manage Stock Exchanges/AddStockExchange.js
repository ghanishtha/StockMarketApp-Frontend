import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";
import axios from "axios";
import BASE_URL from "../../services/NetworkRequests";
//import { useHistory } from "react-router-dom";
const  AddStockExchange = () => {

    //let history = useHistory();
    useEffect(() => {
        document.title = "Add StockExchange";
    }, []);

    const [stockExchange, setStockExchange] = useState([{}]);

    //form handler function
    const handleForm=(e)=>{
        console.log(stockExchange);
        postDataToServer(stockExchange);
        e.preventDefault();
        //history.push('/addCompany');
    }

    //creating function to post data to server
    const postDataToServer = (data) => {
        axios.post(`${BASE_URL}/stockExchanges`, data).then(
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
            <h1 className="text-center">Add a new StockExchange</h1>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                    <Label for="stockExchangeName" sm={2}>Stock Exchange Name</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Stock Exchange Name" name="stockExchangeName" id="stockExchangeName" 
                            onChange={(e)=>{
                                setStockExchange({...stockExchange, stockExchangeName: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="brief" sm={2}>Brief</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Brief" name="brief" id="brief"
                            onChange={(e)=>{
                                setStockExchange({...stockExchange, brief: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="address" sm={2}>Address</Label>
                    <Col sm={10}>
                        <Input type="text" placeholder="Enter Address" name="address" id="address"
                            onChange={(e)=>{
                                setStockExchange({...stockExchange, address: e.target.value});
                            }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="remarks" sm={2}>Remarks</Label>
                    <Col sm={10}>
                        <Input type="textarea" placeholder="Enter Remarks" name="remarks" id="remarks"
                        onChange={(e)=>{
                            setStockExchange({...stockExchange, remarks: e.target.value});
                        }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Button type="submit" color="success" >Add Stock Exchange</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddStockExchange;