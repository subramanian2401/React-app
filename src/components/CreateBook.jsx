import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {

    let [name,setname]=useState("")
    let [author,setauthor]=useState("")
    let [price,setprice]=useState("")
    let navigate=useNavigate()
    let getname=(e)=>{
      setname(e.target.value)
    }
    let getauthor=(e)=>{
        setauthor(e.target.value)
      }
      let getprice=(e)=>{
        setprice(e.target.value)
      }
      let savebook=()=>{
        let payload={
            bookname:name,
            bookauthor:author,
            bookprice:price
        }
        axios.post("http://localhost:5000/books",payload)
        .then(()=>{console.log("Data Saved");
                  alert("Book Saved ")
                navigate("/books")})
        .catch(()=>{console.log("Error while Saving");})
      }

    return (
        <div>
            <table>
                <tr>
                    <th>Book Name</th>
                    <td><input type="text" placeholder='Enter the Name'  value={name} onChange={getname} /></td>
                </tr>
                <tr>
                    <th>Book Authur</th>
                    <td><input type="text" placeholder='Enter the Author' value={author} onChange={getauthor}/></td>
                </tr>
                <tr>
                    <th>Book Name</th>
                    <td><input type="number" placeholder='Enter the  Book Price' value={price} onChange={getprice} /></td>
                </tr>
                <tr>
                    <th><button onClick={savebook}>Submit</button></th>
                </tr>
            </table>
        </div>
    );
}

export default CreateBook;
