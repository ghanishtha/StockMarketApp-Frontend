import React, { useEffect, useState } from 'react';
import {Button, Table} from 'reactstrap';
import axios from 'axios';
import BASE_URL from '../../services/NetworkRequests';
import { useHistory, Link } from 'react-router-dom';

const GetSectors = () => {

    let history = useHistory();

    /*constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }*/

    useEffect(() => {
        document.title = "Sectors";
        getSectorsFromServer();
    }, []);


    //function to call server:
    const getSectorsFromServer = () => {
        axios.get(`${BASE_URL}/sectors`).then(
            (response) => {
                console.log(response);
                setSectors(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const [sectors, setSectors] = useState([]);

    return(
        <div>
            <h1 className="text-center"> Sectors List</h1>
            <Table bordered striped>
                <thead>
                    <tr className="text-center">

                        <td>Sector Name</td>
                        <td>Sector Brief</td>
                        <td>Edit</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        sectors.map(
                            sector => 
                            <tr key = {sector.id}>
                                <td>{sector.sectorName}</td>
                                <td>{sector.brief}</td>
                                <Link to={{
                                    pathname: `/updateSector/${sector.id}`,
                                    state: sector.id
                                }}><td><Button color="warning" outline>Update</Button></td></Link>
                            </tr>
                        )
                    }
                
                </tbody>
            </Table>

            <Button onClick={()=> {
                history.push('/addSector');
            }}>Add Sector</Button>
        
        </div>
    )
}

export default GetSectors;