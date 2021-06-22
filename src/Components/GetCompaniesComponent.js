import React, { useEffect, useState } from 'react';
import {Button, Table} from 'reactstrap';
import axios from 'axios';
import BASE_URL from '../services/NetworkRequests';

const GetCompaniesComponent = () => {

    /*constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }*/

    useEffect(() => {
        document.title = "Companies";
        getCompaniesFromServer();
    }, []);


    //function to call server:
    const getCompaniesFromServer = () => {
        axios.get(`${BASE_URL}/companies`).then(
            (response) => {
                console.log(response);
                setCompanies(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const [companies, setCompanies] = useState([]);


    return(
        <div>
            <h1 className="text-center"> Companies List</h1>
            <Table bordered striped>
                <thead>
                    <tr className="text-center">

                        <td>Company ID</td>
                        <td>Company Name</td>
                        <td>CEO</td>
                        <td>Board Of Directors</td>
                        <td>Turnover</td>
                        <td>Write-Up</td>
                        <td>Edit</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        companies.map(
                            company => 
                            <tr key = {company.id}>
                                <td>{company.id}</td>
                                <td>{company.name}</td>
                                <td>{company.ceo}</td>
                                <td>{company.boardOfDirectors}</td>
                                <td>{company.turnover}</td>
                                <td>{company.writeUp}</td>
                                <td><Button color="warning" outline>Update</Button></td>
                            </tr>
                        )
                    }
                
                </tbody>
            </Table>

            <Button>Add Company</Button>
        
        </div>
    )
}

export default GetCompaniesComponent;