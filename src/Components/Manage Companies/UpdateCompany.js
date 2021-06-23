import {useEffect, useState} from 'react';

const UpdateCompany =() =>{

    useEffect(()=>{
        document.title='Update Company';
    }, []);

    //const {state, setState} = useState([{}]);

    return(
        <div>
            Here we will updateCompany!
        </div>
    )


}

export default UpdateCompany;