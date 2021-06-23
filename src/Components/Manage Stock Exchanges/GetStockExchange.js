import React, { useEffect, useState } from 'react';
import {Button, Table} from 'reactstrap';
import axios from 'axios';
import BASE_URL from '../../services/NetworkRequests';
import { useHistory, Link } from 'react-router-dom';

const GetStockExchanges = () => {

    let history = useHistory();

    /*constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }*/

    useEffect(() => {
        document.title = "Stock Exchanges";
        getStockExchangesFromServer();
    }, []);


    //function to call server:
    const getStockExchangesFromServer = () => {
        axios.get(`${BASE_URL}/stockExchanges`).then(
            (response) => {
                console.log(response);
                setStockExchanges(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const [stockExchanges, setStockExchanges] = useState([]);

    return(
        <div>
            <h1 className="text-center"> Stock Exchanges List</h1>
            <Table bordered striped>
                <thead>
                    <tr className="text-center">
                        <td>Stock Exchanges Name</td>
                        <td>Brief</td>
                        <td>Address</td>
                        <td>Remarks</td>
                        <td>Edit</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        stockExchanges.map(
                            stockExchange => 
                            <tr key = {stockExchange.id}>
                                <td>{stockExchange.stockExchangeName}</td>
                                <td>{stockExchange.brief}</td>
                                <td>{stockExchange.address}</td>
                                <td>{stockExchange.remarks}</td>
                                <Link to={{
                                    pathname: `/updateStockExchange/${stockExchange.id}`,
                                    state: stockExchange.id
                                }}><td><Button color="warning" outline>Update</Button></td></Link>
                            </tr>
                        )
                    }
                
                </tbody>
            </Table>

            <Button onClick={()=> {
                history.push('/addStockExchange');
            }}>Add Stock Exchange</Button>
        
        </div>
    )
}

export default GetStockExchanges;