import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
    
    let [data,setdata]=useState([])
    let [reload,setreload]=useState(false)
    
    useEffect(()=>{
        axios.get("http://localhost:5000/books")
        .then((resp)=>{setdata(resp.data);console.log("Got The Book Data");
        setreload(false)})
      

    },[setreload])
      

    let formdelete=(id)=>{
        axios.delete(`http://localhost:5000/books/${id}`)
        .then(()=>{console.log("Deleted Sucessfully");
        setreload(true)})
        .catch(()=>{console.log("Error");})
        
    }


    return(
        <div>
            {
                data.map((b)=>{
                    return(
                        <div>
                            <table>
                                <tr>
                                 <th>Name</th>
                                 <td>{b.bookname}</td>
                                </tr>
                                <tr>
                                 <th>Author</th>
                                 <td>{b.bookauthor}</td>
                                </tr>
                                <tr>
                                 <th>Price</th>
                                 <td>{b.bookprice}</td>
                                </tr>
                                <tr>
                                 <th><button><Link to={`/edit/${b.id}`}>EDIT</Link></button></th>
                                 <th><button onClick={()=>{formdelete(b.id)}}>Delete</button></th>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Books;



