import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const Bookedit = () => {
    let [name,setname]=useState("")
    let [author,setauthor]=useState("")
    let [price,setprice]=useState("")
    let navigate=useNavigate()
    let bookid=useParams()
    useEffect(()=>{
        
        axios.get(`http://localhost:5000/books/${bookid.id}`)
        .then((resp)=>{
          setname(resp.data.bookname)
          setauthor(resp.data.bookauthor)
          setprice(resp.data.bookprice)
        })
        .catch(()=>{"Error"})

    },[])
    let getname=(e)=>{
      setname(e.target.value)
    }
    let getauthor=(e)=>{
        setauthor(e.target.value)
    }
    let getprice=(e)=>{
    setprice(e.target.value)
    }
    let update=()=>{
        let payload={
            bookname:name,
            bookauthor:author,
            bookprice:price
        }
        axios.put(`http://localhost:5000/books/${bookid.id}`,payload)
        .then(()=>{
          alert("Updated Sucessfully")
          navigate("/books")
        })
        
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Book Name</th>
                    <td><input type="text" placeholder='Enter the Name'  value={name} onChange={getname} /></td>
                </tr>
                <tr>
                    <th>Book Author</th>
                    <td><input type="text" placeholder='Enter the Author' value={author} onChange={getauthor}/></td>
                </tr>
                <tr>
                    <th>Book Name</th>
                    <td><input type="number" placeholder='Enter the  Book Price' value={price} onChange={getprice} /></td>
                </tr>
                <tr>
                    <th><button onClick={update} >Update</button></th>
                </tr>
            </table> 
        </div>
    );
}

export default Bookedit;










