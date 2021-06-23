import React from 'react';
import { Form, FormGroup, Input, Label, FormText } from "reactstrap"
import {OutTable, ExcelRendered} from 'react-excel-renderer';
//import { useState } from "react";
export class ImportData extends React.Component{

    state = {
        rows: "",
        columns: ""
    }

    fileHandler=(event) => {
        let fileObj = event.target.files[0];
        console.log(fileObj);
        ExcelRendered(fileObj, (err, resp)=> {
            if(err){
                console.log(err);
            }
            else{
                this.setState({
                    columns: resp.cols,
                    rows: resp.rows
                });
            }
        });
    }
    render(){

        return(
            <div>
                <Form>
                    <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" onChange={this.fileHandler.bind(this)} style={{"padding": "10px"}} />
                    <FormText color="muted">
                    </FormText>
                    <div>
                        {this.state.rows && <OutTable data ={this.state.rows} columns={this.state.columns} tableClassName="ExcelTable" tableHeaderRowClass="heading" />}
                    </div>
                    </FormGroup>
                </Form>
            </div>  
        )

    }
    
}

export default ImportData;
